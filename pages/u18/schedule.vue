<script setup>
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-gray-900 font-bold mt-8">Schedule</h1>
  <div class="py-8">
    <HeadlessTabGroup>
      <HeadlessTabList>
        <HeadlessTab class="uppercase p-4 font-bold">Group A</HeadlessTab>
        <HeadlessTab class="uppercase p-4 font-bold">Group B</HeadlessTab>
      </HeadlessTabList>
      <HeadlessTabPanels>
        <HeadlessTabPanel>
          <mjsz-vbr-schedule :locale="locale" championship-id="3312" division="Preliminary Round - A" />
        </HeadlessTabPanel>
        <HeadlessTabPanel>
          <mjsz-vbr-schedule :locale="locale" championship-id="3312" division="Preliminary Round - B" />
        </HeadlessTabPanel>
      </HeadlessTabPanels>
    </HeadlessTabGroup>
  </div>
  
</template>
