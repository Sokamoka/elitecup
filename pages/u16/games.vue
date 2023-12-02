<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold my-8">
    {{ $t('menu.games') }}
  </h1>
  <div class="mb-8 space-y-8">
    <div>
      <h2 class="font-bold text-xl leading-10">Csíkkarcfalva</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45178" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45178" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Miskolc</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45181" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45181" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Nitra</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45182" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45182" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45183" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45183" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Szombathely</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45184" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45184" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Szombathely</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45185" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45185" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45186" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45186" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">-</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45187" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45187" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest, Salzburg, Székefehérvár</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45310" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45310" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Trencín </h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45379" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45379" />
      </ClientOnly>
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Székesfehérvár</h2>
      <ClientOnly>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45380" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45380" />
      </ClientOnly>
    </div>

  </div>
</template>
