import { SurveyActionTypes } from "./survey.types";
import axios from "axios";

export const SurveyActionHandle = item=> ( {
    type: SurveyActionTypes.NEW_SURVEY_DATA,
    payload: item
})

export const SendSurveyActionHandle = (item,history) => async dispatch => {
  history.push('/surveys')
  const result = await axios.post("/api/surveys", item);
  
};
