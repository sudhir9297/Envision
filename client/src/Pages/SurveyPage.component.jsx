import React from 'react'
import { connect } from "react-redux";
import {fetchSurveysAction}  from '../redux/survey/survey.action'

import SurveysList from '../components/surveysContainer.component'

class SurveyPage extends React.Component {
    componentDidMount(){
        this.props.suryeysList()
    }

    render() {
       const {Surveys} = this.props
        
        return (
            <div>
             {Surveys.map((item)=><SurveysList key={item._id} item={item}/>
             )}
            </div>
        )
    }
}
const mapStateToProps = ({ survey: { Surveys } }) => ({
    Surveys
});


const mapDispatchToProps = dispatch => ({
    suryeysList: () => dispatch(fetchSurveysAction())
  });
  
  
export default connect(mapStateToProps,mapDispatchToProps)(SurveyPage)
