import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewrecipeComponent } from './viewrecipe/viewrecipe.component';
import { CreaterecipeComponent } from './createrecipe/createrecipe.component';
import { SearchPipe } from './_pipe/search/search.pipe';
import { SortPipe } from './_pipe/sort/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ViewrecipeComponent,
    CreaterecipeComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
