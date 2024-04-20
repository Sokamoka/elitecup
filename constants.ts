import { SortDirection } from '@lostui/utils';

export const VBR_CHAMPIONSHIP_ID_U16 = '3444';
export const VBR_CHAMPIONSHIP_ID_U18 = '3445';
export const VBR_CHAMPIONSHIP_IDS = [VBR_CHAMPIONSHIP_ID_U16, VBR_CHAMPIONSHIP_ID_U18];

export const SORT_STATE_ORIGINAL = 'original';
export const SORT_STATE_DESCEND = 'descend';
export const SORT_STATE_ASCEND = 'ascend';

export const VIDEO_PAGE_LIMIT_PER_PAGE = 24;
export const NEWS_PAGE_LIMIT_PER_PAGE = 12;

export const RESULT_TABLE_COLUMNS = {
  pos: {
    title: 'Position',
    headerClass: 'text-left',
    headerData: {
      tooltip: 'User Type',
    },
    // sortOrders: [],
  },
  team: {
    title: 'Team',
    headerClass: 'text-left',
    headerData: {
      tooltip: 'Team',
    },
    cellClass: 'text-left font-bold',
    // sortOrders: [{ target: 'name', direction: SortDirection.ASCEND }],
  },

  tournaments: {
    title: 'Tournaments',
    headerClass: 'text-right',
    headerData: {
      tooltip: 'Tournaments',
    },
    cellClass: 'text-right',
    // sortOrders: [{ target: 'amount', direction: SortDirection.DESCEND }],
  },
  gd: {
    title: 'Goal Different',
    headerClass: 'text-right text-orange-500',
    headerData: {
      tooltip: 'Goal Different',
    },
    cellClass: 'text-right',
    sortOrders: [{ target: 'gd', direction: SortDirection.DESCEND }],
  },
  points: {
    title: 'Points',
    headerClass: '',
    headerData: {
      tooltip: 'Points',
    },
    cellClass: 'text-center font-bold',
    sortOrders: [{ target: 'points', direction: SortDirection.DESCEND }],
  },
};
