import { SurveyActionTypes } from "./survey.types";

const INITIAL_STATE = {
 data: null
};

const SurveyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SurveyActionTypes.NEW_SURVEY_DATA:
      return {
        ...state,
        data:action.payload
      };
    default:
      return state;
  }
};

export default SurveyReducer;