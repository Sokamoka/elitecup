<script setup lang="ts">
import { useDataTable } from '@lostui/utils';
import { omit } from 'ramda';
import { RESULT_TABLE_COLUMNS } from '../../constants';
import data from './data/2023.json';

const { locale } = useI18n();
const { columnModel, state } = useDataTable(omit(['best'], RESULT_TABLE_COLUMNS), data);
</script>

<template>
  <div>
    <h1 class="text-2xl text-slate-900 font-bold my-8">
      {{ $t('menu.archive') }}
    </h1>

    <h2 class="text-xl text-slate-900 font-bold my-4">2023-2024</h2>

    <div class="mb-8 space-y-8">
      <div>
        <h2 class="font-bold text-xl leading-10">Csíkkarcfalva</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45178" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45178" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Miskolc</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45181" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45181" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Nitra</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45182" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45182" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Budapest</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45183" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45183" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Szombathely</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45184" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45184" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Szombathely</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45185" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45185" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Budapest</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45186" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45186" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">-</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45187" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45187" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Budapest, Salzburg, Székefehérvár</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45310" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45310" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Trencín</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45379" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45379" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Székesfehérvár</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45380" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45380" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Salzburg</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45393" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45393" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Veszprém, Székesfehérvár, Budapest</h2>

        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45398" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45398" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Pilsen</h2>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45428" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45428" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Graz</h2>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45489" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45489" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Brunico</h2>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45550" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45550" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">DVTK Ice Hockey Cup - Miskolc</h2>
        <mjsz-vbr-schedule :locale="locale" championship-id="3649" />
        <mjsz-vbr-standings :locale="locale" championship-id="3649" />
      </div>

      <div>
        <h2 class="font-bold text-xl leading-10">Budapest</h2>
        <mjsz-vbr-schedule :locale="locale" championship-id="3444" phase-id="45582" />
        <mjsz-vbr-standings :locale="locale" championship-id="3444" phase-id="45582" />
      </div>
    </div>

    <h2 class="text-xl text-slate-900 font-bold my-4">2022-2023</h2>

    <div class="w-full overflow-auto">
      <DataTablePublic :column-model="columnModel" :row-model="state"></DataTablePublic>
    </div>
  </div>
</template>
