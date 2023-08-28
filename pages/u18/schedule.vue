<script setup>
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8">
    {{ $t('title.schedule-u18') }}
  </h1>
  <div class="py-8 space-y-8">
    <div>
      <h2 class="font-bold text-xl leading-10">Sosnowiec</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - A" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - A" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Nitra</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - B" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - B" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Trencín</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - C" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - C" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Salzburg</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - D" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - D" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - E" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - E" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Székesfehérvár</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - F" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - F" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Vienna</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - G" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - G" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Graz</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - H" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - H" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Zlin</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3447" division="Preliminary Round - I" />
        <mjsz-vbr-standings :locale="locale" championship-id="3447" division="Preliminary Round - I" />
      </ClientOnly>
    </div>
  </div>
</template>
