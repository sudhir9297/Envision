import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { SendSurveyActionHandle } from "../redux/survey/survey.action";

import CustomBtn from "../components/CustomBtn.component";

const SurveyReview = ({history,data,onCancel,surveyHandle}) => {
  return (
    <FormReviewContainer>
      <h2>Please Review your Survey</h2>
      <Content>
        <Name>Title :</Name>
        <Value>{data.title}</Value>
      </Content>
      <Content>
        <Name>Subject :</Name>
        <Value>{data.subject}</Value>
      </Content>
      <Content>
        <Name>Body :</Name>
        <Value>{data.body}</Value>
      </Content>
      <Content>
        <Name>Emails :</Name>
        <Value>{data.recipients}</Value>
      </Content>
      <ButtonContainer>
        <CustomBtn color="#4285f4" onClick={onCancel}>back</CustomBtn>
        <CustomBtn color="#01C851"
          onClick={() => surveyHandle(data,history)}
        >
          SendSurvey
        </CustomBtn>
      </ButtonContainer>
    </FormReviewContainer>
  );
};

const mapStateToProps = ({ survey: { data } }) => ({
  data
});

const mapDispatchToProps = dispatch => ({
  surveyHandle: (item, item2) => dispatch(SendSurveyActionHandle(item, item2))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SurveyReview));

const FormReviewContainer = styled.div`
  width: 50%;
  margin: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
`;

const Name = styled.div`
  font-size: 18px;
  color: grey;
`;
const Value = styled.div`
margin-left:5px;
  font-size: 18px;
  color: blue;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
