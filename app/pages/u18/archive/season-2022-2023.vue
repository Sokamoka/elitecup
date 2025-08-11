<script setup lang="ts">
import { useDataTable } from '@lostui/utils';
import { STANDINGS_COLUMNS } from '~/constants';
import data from '../data/2023.json';

const { columnModel, state: rows } = useDataTable(STANDINGS_COLUMNS, data);
</script>

<template>
  <div>
    <h1 class="text-2xl text-slate-900 font-bold my-8">{{ $t('menu.season') }} 2022-2023</h1>

    <div class="w-full overflow-auto">
      <DataTablePublic :column-model="columnModel" :row-model="rows"></DataTablePublic>
    </div>
  </div>
</template>
