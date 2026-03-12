import { useState, useMemo, useEffect } from "react";
import {
  Alert,
  Box,
  Typography,
  Button,
  Stack,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ScriptContent } from "@/types/ScriptContent";
import { OTHER_OPTION_VALUE } from "@/types/ScriptContent";

type ScriptDisplayProps = {
  content: string | null | undefined;
  disabled?: boolean;
};

function parseScriptContent(
  content: string | null | undefined,
): ScriptContent | null {
  if (!content?.trim()) return null;
  try {
    const parsed = JSON.parse(content) as ScriptContent;
    if (!parsed?.pages || !Array.isArray(parsed.pages)) return null;
    return parsed;
  } catch {
    return null;
  }
}

type AnswersState = Record<string, string | string[]>;

export default function ScriptDisplay({
  content,
  disabled = false,
}: ScriptDisplayProps) {
  const { t } = useTranslation();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [validationErrorKey, setValidationErrorKey] = useState<string | null>(
    null,
  );

  const script = useMemo(() => parseScriptContent(content), [content]);

  useEffect(() => {
    setValidationErrorKey(null);
  }, [answers]);

  const getQuestionKey = (pageIndex: number, qIndex: number) => {
    let idx = 0;
    for (let p = 0; p < pageIndex; p++) {
      idx += script?.pages[p]?.questions?.length ?? 0;
    }
    return `question${idx + qIndex + 1}`;
  };

  const isQuestionAnswered = (key: string) => {
    const val = answers[key];
    if (Array.isArray(val)) {
      return val.length > 0;
    }
    if (val === OTHER_OPTION_VALUE) {
      const otherVal = answers[`${key}_other`];
      return typeof otherVal === "string" && otherVal.trim().length > 0;
    }
    return typeof val === "string" && val.trim().length > 0;
  };

  const isCurrentPageComplete = () => {
    const currentPage = script?.pages[currentPageIndex];
    if (!currentPage) return true;
    return currentPage.questions.every((_, qIndex) => {
      const key = getQuestionKey(currentPageIndex, qIndex);
      return isQuestionAnswered(key);
    });
  };

  const handleNextPage = () => {
    setValidationErrorKey(null);
    if (!isCurrentPageComplete()) {
      setValidationErrorKey("answerAllBeforeNextPage");
      return;
    }
    setCurrentPageIndex((i) => i + 1);
  };

  const isAllPagesComplete = () => {
    let qIdx = 1;
    for (const page of script?.pages ?? []) {
      for (let i = 0; i < page.questions.length; i++) {
        const key = `question${qIdx}`;
        if (!isQuestionAnswered(key)) return false;
        qIdx++;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    setValidationErrorKey(null);
    if (!isAllPagesComplete()) {
      setValidationErrorKey("answerAllToSubmit");
      return;
    }

    const answersByPage: (string | string[])[][] = [];
    let qIdx = 1;
    script?.pages.forEach((page) => {
      const pageAnswers: (string | string[])[] = [];
      page.questions.forEach(() => {
        const key = `question${qIdx}`;
        const val = answers[key];
        if (Array.isArray(val)) {
          pageAnswers.push(val);
        } else if (val === OTHER_OPTION_VALUE) {
          const otherVal = answers[`${key}_other`];
          pageAnswers.push(typeof otherVal === "string" ? otherVal : "");
        } else {
          pageAnswers.push(val ?? "");
        }
        qIdx++;
      });
      answersByPage.push(pageAnswers);
    });
    const payload = { answers: answersByPage };
    console.log(payload);
  };

  if (!script || script.pages.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        {t("agent.calls.script.noContent")}
      </Typography>
    );
  }

  const page = script.pages[currentPageIndex];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === script.pages.length - 1;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 2,
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">{page.title}</Typography>
        {page.description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {page.description}
          </Typography>
        )}
      </Box>

      <Stack spacing={3} sx={{ flex: 1, overflow: "auto" }}>
        {page.questions.map((q, qIndex) => {
          const key = getQuestionKey(currentPageIndex, qIndex);
          const value = answers[key];
          return (
            <Box key={qIndex} sx={{ py: 0.5 }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                {q.title}
              </Typography>
              {q.type === "single" && (
                <RadioGroup
                  name={key}
                  value={typeof value === "string" ? value : ""}
                  onChange={(_, v) => setAnswers((a) => ({ ...a, [key]: v }))}
                >
                  {q.options.map((opt, optIndex) => (
                    <FormControlLabel
                      key={optIndex}
                      value={opt.value}
                      control={<Radio />}
                      label={opt.label}
                      sx={{ m: 0 }}
                    />
                  ))}
                  {q.hasOther && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      <FormControlLabel
                        value={OTHER_OPTION_VALUE}
                        control={<Radio />}
                        label={t("agent.calls.script.otherOption")}
                        sx={{ m: 0 }}
                      />
                      {value === OTHER_OPTION_VALUE && (
                        <TextField
                          size="small"
                          // fullWidth
                          placeholder={t("agent.calls.script.otherPlaceholder")}
                          value={
                            typeof answers[`${key}_other`] === "string"
                              ? answers[`${key}_other`]
                              : ""
                          }
                          onChange={(e) =>
                            setAnswers((a) => ({
                              ...a,
                              [`${key}_other`]: e.target.value,
                            }))
                          }
                        />
                      )}
                    </Box>
                  )}
                </RadioGroup>
              )}
              {q.type === "multiple" && (
                <Stack spacing={0.5}>
                  {q.options.map((opt, optIndex) => (
                    <FormControlLabel
                      key={optIndex}
                      value={opt.value}
                      control={
                        <Checkbox
                          checked={
                            Array.isArray(value)
                              ? value.includes(opt.value)
                              : false
                          }
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setAnswers((a) => {
                              const arr = Array.isArray(a[key])
                                ? (a[key] as string[])
                                : [];
                              const next = checked
                                ? [...arr, opt.value]
                                : arr.filter((v) => v !== opt.value);
                              return { ...a, [key]: next };
                            });
                          }}
                        />
                      }
                      label={opt.label}
                    />
                  ))}
                </Stack>
              )}
              {q.type === "text" && (
                <TextField
                  size="small"
                  fullWidth
                  placeholder={q.title}
                  multiline
                  rows={3}
                  value={typeof value === "string" ? value : ""}
                  onChange={(e) =>
                    setAnswers((a) => ({ ...a, [key]: e.target.value }))
                  }
                />
              )}
            </Box>
          );
        })}
      </Stack>

      {validationErrorKey && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {t(`agent.calls.script.${validationErrorKey}`)}
        </Alert>
      )}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        sx={{ mt: "auto" }}
      >
        <Button
          variant="outlined"
          disabled={isFirstPage}
          onClick={() => setCurrentPageIndex((i) => i - 1)}
        >
          {t("agent.calls.script.previousPage")}
        </Button>
        {isLastPage ? (
          <Button variant="contained" onClick={handleSubmit}>
            {t("agent.calls.script.submit")}
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNextPage}>
            {t("agent.calls.script.nextPage")}
          </Button>
        )}
      </Stack>
    </Box>
  );
}
