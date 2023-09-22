import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // 追加
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // 追加
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; // 追加

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AuthComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // 追加
    ReactiveFormsModule,
    // FormControl, // 追加
    // FormGroup, // 追加
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
