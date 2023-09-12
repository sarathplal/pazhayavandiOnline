import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Route, Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.css']
})
export class SellItemComponent {

  selectedOption: string = ""

  tosellForm = this.formBuilder.group({
    category: ['', [Validators.required]],
    car_brands: [''],
    bike_brands: [''],
    scooter_brands: [''],
    commercial_brands: [''],
    model: ['', [Validators.required]],
    year: ['', [Validators.required]],
    km_driven: ['', [Validators.required]],
    price: ['', Validators.required],
    vehicle_image: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private toster: ToasterService) {

  }

  sellVehicle() {


    if (this.tosellForm.valid) {

      const category = this.tosellForm.value.category

      if (this.tosellForm.value.car_brands) {
        const brand = this.tosellForm.value.car_brands
        localStorage.setItem("brand", brand)
      } else if (this.tosellForm.value.bike_brands) {
        const brand = this.tosellForm.value.bike_brands
        localStorage.setItem("brand", brand)

      } else if (this.tosellForm.value.scooter_brands) {
        const brand = this.tosellForm.value.scooter_brands
        localStorage.setItem("brand", brand)

      } else if (this.tosellForm.value.commercial_brands) {
        const brand = this.tosellForm.value.commercial_brands
        localStorage.setItem("brand", brand)

      }
      const model = this.tosellForm.value.model
      const year = this.tosellForm.value.year
      const km_driven = this.tosellForm.value.km_driven
      const price = this.tosellForm.value.price
      const vehicle_image = this.tosellForm.value.vehicle_image

      // getsingle category brand 

      // get email id from localStorage
      const email = localStorage.getItem("email")
      const brand = localStorage.getItem("brand")
      this.api.sellVehicle(email, category, brand, model, year, km_driven, price, vehicle_image).subscribe({
        next: (res: any) => {
          alert("Vehicle Listed Successfully")
          this.toster.showSuccess("Vehicle Listed SuccessFully", "Success")
          setTimeout(() => {
            this.router.navigateByUrl("/vehicles")
          }, 2000);

          console.log(res);
        },
        error: (err: any) => {
this.toster.showWarning(`Error`,"Warning")
          console.log(err);

        }
      })
    } else {
      this.toster.showError("Invalid Form","Error")
    }

  }

}
