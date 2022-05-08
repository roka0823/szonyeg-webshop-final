import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./pages/profile/profile.component";
import {MainComponent} from "./pages/main/main.component";
import {AboutComponent} from "./pages/about/about.component";
import {HelpComponent} from "./pages/help/help.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'login',
},
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {path: 'login', loadChildren: () => import('./pages/login/login.module').
  then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').
    then(m => m.SignupModule) },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
