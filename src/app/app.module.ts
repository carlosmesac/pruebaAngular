import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AuthComponent} from './auth/auth.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BooksComponent} from './books/books.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {firebaseConfig} from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {ShortenPipe} from './shared/pipes/shorten.pipe';
import {BookDialogComponent} from './books/books-dialog/book-dialog.component';
import {BooksCommentComponent} from './books/books-dialog/books-comment/books-comment.component';
import {AlertComponent} from './shared/alert/alert.component';
import {PlaceholderDirective} from './shared/placeholder/placeholder.directive';
import {BookSpinnerComponent} from './shared/book-spinner/book-spinner.component';
import {ProfileService} from './profile/profile.service';
import {ProfileEditComponent} from './profile/profile-edit/profile-edit.component';
import { ProfileDialogComponent } from './profile/profile-dialog/profile-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    BooksComponent,
    BookDialogComponent,
    ShortenPipe,
    BooksCommentComponent,
    AlertComponent,
    PlaceholderDirective,
    BookSpinnerComponent,
    ProfileEditComponent,
    ProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
