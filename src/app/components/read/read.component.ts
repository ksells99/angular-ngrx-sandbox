import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/Tutorial';
import * as TutorialActions from '../../actions/tutorial.actions';

// Import appstate in order to pick up data
import { AppState } from '../../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial>;

  // Inject store in order to pick up state
  constructor(private store: Store<AppState>) {
    // Set tutorials property to state in store
    this.tutorials = store.select('tutorial');
  }

  ngOnInit(): void {}

  deleteTutorial(index) {
    // Call RemoveTutorial action - pass in index of tutorial to delete
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}
