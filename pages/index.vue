<template>
  <div class="pt-8">
    <div class="flex flex-col sm:flex-row gap-4 mb-4">
      <div class="flex-1">
        <NewsCard main-image="https://www.elitecup.eu/_upload/news_pic/750x420/4_10743.jpg" />
      </div>
      <div class="w-full sm:w-1/3">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>

    <Banner />

    <div class="grid grid-cols-1 sm:grid-cols-3 grid-rows-none sm:grid-rows-[1fr_300px] sm:grid-flow-col gap-4 mb-8">
      <div class="row-span-2"><MainBox title="Facebook" class="h-full" /></div>
      <div>
        <MainBox title="Videos">
          <template #header-append>
            <FormButton variant="link" class="text-sm"> All videos </FormButton>
          </template>
          <Videos />
        </MainBox>
      </div>
      <div><MainBox title="Instagram" class="h-full" /></div>
      <div class="row-span-2">
        <MainBox title="Schedule" class="h-full">
          <template #header-append>
            <FormButton variant="link" class="text-sm"> All games </FormButton>
          </template>
          <Schedule />
        </MainBox>
      </div>
    </div>

    <PlayerStatistics></PlayerStatistics>

    <Teams />
  </div>
</template>
