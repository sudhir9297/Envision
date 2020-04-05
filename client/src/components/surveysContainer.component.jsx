import React from "react";
import styled from "styled-components";

const SurveysList = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Title>{item.title}</Title>
      <p>Subject : {item.subject}</p>
      <div>Question :{item.body}</div>
      <Options>
        <OptionButton>
          Yes :{item.yes}
        </OptionButton>
        <OptionButton>
          No :{item.no}
        </OptionButton>
      </Options>
      <div>Date Sent :{item.dateSent}</div>
    </Container>
  );
};

export default SurveysList;

const Container=styled.div`
  border:1px solid grey;
  border-radius:12px;
  margin:10px;
  padding:10px

`
const Title=styled.div`
  font-size:22px;
  text-transform:uppercase;
  font-weight:400;
  margin:10px;
`
const Options=styled.div`
  display:flex;
  margin:10px;
`
const OptionButton=styled.div`
  margin-left:8px;
`


