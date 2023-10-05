import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { GameContextComponent } from './game-context/game-context.component';
import { PlayFieldComponent } from './play-field/play-field.component';
import { YouWonDialogComponent } from './you-won-dialog/you-won-dialog.component';
import { YouLostDialogComponent } from './you-lost-dialog/you-lost-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    GameContextComponent,
    PlayFieldComponent,
    YouWonDialogComponent,
    YouLostDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
