import { SurveyActionTypes } from "./survey.types";

const INITIAL_STATE = {
 data: null,
 Surveys:[]
};

const SurveyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SurveyActionTypes.NEW_SURVEY_DATA:
      return {
        ...state,
        data:action.payload
      };
      case SurveyActionTypes.FETCH_SURVEYS:
      return {
        ...state,
        Surveys:action.payload
      };
    default:
      return state;
  }
};

export default SurveyReducer;