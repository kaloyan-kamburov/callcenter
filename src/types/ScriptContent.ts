export type ScriptQuestionOption = {
  label: string;
  value: string;
};

export type ScriptQuestion = {
  title: string;
  type: "single" | "multiple" | "text";
  options: ScriptQuestionOption[];
};

export type ScriptPage = {
  title: string;
  description: string;
  questions: ScriptQuestion[];
};

export type ScriptContent = {
  pages: ScriptPage[];
};
