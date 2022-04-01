import axios from "axios";
import { LocationGeocodedAddress } from "expo-location";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";

export interface UpdateLocationActions {
  readonly type: "ON_UPDATE_LOCATION";
  payload: LocationGeocodedAddress;
}
export interface UserErrorAction {
  readonly type: "ON_USER_ERROR";
  payload: any;
}

export type UserAction = UpdateLocationActions | UserErrorAction;

//User Actions trigger from Components
export const onUpdateLocation = (location: LocationGeocodedAddress) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_LOCATION",
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
