import { createAction, handleActions } from 'redux-actions';

// Action type
const CHANGE_TAB = 'search/CHANGE_TAB';

export const changeTab = createAction(CHANGE_TAB, (selectedTab) => selectedTab);

const initialState = {
  selectedTab: 'search-tab-STAYS',
};

const search = handleActions(
  {
    [CHANGE_TAB]: (state, { payload: selectedTab }) => ({
      ...state,
      selectedTab: selectedTab,
    }),
  },
  initialState
);

export default search;
