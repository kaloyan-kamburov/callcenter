import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/Input/Input";
import { isStrongPassword } from "@/utils/validations/password";
import { useResetPasswordMutation } from "@/features/auth/authApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function ResetPasswordPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [resetPassword] = useResetPasswordMutation();
  const validationSchema = Yup.object({
    password: Yup.string()
      .required(t("common.validation.required"))
      .test(
        "strong-password",
        t("resetPassword.validation.weakPassword"),
        (value) => isStrongPassword(value ?? ""),
      ),
    confirmPassword: Yup.string()
      .required(t("common.validation.required"))
      .oneOf([Yup.ref("password")], t("resetPassword.validation.passwordsMustMatch")),
  });

  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100%" }}>
      <Card variant="outlined" sx={{ p: 4, width: 400 }}>
        <Typography variant="h6" component="h1" gutterBottom align="center">
          {t("resetPassword.title")}
        </Typography>
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const token = searchParams.get("token");
              if (!token) {
                toast.error(t("resetPassword.tokenMissing"));
                return;
              }
              await resetPassword({
                token,
                password: values.password,
              }).unwrap();
              toast.success(t("resetPassword.passwordUpdated"));
              navigate("/login");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Box display="grid" gap={2}>
                <Input
                  name="password"
                  label={t("resetPassword.password")}
                  type="password"
                  showPasswordToggle
                />
                <Input
                  name="confirmPassword"
                  label={t("resetPassword.confirmPassword")}
                  type="password"
                  showPasswordToggle
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  {t("resetPassword.submit")}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}
