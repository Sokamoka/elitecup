<script setup lang="ts">
import { useDataTable } from '@lostui/utils';
import { omit } from 'ramda';
import { RESULT_TABLE_COLUMNS } from '../../constants';
import data from './data/2023.json';

const { columnModel, state } = useDataTable(omit(['best'], RESULT_TABLE_COLUMNS), data);
</script>

<template>
  <div>
    <h1 class="text-2xl text-slate-900 font-bold my-8">
      {{ $t('menu.archive') }}
    </h1>

    <h2 class="text-xl text-slate-900 font-bold my-4">2022-2023</h2>

    <div class="w-full overflow-auto">
      <DataTablePublic :column-model="columnModel" :row-model="state"></DataTablePublic>
    </div>
  </div>
</template>
