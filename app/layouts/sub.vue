<template>
  <div class="container mx-auto px-4">
    <BaseHeader />
    <MainMenu />
    <slot name="header" />
    <div class="grid grid-cols-1 md:grid-cols-[1fr_33%] items-start gap-4 pt-8 mb-8">
      <slot />
      <slot name="sidebar" />
    </div>
    <BaseFooter />
  </div>
</template>
