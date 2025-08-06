// import { WritableComputedRef } from 'nuxt/dist/app/compat/capi';

export function useFormatDefaultDate() {
  const { locale, locales } = useI18n<{
    locale: WritableComputedRef<string>;
    locales: ComputedRef<{ code: string; iso: string }[]>;
  }>();
  const currentLocaleObject = computed<{ iso: string }>(() =>
    locales.value.find((loc: { code: string }) => loc.code === locale.value),
  );

  const format = (date: string) => toDefaultDate(new Date(date), currentLocaleObject.value?.iso ?? 'en-US');

  return {
    format,
  };
}
