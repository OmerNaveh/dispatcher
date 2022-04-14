import { ApiNewsLanguage } from "ts-newsapi/lib/types";

export const languageRegexDetecor = (language: ApiNewsLanguage) => {
  if (!language) return;
  if (language === "ar")
    return new RegExp(
      "[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]"
    );
  if (language === "he") return new RegExp("[\u0590-\u05FF]");
  return new RegExp("[a-zA-Z]");
};
