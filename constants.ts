import { SortDirection } from '@lostui/utils';

export const VBR_CHAMPIONSHIP_ID_U16 = '4037';
export const VBR_CHAMPIONSHIP_ID_U18 = '4056';
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
      tooltip: 'Position',
    },
  },
  team: {
    title: 'Team',
    headerClass: 'text-left',
    headerData: {
      tooltip: 'Team',
    },
    cellClass: 'text-left font-bold',
  },
  tournaments: {
    title: 'Tournaments',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Total Tournament Appearances',
    },
    cellClass: 'text-center',
  },
  best: {
    title: 'Best 3 Results',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Best 3 Results',
    },
    cellClass: 'text-center',
  },
  gd: {
    title: 'Goal Different',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Goal Different',
    },
    cellClass: 'text-center',
    sortOrders: [{ target: 'gd', direction: SortDirection.DESCEND }],
  },
  points: {
    title: 'Turnament Points',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Points',
    },
    cellClass: 'text-center font-bold',
    sortOrders: [{ target: 'points', direction: SortDirection.DESCEND }],
  },
};

export const STANDINGS_COLUMNS = {
  pos: {
    title: 'Position',
    headerClass: 'text-left',
    headerData: {
      tooltip: 'Position',
    },
  },
  team: {
    title: 'Team',
    headerClass: 'text-left',
    headerData: {
      tooltip: 'Team',
    },
    cellClass: 'text-left font-bold',
  },
  gp: {
    title: 'GP',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Game Played',
    },
    cellClass: 'text-center',
  },
  w: {
    title: 'W',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Wins',
    },
    cellClass: 'text-center',
    sortOrders: { target: 'w', direction: SortDirection.DESCEND },
  },
  otw: {
    title: 'OTW',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Overtime Wins',
    },
    cellClass: 'text-center',
    sortOrders: { target: 'otw', direction: SortDirection.DESCEND },
  },
  otl: {
    title: 'OTL',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Overtime Losses',
    },
    cellClass: 'text-center',
    sortOrders: { target: 'otl', direction: SortDirection.DESCEND },
  },
  l: {
    title: 'l',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Losses',
    },
    cellClass: 'text-center',
    sortOrders: { target: 'l', direction: SortDirection.DESCEND },
  },
  gf: {
    title: 'GF',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Goals For',
    },
    cellClass: 'text-center',
    sortOrders: { target: 'gf' },
  },
  ga: {
    title: 'GA',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Goals Against',
    },
    cellClass: 'text-center',
    sortOrders: { target: 'ga', direction: SortDirection.ASCEND },
  },
  gd: {
    title: 'GD',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Goal Different',
    },
    cellClass: 'text-center',
    sortOrders: { target: 'gd', direction: SortDirection.DESCEND },
  },
  points: {
    title: 'Points',
    headerClass: 'text-center',
    headerData: {
      tooltip: 'Points',
    },
    cellClass: 'text-center font-bold',
    sortOrders: { target: 'points', direction: SortDirection.DESCEND },
  },
};
