import { createAction, handleActions } from 'redux-actions';

// Action type
const INIT_SEARCH = 'search/INIT_SEARCH';
const CHANGE_TAB = 'search/CHANGE_TAB';

export const initSearch = createAction(
  INIT_SEARCH,
  (isSearching) => isSearching
);
export const changeTab = createAction(CHANGE_TAB, (selectedTab) => selectedTab);

const initialState = {
  isSearching: false,
  selectedTab: 'search-tab-STAYS',
};

const search = handleActions(
  {
    [INIT_SEARCH]: (state) => ({ ...state, isSearching: !state.isSearching }),
    [CHANGE_TAB]: (state, { payload: selectedTab }) => ({
      ...state,
      selectedTab: selectedTab,
    }),
  },
  initialState
);

export default search;
