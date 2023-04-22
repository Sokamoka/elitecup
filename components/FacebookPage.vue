<script setup>
const app = useNuxtApp();

const el = ref(null);
const width = ref(0);
const height = ref(0);

useEventListener(window, 'fb-sdk:ready', resizeContainer);
useEventListener(window, 'resize', useDebounceFn(resizeContainer, 500));

onMounted(() => resizeContainer());

function resizeContainer() {
  if (!app.$FB) return;
  const { offsetWidth, offsetHeight } = unrefElement(el)?.parentNode ?? {};
  width.value = offsetWidth;
  height.value = offsetHeight;
  useTimeoutFn(() => app.$FB?.XFBML.parse(), 1000);
}
</script>

<template>
  <div
    ref="el"
    class="fb-page"
    data-href="https://www.facebook.com/elitecup"
    data-show-posts="true"
    :data-width="width"
    :data-height="height"
    data-small-header="true"
    data-adapt-container-width="false"
    data-hide-cover="true"
    data-show-facepile="false"
  >
    <blockquote cite="https://www.facebook.com/elitecup" class="fb-xfbml-parse-ignore">
      <a href="https://www.facebook.com/elitecup">Elite Cup</a>
    </blockquote>
  </div>
</template>
