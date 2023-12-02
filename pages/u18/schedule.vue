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
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" division="Preliminary Round - A" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - A" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Nitra</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" division="Preliminary Round - B" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - B" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Trencín</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" division="Preliminary Round - C" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - C" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Salzburg</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" division="Preliminary Round - D" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - D" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" division="Preliminary Round - E" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - E" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Székesfehérvár</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" division="Preliminary Round - F" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - F" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Vienna</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" division="Preliminary Round - G" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - G" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Graz</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" division="Preliminary Round - H" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - H" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Zlín</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45195" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45195" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45381" hide-columns="broadcast,more" />
        <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45381" />
      </ClientOnly>
    </div>
  </div>
</template>
