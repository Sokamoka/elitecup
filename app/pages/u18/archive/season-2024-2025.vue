<script setup lang="ts">
import { useDataTable } from '@lostui/utils';
import { RESULT_TABLE_COLUMNS } from '~/constants';
import data from '../data/2025.json';

const { locale } = useI18n();
const { columnModel, state } = useDataTable(RESULT_TABLE_COLUMNS, data);
</script>

<template>
  <div>
    <h1 class="text-2xl text-slate-900 font-bold my-8">{{ $t('menu.season') }} 2024-2025</h1>

    <SeasonProvider class="space-y-8" :championship-id="3724" #default="{ championshipId, data }">
      <div v-for="(tournament, index) in data">
        <h2 class="font-bold text-xl leading-10">{{ index + 1 }}. Tournament</h2>
        <mjsz-vbr-schedule
          :locale="locale"
          :championship-id="championshipId"
          :phase-id="tournament.phaseId"
          hide-columns="broadcast,more"
        />
        <mjsz-vbr-standings :locale="locale" :championship-id="championshipId" :phase-id="tournament.phaseId" />
      </div>
    </SeasonProvider>

    <div class="py-8">
      <div class="w-full overflow-auto">
        <DataTablePublic :column-model="columnModel" :row-model="state"></DataTablePublic>
      </div>
    </div>
  </div>
</template>
