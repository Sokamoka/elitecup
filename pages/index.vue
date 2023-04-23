<script setup>
useHead({
  title: 'Main page',
});
</script>
<template>
  <div class="pt-8">
    <MainNews />

    <Banner />

    <div
      class="grid grid-cols-1 sm:grid-cols-3 grid-rows-none sm:grid-rows-[1fr_256px] md:grid-rows-[1fr_292px] lg:grid-rows-[1fr_384px] xl:grid-rows-[1fr_470px] 2xl:grid-rows-[1fr_553px] sm:grid-flow-col gap-4 mb-8"
    >
      <div class="row-span-2">
        <MainBox title="Facebook" class="h-full">
          <FacebookPage />
        </MainBox>
      </div>
      <div>
        <MainBox title="Videos">
          <template #header-append>
            <FormButton variant="link" class="text-sm"> All videos </FormButton>
          </template>
          <Videos />
        </MainBox>
      </div>
      <div>
        <GalleryBox />
      </div>
      <div class="row-span-2">
        <ScheduleMainBox />
      </div>
    </div>

    <ClientOnly>
      <PlayerStatistics />
    </ClientOnly>

    <Teams />
  </div>
</template>
