import { createAction, handleActions } from 'redux-actions';

// Action type
const SHOW = 'search/SHOW';

export const show = createAction(SHOW);

const initialState = {
  isSearching: false,
};

const search = handleActions(
  {
    [SHOW]: (state) => ({ isSearching: !state.isSearching }),
  },
  initialState
);

export default search;
