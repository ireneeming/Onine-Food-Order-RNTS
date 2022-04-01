import axios from "axios";
import { LocationGeocodedAddress } from "expo-location";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import { FoodAvailablity } from "../models";

// availability Action
export interface AvailabilityAction {
  readonly type: "ON_AVAILABILITY";
  payload: FoodAvailablity;
}

export interface ShoppingErrorAction {
  readonly type: "ON_SHOPPING_ERROR";
  payload: any;
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction;

// Trigger actions from components

//User Actions trigger from Components
export const onAvailability = (location: LocationGeocodedAddress) => {
  return async (dispatch: Dispatch<ShoppingAction>) => {
    try {
      const response = await axios.get<FoodAvailablity>(
        `${BASE_URL}/food/availability/78787878`
      );

      //어떻게 이런 생각을 하지?
      if (!response) {
        dispatch({
          type: "ON_SHOPPING_ERROR",
          payload: "Availability error",
        });
      } else {
        dispatch({
          type: "ON_AVAILABILITY",
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: "ON_SHOPPING_ERROR",
        payload: error,
      });
    }
  };
};
