import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/logoFiles/fav.png";
import styled from "styled-components";

class Logo extends React.Component {
  render() {
    return (
      <LogoContainer to="/">
        <LogoImage src={logo} />
        <Name>Survey.io</Name>
      </LogoContainer>
    );
  }
}

export default Logo;


const LogoContainer = styled(Link)`
  width: 100%;
  height: 70px;
  margin-top:15px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration: none;
`;

const LogoImage = styled.img`
    width:50px;
    height:auto;
`;

const Name = styled.h2`
  text-decoration:none;
  font-size:18px;
  color:#373736;
`;
