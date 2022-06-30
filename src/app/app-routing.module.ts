import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { CreatePostComponent } from './admin/post/create-post/create-post.component';
import { EditPostComponent } from './admin/post/edit-post/edit-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ViewPostComponent } from './all-posts/view-post/view-post.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireAuthGuard,redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['flamenco-posts']);
const routes: Routes = [
  { path: 'flamenco-post/:id', component: ViewPostComponent },
  { path: 'flamenco-posts', component: AllPostsComponent },
  // { path: 'flamenco-shop/:id', component: ViewItemComponent },
  // { path: 'flamenco-shop', component: ShopComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'account', component: AccountComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/create-post', component: CreatePostComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToHome } },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/edit-post/:id', component: EditPostComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToHome } },
  // { path: 'admin/create-item', component: CreateItemComponent },
  // { path: '', component: AllBlogsComponent },
  { path: '**', component: AllPostsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
