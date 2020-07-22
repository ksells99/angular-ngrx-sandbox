import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/Tutorial';
import * as TutorialActions from '../../actions/tutorial.actions';

// Import appstate in order to pick up data
import { AppState } from '../../app.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  // Inject store to pick up state
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addTutorial(name, url) {
    // Call AddTutorial from actions - pass in name/url from form
    this.store.dispatch(new TutorialActions.AddTutorial({ name, url }));
  }
}
