import { SurveyActionTypes } from "./survey.types";
import axios from "axios";

export const SurveyActionHandle = item=> ( {
    type: SurveyActionTypes.NEW_SURVEY_DATA,
    payload: item
})

export const SendSurveyActionHandle = (item,history) => async dispatch => {
  history.push('/surveys')
  await axios.post("/api/surveys", item);
  
};

export const fetchSurveysAction = () => async dispatch => {
 const res= await axios.get("/api/surveys");
  dispatch({type:SurveyActionTypes.FETCH_SURVEYS,payload:res.data})
};

