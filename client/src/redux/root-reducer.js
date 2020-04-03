import {combineReducers} from 'redux'

import UserReducer from './user/user.reducer'
import SurveyReducer from './survey/survey.reducer'


const rootReducer=combineReducers({
    user:UserReducer,
    survey:SurveyReducer
})

export default rootReducer;