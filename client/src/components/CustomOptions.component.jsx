import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosList, IoMdSettings } from "react-icons/io";
import { MdDashboard, MdEmail } from "react-icons/md";
var IconToShow = {};

const CustomLinks = ({ name, path }) => {
  switch (name) {
    case "DashBoard":
      IconToShow = <MdDashboard color="#4285f4" size="22px" />;
      break;
    case "Survey List":
      IconToShow = <IoIosList color="#4285f4" size="22px"/>;
      break;
    case "Contact Us":
      IconToShow = <MdEmail color="#4285f4" size="22px" />;
      break;
    case "Setting":
      IconToShow = <IoMdSettings color="#4285f4" size="22px"/>;
      break;
    default:
      return;
  }

  return (
    <LinkContainer to={path}>
      {IconToShow}
      <Name>{name}</Name>
    </LinkContainer>
  );
};

export default CustomLinks;

const LinkContainer = styled(Link)`
  height: 30px;
  width: 80%;
  margin:10px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
`;

const Name = styled.div`
  width: 60%;
  height: auto;
  font-size: 14px;
  font-weight: 600;
  color: #373736;
`;
