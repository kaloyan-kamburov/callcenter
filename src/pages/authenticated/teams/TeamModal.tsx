import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import { useCreateTeamMutation, useGetTeamQuery, useUpdateTeamMutation } from "@/features/team/teamsApi";
import { useGetAdminSupervisorsQuery } from "@/features/admin/adminsApi";
import type { Team, TeamUpsertPayload } from "@/types/Team";
import Input from "@/components/form/Input/Input";
import Select from "@/components/form/Select/Select";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type TeamModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  teamId?: number;
  team?: Team;
  isOpen?: boolean;
};

const defaultValues: TeamUpsertPayload = {
  id: null,
  name: "",
  supervisorId: null,
  supervisorName: "",
  isActive: true,
  isDeleted: false,
  agents: [],
};

export default function TeamModal({
  close,
  mode = "create",
  teamId,
  team,
  isOpen = false,
}: TeamModalProps) {
  const { t } = useTranslation();
  const [createTeam, { isLoading: isCreating }] = useCreateTeamMutation();
  const [updateTeam, { isLoading: isUpdating }] = useUpdateTeamMutation();
  const supervisorsOptionsSource = useGetAdminSupervisorsQuery();
  const { data: teamDetails, isLoading: isLoadingDetails } = useGetTeamQuery(
    teamId as number,
    {
      skip: mode !== "edit" || !teamId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );
  const isLoading = isCreating || isUpdating || isLoadingDetails;

  const mergedInitialValues: TeamUpsertPayload = {
    ...defaultValues,
    ...(mode === "edit" && teamDetails
      ? teamDetails
      : mode === "edit" && team
        ? team
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("teams.modal.editTitle")}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "grid", placeItems: "center", minHeight: 180 }}>
            <Loader />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>{t("common.cancel")}</Button>
        </DialogActions>
      </>
    );
  }

  return (
    <Formik
      initialValues={mergedInitialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const selectedSupervisor =
            supervisorsOptionsSource.data?.find(
              (supervisor) => supervisor.id === Number(values.supervisorId),
            ) ?? null;

          const payload: TeamUpsertPayload = {
            ...values,
            id: mode === "create" ? null : (teamId ?? values.id ?? null),
            supervisorId:
              values.supervisorId === null || values.supervisorId === undefined
                ? null
                : Number(values.supervisorId),
            supervisorName: selectedSupervisor?.name ?? values.supervisorName ?? "",
            agents: values.agents ?? [],
          };

          if (mode === "create") {
            await createTeam(payload).unwrap();
            toast.success(t("teams.modal.createdSuccess"));
            close();
            return;
          }

          await updateTeam(payload).unwrap();
          toast.success(t("teams.modal.updatedSuccess"));
          close();
        } finally {
          setSubmitting(false);
        }
      }}
      enableReinitialize
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form>
          <DialogTitle>
            {mode === "create" ? t("teams.modal.addTitle") : t("teams.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12 }}>
                <Input name="name" label={t("teams.modal.fields.name")} required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Select
                  name="supervisorId"
                  label={t("teams.modal.fields.supervisor")}
                  optionsSource={supervisorsOptionsSource}
                  mapOption={(supervisor) => ({
                    label: supervisor.name,
                    value: supervisor.id,
                  })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.isActive}
                      onChange={(_, checked) => setFieldValue("isActive", checked)}
                    />
                  }
                  label={t("teams.modal.fields.isActive")}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.isDeleted}
                      onChange={(_, checked) => setFieldValue("isDeleted", checked)}
                    />
                  }
                  label={t("teams.modal.fields.isDeleted")}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={close} disabled={isLoading || isSubmitting}>
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              variant="contained"
              loading={isLoading || isSubmitting}
              disabled={isLoading || isSubmitting}
            >
              {mode === "create" ? t("common.create") : t("common.save")}
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
}
