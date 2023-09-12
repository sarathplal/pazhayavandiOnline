import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellItemComponent } from './sell-item/sell-item.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    VehiclesComponent,
    AllcategoryComponent,
    SellItemComponent,
    ProfileComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VehiclesModule { }
