import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Logo from "./Logo.component";
import CustomBtn from "./CustomBtnWithImage.component";
import CustomLink from "./CustomOptions.component";
import ProfileIcon from "./profile.component";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      LinkList: [
        {
          id: 1,
          name: "DashBoard",
          path: "/"
        },
        {
          id: 2,
          name: "Survey List",
          path: "/surveys"
        },
        { id: 3, name: "Contact Us", path: "/contactUs" },
        { id: 4, name: "Setting", path: "/settings" }
      ]
    };
  }

  render() {
    return (
      <HeaderContainer>
        <TopOptions>
          <Logo />
          <CustomBtn Text="Create New Survey" path="/Survey/new" />

          {this.state.LinkList.map(i => (
            <CustomLink key={i.id} name={i.name} path={i.path} />
          ))}
        </TopOptions>
        <ProfileIcon />
      </HeaderContainer>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);

const HeaderContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: center;
`;

const TopOptions = styled.div`
  width: 100%;
  height: 80%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
