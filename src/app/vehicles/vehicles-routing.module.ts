import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { SellItemComponent } from './sell-item/sell-item.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: AllcategoryComponent },
  { path: 'sell-items', component: SellItemComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
