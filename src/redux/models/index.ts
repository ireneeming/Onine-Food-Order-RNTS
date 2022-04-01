import { LocationGeocodedAddress } from "expo-location";

// category
export interface Category {
  title: String;
  icon: String;
}

export interface FoodModel {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  image: [string];
}

export interface Restaurarnt {
  _id: string;
  name: string;
  foodType: string;
  address: string;
  phone: string;
  foods: [FoodModel];
}

export interface FoodAvailablity {
  categories: [Category];
  restaurants: [Restaurarnt];
  foods: [FoodModel];
}

//TODO: Modify later
export interface UserModel {
  firstName: string;
  lastName: String;
  contactNumber: String;
  token: string;
}

export interface UserState {
  user: UserModel;
  location: LocationGeocodedAddress;
  error: string | undefined;
}
