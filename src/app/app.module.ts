import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [AppComponent, ReadComponent, CreateComponent],
  imports: [
    BrowserModule,
    FormsModule,
    // Add tutorial reducer to store module
    StoreModule.forRoot({
      tutorial: reducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
