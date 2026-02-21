import { Box, FormControl, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import flagEn from "./flag-en.svg";
import flagBg from "./flag-bg.svg";

type Language = "en" | "bg";

const AVAILABLE_LANGUAGES: Language[] = ["en", "bg"];
const LANGUAGE_FLAGS: Record<Language, string> = {
  en: flagEn,
  bg: flagBg,
};

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage = AVAILABLE_LANGUAGES.includes(
    i18n.language as Language,
  )
    ? (i18n.language as Language)
    : "en";

  const handleChange = (language: Language) => {
    localStorage.setItem("language", language);
    void i18n.changeLanguage(language);
  };

  const flagCircle = (language: Language, size = 28) => (
    <Box
      aria-label={t(`languages.${language}`)}
      title={t(`languages.${language}`)}
      sx={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
        p: 0.25,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        component="img"
        src={LANGUAGE_FLAGS[language]}
        alt={t(`languages.${language}`)}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </Box>
  );

  return (
    <FormControl size="small" sx={{ width: 64 }}>
      <Select
        value={currentLanguage}
        onChange={(event: SelectChangeEvent<Language>) =>
          handleChange(event.target.value as Language)
        }
        aria-label={t("language")}
        displayEmpty
        renderValue={(value) => flagCircle(value as Language, 22)}
        sx={{
          ".MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            lineHeight: 0,
            minHeight: "22px !important",
            py: 0.5,
            pl: 1,
            pr: 3.5,
          },
        }}
      >
        {AVAILABLE_LANGUAGES.map((language) => (
          <MenuItem
            key={language}
            value={language}
            aria-label={t(`languages.${language}`)}
          >
            {flagCircle(language)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
