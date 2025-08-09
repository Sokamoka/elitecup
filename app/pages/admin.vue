<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
});
</script>

<template>
  <NuxtPage />

  <FormConfirm />
  <FormToastContainer />
</template>
