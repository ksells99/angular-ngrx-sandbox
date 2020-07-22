import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../models/Tutorial';

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  // Payload = full tutorial data
  // Constructor only needed if there is data to pass to reducer
  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  // Payload = index of tutorial to remove
  constructor(public payload: number) {}
}

// Export all actions above
export type Actions = AddTutorial | RemoveTutorial;
