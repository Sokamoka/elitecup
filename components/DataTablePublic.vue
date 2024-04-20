<script setup lang="ts">
import type { ConvertedColumnModel } from '@lostui/utils';
// import { LucideChevronDown, LucideChevronUp, LucideChevronsUpDown } from 'lucide-vue-next'

export interface Props {
  columnModel: ConvertedColumnModel[];
  rowModel: any[];
}

const props = withDefaults(defineProps<Props>(), {
  columnModel: () => [],
  rowModel: () => [],
});
</script>

<template>
  <table class="mb-10">
    <thead>
      <tr>
        <th
          v-for="column in props.columnModel"
          :key="column.key"
          class="align-middle text-gray-300 bg-gray-900 text-xs font-bold cursor-pointer first:rounded-l-lg last:rounded-r-lg"
          :class="[column.header.headerClass, { 'bg-gray-700 text-white': column.header.isActive }]"
          :title="column.header.headerData.tooltip"
          v-on="column.header.event"
        >
          <slot :name="`header-${column.prop}`" :column="column">
            {{ column.title }}
          </slot>
          <!-- <span v-if="column.header.isSortAsc">
            <LucideChevronUp class="w-4 inline-block ml-1" />
          </span>
          <span v-if="column.header.isSortDesc">
            <LucideChevronDown class="w-4 inline-block ml-1" />
          </span>
          <span v-if="column.header.isSortOrigi">
            <LucideChevronsUpDown class="w-4 inline-block ml-1" />
          </span>
          <span v-if="column.header.isSortable && !column.header.isActive">
            <LucideChevronsUpDown class="w-4 inline-block ml-1" />
          </span> -->
          <span class="inline-block ml-1 w-3">
            <Icon v-if="column.header.isSortOrigi" name="tabler:arrows-sort" />
            <Icon v-if="column.header.isSortable && !column.header.isActive" name="tabler:arrows-sort" />
            <Icon v-if="column.header.isSortDesc" name="tabler:sort-descending" />
            <Icon v-if="column.header.isSortAsc" name="tabler:sort-ascending" />
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in props.rowModel" :key="row.id" class="odd:bg-gray-50">
        <td
          v-for="column in props.columnModel"
          :key="column.key"
          :class="[column.cell.cellClass, { 'bg-gray-100': column.cell.isActive }]"
        >
          <slot :name="`cell-${column.prop}`" :column="column" :row="row">
            {{ row[column.prop] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
