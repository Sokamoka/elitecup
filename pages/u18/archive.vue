<script setup lang="ts">
import { useDataTable } from '@lostui/utils';
import { STANDINGS_COLUMNS } from '../../constants';
import data from './data/2023.json';

const { locale } = useI18n();
const { columnModel, state: rows } = useDataTable(STANDINGS_COLUMNS, data);
</script>

<template>
  <div>
    <h1 class="text-2xl text-slate-900 font-bold my-8">
      {{ $t('menu.archive') }}
    </h1>

    <h2 class="text-xl text-slate-900 font-bold my-4">2023-2024</h2>

    <div class="py-8 space-y-8">
    <div>
      <h2 class="font-bold text-xl leading-10">Sosnowiec</h2>
      <mjsz-vbr-schedule
        :locale="locale"
        championship-id="3445"
        division="Preliminary Round - A"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - A" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Nitra</h2>

      <mjsz-vbr-schedule
        :locale="locale"
        championship-id="3445"
        division="Preliminary Round - B"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - B" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Trencín</h2>

      <mjsz-vbr-schedule
        :locale="locale"
        championship-id="3445"
        division="Preliminary Round - C"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - C" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Salzburg</h2>

      <mjsz-vbr-schedule
        :locale="locale"
        championship-id="3445"
        division="Preliminary Round - D"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - D" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>

      <mjsz-vbr-schedule
        :locale="locale"
        championship-id="3445"
        division="Preliminary Round - E"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - E" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Székesfehérvár</h2>

      <mjsz-vbr-schedule
        :locale="locale"
        championship-id="3445"
        division="Preliminary Round - F"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - F" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Vienna</h2>

      <mjsz-vbr-schedule
        :locale="locale"
        championship-id="3445"
        division="Preliminary Round - G"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - G" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Graz</h2>

      <mjsz-vbr-schedule
        :locale="locale"
        championship-id="3445"
        division="Preliminary Round - H"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" division="Preliminary Round - H" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Zlín</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45195" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45195" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45381" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45381" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Bratislava</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45394" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45394" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45395" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45395" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Budapest</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45396" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45396" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Miskolc</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45397" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45397" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Pergine</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45554" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45554" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Vienna</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45555" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45555" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Salzburg</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3445" phase-id="45583" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3445" phase-id="45583" />
    </div>
  </div>

    <h2 class="text-xl text-slate-900 font-bold my-4">2022-2023</h2>
    <div class="w-full overflow-auto">
      <DataTablePublic :column-model="columnModel" :row-model="rows"></DataTablePublic>
    </div>
  </div>
</template>
