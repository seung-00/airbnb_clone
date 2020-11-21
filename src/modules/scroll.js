import { createAction, handleActions } from 'redux-actions';

// Action form
const SCROLL_ON = 'scroll/SCROLL_ON';
const SCROLL_OFF = 'scroll/SCROLL_OFF';

export const scrollOn = createAction(SCROLL_ON, (isScrolled) => isScrolled);

// page 벗어날 때 원상 복귀
export const scrollOff = createAction(SCROLL_OFF, (isScrolled) => isScrolled);

const initialState = { isScrolled: true };

const scroll = handleActions(
  {
    [SCROLL_ON]: (state, action) => ({
      ...state,
      isScrolled: true,
    }),
    [SCROLL_OFF]: (state, action) => ({
      ...state,
      isScrolled: false,
    }),
  },
  initialState
);

export default scroll;
