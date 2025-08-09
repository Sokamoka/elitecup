export interface UseLazyLoadingStateOptions {
  loadingState: Ref<boolean>;
  delay?: number;
}

export function useLazyLoadingState(options: UseLazyLoadingStateOptions) {
  const { loadingState, delay = 200 } = options;
  const isLazyLoading = ref(false);

  const { start, stop } = useTimeoutFn(() => {
    isLazyLoading.value = true;
  }, delay);

  watch(loadingState, (state) => {
    if (state) return start();
    stop();
    isLazyLoading.value = false;
  });

  return isLazyLoading;
}
