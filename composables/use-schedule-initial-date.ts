import { MaybeRef } from "@vueuse/core";

export function useScheduleInitialDate(date: MaybeRef<Date | null>) {
  const initialDate = ref<Date>(new Date());

  watch(
    () => unref(date),
    (date) => {
      initialDate.value = date ? new Date(date) : initialScheduledPublishDate();
    },
    {
      immediate: true,
    }
  );

  return initialDate;
}
