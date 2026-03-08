export type ScriptQuestionOption = {
  label: string;
  value: string;
};

export const OTHER_OPTION_VALUE = "__OTHER__";

export type ScriptQuestion = {
  title: string;
  type: "single" | "multiple" | "text";
  options: ScriptQuestionOption[];
  hasOther?: boolean;
};

export type ScriptPage = {
  title: string;
  description: string;
  questions: ScriptQuestion[];
};

export type ScriptContent = {
  pages: ScriptPage[];
};
