import { Action } from '@ngrx/store';
import { Tutorial } from '../models/Tutorial';
import * as TutorialActions from '../actions/tutorial.actions';

// Initial state - optional
const initialState: Tutorial = {
  name: 'Initial tutorial',
  url: 'https://www.google.com',
};

// State = array of tutorials
// If no initial state - just have "state: Tutorial[]"
export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      // Return existing tutorials state plus new one added
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      const index = action.payload;
      // Return current state, splice and remove the tutorial
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
}
