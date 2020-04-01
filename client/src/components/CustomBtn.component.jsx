import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

var IconToShow={}

const CustomBtn = ({Text,path}) => {

  switch (Text) {
    case "Create New Survey":
      IconToShow =  <IoIosAddCircle size="40px" color="#4086F4" />
      break;
    default:
      return;
  }

  return (
    <BtnContainer to={path}>
      <Name>{Text}</Name>
      {IconToShow}
    </BtnContainer>
  );
};

export default CustomBtn;

const BtnContainer = styled(Link)`
  height: 70px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 24px 0;
  background-color: #f5f6fa;
  border-radius: 8px;
  text-decoration: none;
`;

const Name = styled.div`
  width: 60%;
  height: auto;
  font-size: 14px;
  font-weight: 600;
  color: #373736;
`;
