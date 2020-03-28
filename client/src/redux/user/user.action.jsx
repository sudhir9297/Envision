import { UserActionTypes } from "./user.types";
import axios from "axios";

export const setCurrentUserAction = () => async dispatch => {
  const user = await axios.get("/api/current_user");
  console.log("login dispatch");

  dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: user.data });
};

export const handelToken = token => async dispatch => {
  console.log("stripe dispatch");
  const res = await axios.post("/api/stripe", token);
  console.log(res);

  dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: res.data });
};
