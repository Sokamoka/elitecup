<template>
  <h1 class="text-2xl text-gray-900 font-bold my-8">
    {{ $t('menu.statistics') }}
  </h1>
  <ClientOnly>
    <mjsz-vbr-statistics locale="hu" championship-name="Elite Cup U16" />
  </ClientOnly>
</template>
