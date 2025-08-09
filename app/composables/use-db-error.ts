// import type { ComposerTranslation } from "@nuxtjs/i18n";

export function useDBError(
  error: { code: string; details: string; hint: string | null; message: string },
  key: string,
  t: any,
) {
  switch (error.code) {
    case '23505':
      return t(`admin.error.${key}.unique_violation`);
      break;

    default:
      return error.message;
      break;
  }
}
