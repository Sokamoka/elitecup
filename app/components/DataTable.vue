<script setup lang="ts">
import { SORT_STATE_ASCEND, SORT_STATE_DESCEND, SORT_STATE_ORIGINAL } from '~/constants';
import type { DataTableColumn } from '~/types/DataTable';

interface Props {
  columns: Record<string, DataTableColumn>;
  rows: any[];
  sort?: { sortTarget: string; orders: [any] };
  isLoading?: boolean;
}

const props = defineProps<Props>();

// const props = defineProps({
//   columns: {
//     type: Object,
//     default: () => ({}),
//   },

//   rows: {
//     type: Array,
//     default: () => [],
//   },

//   sort: {
//     type: Object,
//     default: () => ({}),
//   },

//   isLoading: {
//     type: Boolean,
//     default: false,
//   },

//   appendTo: {
//     type: [Object, String],
//     default: null,
//   },
// });

const { isLoading } = toRefs(props);

const emit = defineEmits(['sort']);

const columns = computed(() => props.columns);
const columnCount = computed(() => Object.keys(props.columns).length);

const sortBy = (column: DataTableColumn, prop: string) => {
  if (!column.sortOrders) return;
  emit('sort', { target: prop, orders: column.sortOrders });
};
</script>

<template>
  <table class="table xl:table-fixed">
    <thead>
      <tr>
        <template v-for="(column, prop) in columns" :key="prop">
          <th
            :class="[
              [column.class],
              {
                'is-active': prop === sort?.sortTarget && sort.orders[0].direction !== SORT_STATE_ORIGINAL,
                'is-sortable': column.sortOrders,
                'is-desc': prop === sort?.sortTarget && sort.orders[0].direction === SORT_STATE_DESCEND,
                'is-asc': prop === sort?.sortTarget && sort.orders[0].direction === SORT_STATE_ASCEND,
              },
            ]"
            @click="sortBy(column, prop)"
            @keydown.space.prevent="sortBy(column, prop)"
            @keydown.enter.prevent="sortBy(column, prop)"
            :tabindex="column.sortOrders ? 0 : -1"
            role="button"
          >
            <slot :name="`header-${prop}`" :column="column">
              {{ $t(column.label) }}
            </slot>
            <Icon name="tabler:arrows-sort" v-if="column.sortOrders && prop !== sort?.sortTarget" class="is-icon-sort" />
            <Icon
              v-if="prop === sort?.sortTarget && sort.orders[0].direction === SORT_STATE_ORIGINAL"
              name="tabler:arrows-sort"
              class="is-icon-sort"
            />
            <Icon
              v-if="prop === sort?.sortTarget && sort?.orders[0].direction === SORT_STATE_DESCEND"
              name="tabler:sort-ascending"
              class="is-icon-sort"
            />
            <Icon
              v-if="prop === sort?.sortTarget && sort.orders[0].direction === SORT_STATE_ASCEND"
              name="tabler:sort-descending"
              class="is-icon-sort"
            />
          </th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in props.rows" :key="index">
        <td
          v-for="(_, prop) in columns"
          :key="prop"
          :class="[
            [_.class],
            {
              'is-active': prop === sort?.sortTarget && sort.orders[0].direction !== SORT_STATE_ORIGINAL,
            },
          ]"
        >
          <slot :name="`cell-${prop}`" :row="row" :prop="prop">
            {{ row[prop] }}
          </slot>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="isLoading && rows.length === 0">
      <tr>
        <td :colspan="columnCount">
          <slot name="loading">
            {{ $t('common.loading') }}
          </slot>
        </td>
      </tr>
    </tfoot>
    <tfoot v-if="rows.length === 0 && !isLoading">
      <tr>
        <td :colspan="columnCount">
          <slot name="empty">
            {{ $t('common.noData') }}
          </slot>
        </td>
      </tr>
    </tfoot>
  </table>
</template>
