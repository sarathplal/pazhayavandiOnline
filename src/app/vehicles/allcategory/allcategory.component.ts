import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent implements OnInit {

  selectedOption: string = ""

  tosellForm = this.formBuilder.group({
    category: ['', [Validators.required]],
    car_brands: ['', [Validators.required]],
    bike_brands: ['', [Validators.required]],
    scooter_brands: ['', [Validators.required]],
    commercial_brands: ['', [Validators.required]],
    model: ['', [Validators.required]],
    year: ['', [Validators.required]],
    km_driven: ['', [Validators.required]],
    price: ['', Validators.required],
    vehicle_image: ['', Validators.required]

  })
  allVehicles: any = []
  searchedVehicle=""
  isLoading:boolean=true

  constructor(private formBuilder: FormBuilder, private api: ApiService,private toster:ToasterService) {

  }

  ngOnInit(): void {

    this.getAllvehicles()

  }
  getAllvehicles() {
    this.api.getAllvehicles().subscribe({
      next: (respose) => {

        setTimeout(()=>{
          this.allVehicles = respose
          !this.isLoading
        },2000)
       
        console.log(this.allVehicles);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  wishListvehicle(id: any) {
    const email = localStorage.getItem("email")
    console.log(id, email);
    // make call to apiservice
    this.api.wishListVehicle(id, email).subscribe({
      next: (response) => {
this.toster.showSuccess("Vehicle added to wishList ","Success")
        console.log(response);

      },
      error: (err) => {
        this.toster.showWarning("Error","Warning")
        console.log(err);

      }
    })
  }
}

