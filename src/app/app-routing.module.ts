import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllitemsComponent } from './allitems/allitems.component';

const routes: Routes = [
  {
    path: "", component: LandingPageComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'allItems', component: AllitemsComponent
  },
  { path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
