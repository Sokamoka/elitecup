<script setup>
const isFBReady = ref(false);

// isFBReady.value = $FB !== undefined;
window.addEventListener('fb-sdk-ready', onFBReady);

function onFBReady() {
  isFBReady.value = true;
}
</script>

<template>
  <div
    v-if="isFBReady"
    class="fb-page"
    data-href="https://www.facebook.com/elitecup"
    data-tabs="timeline"
    data-width=""
    data-height="100%"
    data-small-header="true"
    data-adapt-container-width="true"
    data-hide-cover="true"
    data-show-facepile="false"
  >
    <blockquote cite="https://www.facebook.com/elitecup" class="fb-xfbml-parse-ignore">
      <a href="https://www.facebook.com/elitecup">Elite Cup</a>
    </blockquote>
  </div>
</template>
