<script setup lang="ts">
import { useDataTable } from '@lostui/utils';
import { RESULT_TABLE_COLUMNS } from '~/constants';
import data from './data/2025.json';

const { columnModel, state } = useDataTable(RESULT_TABLE_COLUMNS, data);
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8">
    {{ $t('title.standings-u18') }}
  </h1>
  <div class="py-8">
    <div class="w-full overflow-auto">
      <DataTablePublic :column-model="columnModel" :row-model="state"></DataTablePublic>
    </div>
  </div>
</template>
