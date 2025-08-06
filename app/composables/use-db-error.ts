import { ComposerTranslation } from "@nuxtjs/i18n/dist/runtime/composables";

export function useDBError(
  error: { code: string; details: string; hint: string | null; message: string },
  key: string,
  t: ComposerTranslation
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
