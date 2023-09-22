import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component'; // 追加
import { AuthComponent } from './auth/auth.component'; // 追加
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent }, // 追加
  { path: 'auth', component: AuthComponent }, // 追加
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
