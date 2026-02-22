import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import Input from "@/components/form/Input/Input";
import Select from "@/components/form/Select/Select";
import {
  useCreateScriptMutation,
  useGetScriptQuery,
  useUpdateScriptMutation,
} from "@/features/script/scriptsApi";
import {
  SCRIPT_TYPES,
  type Script,
  type ScriptType,
  type ScriptUpsertPayload,
} from "@/types/Script";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type ScriptModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  scriptId?: number;
  script?: Script;
  isOpen?: boolean;
};

type ScriptQuestionType = "multiple" | "single" | "text";

type ScriptOption = {
  label: string;
  value: string;
};

type ScriptQuestion = {
  title: string;
  type: ScriptQuestionType;
  options: ScriptOption[];
};

type ScriptPage = {
  title: string;
  description: string;
  questions: ScriptQuestion[];
};

type ScriptContent = {
  pages: ScriptPage[];
};

type ScriptFormValues = ScriptUpsertPayload & {
  contentBuilder: ScriptContent;
};

const QUESTION_TYPES: ScriptQuestionType[] = ["multiple", "single", "text"];

const defaultValues: ScriptFormValues = {
  id: 0,
  title: "",
  type: "Community",
  content: "",
  contentBuilder: {
    pages: [],
  },
};

function createEmptyOption(): ScriptOption {
  return { label: "", value: "" };
}

function createEmptyQuestion(
  type: ScriptQuestionType = "single",
): ScriptQuestion {
  return {
    title: "",
    type,
    options: type === "text" ? [] : [createEmptyOption()],
  };
}

function createEmptyPage(): ScriptPage {
  return {
    title: "",
    description: "",
    questions: [],
  };
}

function normalizeQuestionType(value: unknown): ScriptQuestionType {
  if (QUESTION_TYPES.includes(value as ScriptQuestionType)) {
    return value as ScriptQuestionType;
  }

  return "single";
}

function normalizeContent(raw: unknown): ScriptContent {
  if (!raw || typeof raw !== "object") {
    return { pages: [] };
  }

  const pagesRaw = (raw as { pages?: unknown }).pages;
  const pages = Array.isArray(pagesRaw)
    ? pagesRaw.map((page) => {
        const pageObject = page && typeof page === "object" ? page : {};
        const questionsRaw = (pageObject as { questions?: unknown }).questions;
        const questions = Array.isArray(questionsRaw)
          ? questionsRaw.map((question) => {
              const questionObject =
                question && typeof question === "object" ? question : {};
              const type = normalizeQuestionType(
                (questionObject as { type?: unknown }).type,
              );
              const optionsRaw = (questionObject as { options?: unknown })
                .options;
              const options = Array.isArray(optionsRaw)
                ? optionsRaw.map((option) => {
                    const optionObject =
                      option && typeof option === "object" ? option : {};
                    return {
                      label: String(
                        (optionObject as { label?: unknown }).label ?? "",
                      ),
                      value: String(
                        (optionObject as { value?: unknown }).value ?? "",
                      ),
                    };
                  })
                : [];

              return {
                title: String(
                  (questionObject as { title?: unknown }).title ?? "",
                ),
                type,
                options: type === "text" ? [] : options,
              };
            })
          : [];

        return {
          title: String((pageObject as { title?: unknown }).title ?? ""),
          description: String(
            (pageObject as { description?: unknown }).description ?? "",
          ),
          questions,
        };
      })
    : [];

  return { pages };
}

function parseScriptContent(content: string): ScriptContent {
  if (!content?.trim()) {
    return { pages: [] };
  }

  try {
    const parsed = JSON.parse(content);
    return normalizeContent(parsed);
  } catch {
    return { pages: [] };
  }
}

function serializeContent(contentBuilder: ScriptContent) {
  return JSON.stringify(contentBuilder);
}

export default function ScriptModal({
  close,
  mode = "create",
  scriptId,
  script,
  isOpen = false,
}: ScriptModalProps) {
  const { t } = useTranslation();
  const [createScript, { isLoading: isCreating }] = useCreateScriptMutation();
  const [updateScript, { isLoading: isUpdating }] = useUpdateScriptMutation();
  const { data: scriptDetails, isLoading: isLoadingDetails } =
    useGetScriptQuery(scriptId as number, {
      skip: mode !== "edit" || !scriptId || !isOpen,
      refetchOnMountOrArgChange: true,
    });

  const isLoading = isCreating || isUpdating || isLoadingDetails;
  const mergedInitialValues: ScriptFormValues = {
    ...defaultValues,
    ...(mode === "edit" && scriptDetails
      ? {
          id: scriptDetails.id,
          title: scriptDetails.title ?? "",
          type: (scriptDetails.type ?? "Community") as ScriptType,
          content: scriptDetails.content ?? "",
          contentBuilder: parseScriptContent(scriptDetails.content ?? ""),
        }
      : mode === "edit" && script
        ? {
            id: script.id,
            title: script.title ?? "",
            type: (script.type ?? "Community") as ScriptType,
            content: script.content ?? "",
            contentBuilder: parseScriptContent(script.content ?? ""),
          }
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("scripts.modal.editTitle")}</DialogTitle>
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
    <Formik<ScriptFormValues>
      initialValues={mergedInitialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const serializedContent = serializeContent(values.contentBuilder);

          if (mode === "create") {
            const payload: ScriptUpsertPayload = {
              id: 0,
              title: values.title,
              type: values.type as ScriptType,
              content: serializedContent,
            };
            await createScript(payload).unwrap();
            toast.success(t("scripts.modal.createdSuccess"));
            close();
            return;
          }

          if (!scriptId) {
            return;
          }

          const payload: ScriptUpsertPayload = {
            id: scriptId,
            title: values.title,
            type: values.type as ScriptType,
            content: serializedContent,
          };
          await updateScript(payload).unwrap();
          toast.success(t("scripts.modal.updatedSuccess"));
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
            {mode === "create"
              ? t("scripts.modal.addTitle")
              : t("scripts.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid size={{ xs: 12 }}>
                <Input
                  name="title"
                  label={t("scripts.modal.fields.title")}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Select
                  name="type"
                  label={t("scripts.modal.fields.type")}
                  options={SCRIPT_TYPES.map((type) => ({
                    label: t(`scripts.types.${type}`),
                    value: type,
                  }))}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      {t("scripts.modal.contentBuilder.title")}
                    </Typography>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        setFieldValue("contentBuilder.pages", [
                          ...values.contentBuilder.pages,
                          createEmptyPage(),
                        ]);
                      }}
                    >
                      {t("scripts.modal.contentBuilder.addPage")}
                    </Button>
                  </Box>

                  {values.contentBuilder.pages.length === 0 && (
                    <Typography variant="body2" color="text.secondary">
                      {t("scripts.modal.contentBuilder.noPages")}
                    </Typography>
                  )}

                  {values.contentBuilder.pages.map((page, pageIndex) => (
                    <Box
                      key={`page-${pageIndex}`}
                      sx={{
                        mt: 1.5,
                        p: 2,
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1.5,
                        }}
                      >
                        <Typography variant="subtitle2">
                          <b>
                            {t("scripts.modal.contentBuilder.pageLabel", {
                              index: pageIndex + 1,
                            })}
                          </b>
                        </Typography>
                        <Button
                          color="error"
                          size="small"
                          onClick={() => {
                            setFieldValue(
                              "contentBuilder.pages",
                              values.contentBuilder.pages.filter(
                                (_, idx) => idx !== pageIndex,
                              ),
                            );
                          }}
                        >
                          {t("scripts.modal.contentBuilder.removePage")}
                        </Button>
                      </Box>

                      <Grid container spacing={1.5}>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Input
                            name={`contentBuilder.pages.${pageIndex}.title`}
                            label={t(
                              "scripts.modal.contentBuilder.fields.pageTitle",
                            )}
                            required
                          />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Input
                            name={`contentBuilder.pages.${pageIndex}.description`}
                            label={t(
                              "scripts.modal.contentBuilder.fields.pageDescription",
                            )}
                            required
                          />
                        </Grid>
                      </Grid>

                      <Box sx={{ mt: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography variant="body2" fontWeight={600}>
                            {t("scripts.modal.contentBuilder.fields.questions")}
                          </Typography>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => {
                              const nextPages = [
                                ...values.contentBuilder.pages,
                              ];
                              const nextQuestions = [
                                ...nextPages[pageIndex].questions,
                                createEmptyQuestion(),
                              ];
                              nextPages[pageIndex] = {
                                ...nextPages[pageIndex],
                                questions: nextQuestions,
                              };
                              setFieldValue("contentBuilder.pages", nextPages);
                            }}
                          >
                            {t("scripts.modal.contentBuilder.addQuestion")}
                          </Button>
                        </Box>

                        {page.questions.map((question, questionIndex) => {
                          const questionPath = `contentBuilder.pages.${pageIndex}.questions.${questionIndex}`;
                          return (
                            <Box
                              key={`question-${pageIndex}-${questionIndex}`}
                              sx={{
                                mt: 1,
                                p: 1.5,
                                border: (theme) =>
                                  `1px dashed ${theme.palette.divider}`,
                                borderRadius: 1,
                                backgroundColor: "grey.50",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  mb: 1,
                                }}
                              >
                                <Typography variant="body2">
                                  {t(
                                    "scripts.modal.contentBuilder.questionLabel",
                                    {
                                      index: questionIndex + 1,
                                    },
                                  )}
                                </Typography>
                                <Button
                                  size="small"
                                  color="error"
                                  onClick={() => {
                                    const nextPages = [
                                      ...values.contentBuilder.pages,
                                    ];
                                    const nextQuestions = nextPages[
                                      pageIndex
                                    ].questions.filter(
                                      (_, idx) => idx !== questionIndex,
                                    );
                                    nextPages[pageIndex] = {
                                      ...nextPages[pageIndex],
                                      questions: nextQuestions,
                                    };
                                    setFieldValue(
                                      "contentBuilder.pages",
                                      nextPages,
                                    );
                                  }}
                                >
                                  {t(
                                    "scripts.modal.contentBuilder.removeQuestion",
                                  )}
                                </Button>
                              </Box>

                              <Grid container spacing={1.5}>
                                <Grid size={{ xs: 12, md: 7 }}>
                                  <Input
                                    name={`${questionPath}.title`}
                                    label={t(
                                      "scripts.modal.contentBuilder.fields.questionTitle",
                                    )}
                                    required
                                  />
                                </Grid>
                                <Grid size={{ xs: 12, md: 5 }}>
                                  <TextField
                                    select
                                    size="small"
                                    fullWidth
                                    label={t(
                                      "scripts.modal.contentBuilder.fields.questionType",
                                    )}
                                    value={question.type}
                                    onChange={(event) => {
                                      const nextType = event.target
                                        .value as ScriptQuestionType;
                                      const nextPages = [
                                        ...values.contentBuilder.pages,
                                      ];
                                      const currentQuestion =
                                        nextPages[pageIndex].questions[
                                          questionIndex
                                        ];
                                      nextPages[pageIndex].questions[
                                        questionIndex
                                      ] = {
                                        ...currentQuestion,
                                        type: nextType,
                                        options:
                                          nextType === "text"
                                            ? []
                                            : currentQuestion.options.length > 0
                                              ? currentQuestion.options
                                              : [createEmptyOption()],
                                      };
                                      setFieldValue(
                                        "contentBuilder.pages",
                                        nextPages,
                                      );
                                    }}
                                  >
                                    {QUESTION_TYPES.map((type) => (
                                      <MenuItem key={type} value={type}>
                                        {t(
                                          `scripts.modal.contentBuilder.questionTypes.${type}`,
                                        )}
                                      </MenuItem>
                                    ))}
                                  </TextField>
                                </Grid>
                              </Grid>

                              {question.type !== "text" && (
                                <Box sx={{ mt: 1.5 }}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      mb: 1,
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      fontWeight={600}
                                    >
                                      {t(
                                        "scripts.modal.contentBuilder.fields.options",
                                      )}
                                    </Typography>
                                    <Button
                                      size="small"
                                      variant="outlined"
                                      onClick={() => {
                                        const nextPages = [
                                          ...values.contentBuilder.pages,
                                        ];
                                        const nextQuestion =
                                          nextPages[pageIndex].questions[
                                            questionIndex
                                          ];
                                        nextPages[pageIndex].questions[
                                          questionIndex
                                        ] = {
                                          ...nextQuestion,
                                          options: [
                                            ...(nextQuestion.options ?? []),
                                            createEmptyOption(),
                                          ],
                                        };
                                        setFieldValue(
                                          "contentBuilder.pages",
                                          nextPages,
                                        );
                                      }}
                                    >
                                      {t(
                                        "scripts.modal.contentBuilder.addOption",
                                      )}
                                    </Button>
                                  </Box>

                                  {question.options.map((_, optionIndex) => (
                                    <Grid
                                      key={`option-${pageIndex}-${questionIndex}-${optionIndex}`}
                                      container
                                      spacing={1}
                                      sx={{ mb: 1 }}
                                    >
                                      <Grid size={{ xs: 12, md: 5 }}>
                                        <Input
                                          name={`${questionPath}.options.${optionIndex}.label`}
                                          label={t(
                                            "scripts.modal.contentBuilder.fields.optionTitle",
                                          )}
                                          required
                                        />
                                      </Grid>
                                      <Grid size={{ xs: 12, md: 6 }}>
                                        <Input
                                          name={`${questionPath}.options.${optionIndex}.value`}
                                          label={t(
                                            "scripts.modal.contentBuilder.fields.optionValue",
                                          )}
                                          required
                                        />
                                      </Grid>
                                      <Grid size={{ xs: 12, md: 1 }}>
                                        <Box
                                          sx={{
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <IconButton
                                            color="error"
                                            onClick={() => {
                                              const nextPages = [
                                                ...values.contentBuilder.pages,
                                              ];
                                              const nextQuestion =
                                                nextPages[pageIndex].questions[
                                                  questionIndex
                                                ];
                                              nextPages[pageIndex].questions[
                                                questionIndex
                                              ] = {
                                                ...nextQuestion,
                                                options:
                                                  nextQuestion.options.filter(
                                                    (_, idx) =>
                                                      idx !== optionIndex,
                                                  ),
                                              };
                                              setFieldValue(
                                                "contentBuilder.pages",
                                                nextPages,
                                              );
                                            }}
                                          >
                                            <DeleteIcon fontSize="small" />
                                          </IconButton>
                                        </Box>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  ))}
                </Box>
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
