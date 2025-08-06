<script lang="ts" setup>
const copyYear = computed(() => new Date().getFullYear());
</script>

<template>
  <div class="flex p-4 border-t border-slate-300 text-xs text-slate-400 justify-between">
    <p class="uppercase">
      ©{{ copyYear }} EliteCup.eu
    </p>
    <NuxtLink to="/admin" class="uppercase">Admin</NuxtLink>
  </div>
</template>
