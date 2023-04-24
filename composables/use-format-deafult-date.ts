export function useFormatDefaultDate() {
  const { locale, locales } = useI18n();
  const currentLocaleObject = computed(() => locales.value?.find((loc) => loc.code === locale.value));

  const format = (date: string) => toDefaultDate(new Date(date), currentLocaleObject.value?.iso);

  return {
    format,
  };
}
