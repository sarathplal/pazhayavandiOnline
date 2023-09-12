import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  listedItems: any = []
  wishListItems: any = []
  sellerDetails: any = []
  constructor(private api: ApiService,private toster:ToasterService) {

  }
  ngOnInit(): void {
    const email = localStorage.getItem("email")

    this.api.profileFinder(email).subscribe({
      next: (response: any) => {
        this.listedItems = response.toSellItems
        this.wishListItems = response.wishList
        console.log(this.listedItems);
        console.log(this.wishListItems);
      },
      error: (err) => {
        console.log(err);

      }
    })

  }

  // SellList item Removal
  // WishList Item removal
  removeFromListedItems(id: any) {
    const email = localStorage.getItem("email")
    this.api.removeFromListedItems(id, email).subscribe({
      next: (response: any) => {
        console.log(response)
        this.listedItems = response[0].toSellItems
        this.toster.showWarning("Vehicle removed From DATABASE","Warning")

      },
      error: (error: any) => {
        console.log(error);

      }
    })
  }

  // WishList Item removal
  removeFromWishList(id: any) {
    const email = localStorage.getItem("email")
    this.api.removeFromWishList(id, email).subscribe({
      next: (response: any) => {
        this.wishListItems = response[0].wishList
        this.toster.showWarning("Vehicle Removed From WishList","Warning")
        console.log(this.wishListItems);
        console.log("Am i working");

      },
      error: (error: any) => {
        console.log(error);

      }
    })
  }

  // Seller Contact Details
  findSellerDetails(id: any) {
    console.log(id);
    
    this.api.sellerFinder(id).subscribe({
      next: (response: any) => {
        this.sellerDetails=response
        console.log(this.sellerDetails);
        

      },
      error: (error: any) => {
        console.log(error);

      }
    })
  }

}
