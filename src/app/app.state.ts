import { Tutorial } from './models/Tutorial';

export interface AppState {
  readonly tutorial: Tutorial;
  // Can add more if multiple models
}
