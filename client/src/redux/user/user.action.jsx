import { UserActionTypes } from "./user.types";
import axios from "axios";

export const setCurrentUserAction = () => async dispatch => {
  const user = await axios.get("/api/current_user");
  dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: user });
};
