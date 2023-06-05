<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold my-8">
    {{ $t('menu.games') }}
  </h1>
  <div class="mb-8 space-y-8">
    <div>
      <h2 class="font-bold text-xl leading-10">Salzburg</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - A" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - A" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Vienna</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - B" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - B" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Kosice, Spisská Nová Ves, Budapest</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - C" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - C" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest, Miskolc</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - D" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - D" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - E" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - E" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Zvolen</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - F" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - F" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Banska Bystrica</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - G" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - G" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Klagenfurt</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - H" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - H" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Nitra</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - I" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - I" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - J" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - J" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Graz</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - K" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - K" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Székesfehérvár</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3311" division="Preliminary Round - L" />
        <mjsz-vbr-standings :locale="locale" championship-id="3311" division="Preliminary Round - L" />
      </ClientOnly>
    </div>
  </div>
</template>
