import React from "react";
import { connect } from "react-redux";
import logo from "../assets/logoFiles/logo.png";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import Payment from "./payment.component";
import { Link } from "react-router-dom";

class Header extends React.Component {
  renderContent() {
    switch (this.props.currentUser) {
      case null:
        return;
      case false:
        return <a href="/auth/google"> Login</a>;
      default:
        return (
          <div>
            <Payment />
            <a href="/api/logout"> Logout</a>
            <div>{this.props.currentUser.credits}</div>
          </div>
        );
    }
  }

  render() {

    return (
      <HeaderContainer>
        <LeftOptions>
            <LogoContainer className="logo-container" to="/">
              <Logo src={logo} />
            </LogoContainer>
            <LeftOptions>
              <LinkOptions to="/survey">Shop Page</LinkOptions>
              <LinkOptions to="/selection">Our Blog</LinkOptions>
              <LinkOptions to="/selection">Contact Us</LinkOptions>
            </LeftOptions>
        </LeftOptions>
        
        <ProfileIcon>{this.props.currentUser?<img src={this.props.currentUser.ProfileImage}/>:<FaUserCircle color="#F06337"/>}</ProfileIcon>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content:space-between;
  background-color: white;
  align-items: center;
`;

const LeftOptions = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkOptions = styled(Link)`
  padding: 10px 20px;
  font-weight: 600;
  font-size:14px;
  color:black;
  text-decoration: none;
  cursor: pointer;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 130px;
  padding: 3px;
  margin: 0 20px;
  text-align: center;
  text-decoration: none;
`;

const ProfileIcon = styled.div`
  width: 45px;
  height: 45px;
  margin-right:10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    border-radius:50%;
    border:1px solid green;
  }
`;

const Logo = styled.img`
  width: 80%;
  height: 100%;
`;
