import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// Action form
const CHANGE_SEARCH = 'search/CHANGE_SEARCH';
const INITIALIZE_SEARCH = 'search/INITIALIZE_SEARCH';

export const initializeSearch = createAction(INITIALIZE_SEARCH, (form) => form); // stay, experience

export const changeSearch = createAction(
  CHANGE_SEARCH,
  ({ form, key, value }) => ({
    form, // stay, experience
    key, // location, checkIn, checkOut, guestNum
    value, // what want to change
  })
);

const initialState = {
  stay: {
    location: '',
    checkIn: '',
    checkOut: '',
    guestNum: '',
  },
  experience: {
    location: '',
    date: '',
  },
};

const search = handleActions(
  {
    [INITIALIZE_SEARCH]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_SEARCH]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
  },
  initialState
);

export default search;
