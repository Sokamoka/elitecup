<script lang="ts" setup>
const copyYear = computed(() => new Date().getFullYear());
</script>

<template>
  <div class="flex p-4 border-t border-gray-300 text-xs text-gray-400 justify-between">
    <p class="uppercase">
      ©{{ copyYear }} EliteCup.eu
    </p>
    <button>Admin</button>
  </div>
</template>
