import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sigin',
    pathMatch: 'full'
  },
  {
    path: 'sigin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
