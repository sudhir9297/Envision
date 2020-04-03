import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { SurveyActionHandle } from "../redux/survey/survey.action";

import FormInput from "../components/FormInput.component";
import CustomBtn from "../components/CustomBtn.component";
import SurveyReviewPage from "./surveyReviewPage.component";

class NewSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subject: "",
      body: "",
      recipients: "",
      redirect: false,
      surveyReview: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  Field = [
    { id: 0, name: "title", label: "Title" },
    { id: 1, name: "subject", label: "Subject" },
    { id: 2, name: "body", label: "Survey Body" },
    { id: 3, name: "recipients", label: "Recipients" }
  ];

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ surveyReview: true });
    const { title, subject, body, recipients } = this.state;
    this.props.surveyHandle({ title, subject, body, recipients });
  };

  goBack=()=>{
      this.setState({surveyReview:false})
  }


  render() {
    if (this.state.surveyReview) {
      return <SurveyReviewPage onCancel={this.goBack} />;
    }
    return (
      <SignInContainer>
        {this.renderRedirect()}
        <h2>Create A new Survey</h2>
        <form onSubmit={this.handleSubmit}>
          {this.Field.map(item => (
            <FormInput
              key={item.id}
              name={item.name}
              type="text"
              value={this.state[item.name]}
              handleChange={this.handleChange}
              label={item.label}
              required
            />
          ))}
          <ButtonContainer className="buttons">
            <CustomBtn  color ="#4285f4" type="cancel" onClick={this.setRedirect}>
              Cancel
            </CustomBtn>
            <CustomBtn  color ="#01C851"  type="submit">Submit</CustomBtn>
          </ButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  surveyHandle: item => dispatch(SurveyActionHandle(item))
});

export default connect(null, mapDispatchToProps)(NewSurvey);

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
