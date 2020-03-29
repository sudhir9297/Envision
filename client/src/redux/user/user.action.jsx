import { UserActionTypes } from "./user.types";
import axios from "axios";

export const setCurrentUserAction = () => async dispatch => {
  const user = await axios.get("/api/current_user");

  dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: user.data });
};

export const handelToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: res.data });
};
