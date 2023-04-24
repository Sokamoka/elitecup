import { WritableComputedRef } from 'nuxt/dist/app/compat/capi';

export function useFormatDefaultDate() {
  const { locale, locales } = useI18n<{
    locale: WritableComputedRef<string>;
    locales: ComputedRef<{ code: string }[]>;
  }>();
  const currentLocaleObject = computed<{ iso: string}>(() => locales.value.find((loc) => loc.code === locale.value));

  const format = (date: string) => toDefaultDate(new Date(date), currentLocaleObject.value?.iso ?? 'en-US');

  return {
    format,
  };
}
