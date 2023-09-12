import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) {

  }

  // Get All vehicle details
  getAllvehicles() {
    return this.http.get(`${this.baseUrl}/vehicles`)
  }

  // Post vehicle to sell
  sellVehicle(email: any, category: any, brand: any, model: any, year: any, km_driven: any, price: any, vehicle_image: any) {

    const body = {
      category,
      brand,
      model,
      image: vehicle_image,
      year,
      price,
      km_driven,
    }
    return this.http.post(`${this.baseUrl}/vehicles/sell-item/${email}`, body)
  }
  // Remove Item from Listed items
  removeFromListedItems(id: any, email: any) {
    return this.http.delete(`${this.baseUrl}/vehicles/profile/sell-item/${email}/${id}`)
  }

  // WishList Vehicles
  wishListVehicle(id: any, email: any) {

    const body = {
      id
    }
    return this.http.post(`${this.baseUrl}/vehicles/wishList/${email}`, body)

  }
  // Remove from WishList
  removeFromWishList(id: any, email: any) {

    return this.http.delete(`${this.baseUrl}/vehicles/wishList/${email}/${id}`)
  }

  // Get User Profile
  profileFinder(email: any) {
    return this.http.get(`${this.baseUrl}/vehicles/profile/${email}`)
  }

  //Get Seller details
  sellerFinder(id: any) {
    return this.http.get(`${this.baseUrl}/vehicles/sellerprofile/${id}`)
  }

}

