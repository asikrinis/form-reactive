import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { MaterialangularReactiveformComponent } from './materialangular-reactiveform/materialangular-reactiveform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'material-angular', component: MaterialangularReactiveformComponent },
  { path: 'nav-bar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
