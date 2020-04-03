import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const ProfileIcon = props => {
  return props.currentUser ? (
    <Container>
      <CreditsContainer>
        <Credits>Credits :</Credits>
        <Digits>{props.currentUser.credits.toFixed(2)}</Digits>
      </CreditsContainer>
      <ProfileContainer to="/profile">
        <ImageContainer>
          <img src={props.currentUser.ProfileImage} alt="profile pic" />
        </ImageContainer>
        <DetailContainer>
          <Username>{props.currentUser.UserName}</Username>
          <Email>sudhir9297@gmail.com</Email>
        </DetailContainer>
      </ProfileContainer>
    </Container>
  ) : (
    <Login href="/auth/google">
      <Credits>SignIN</Credits>
      <FaGoogle color="#4086F4" size="22px" />;
    </Login>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(ProfileIcon);

const Container = styled.div`
  width: 80%;
  height: fit-content;
`;
const ProfileContainer = styled(Link)`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid #4285f4;
    padding: 2px;
  }
`;

const DetailContainer = styled.div`
  margin: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  color: black;
`;
const Username = styled.div`
  font-size: 10px;
  font-weight: 600;
  width: 40px;
  text-overflow: ellipsis;
  color: #4285f4;
`;
const Email = styled.div`
  font-size: 10px;
  font-weight: 400;
  width: 100%;
  text-overflow: ellipsis;
  color: gray;
`;

const CreditsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
const Credits = styled.div`
  margin-right: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #4285f4;
`;

const Digits = styled.div`
  margin-right: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #212529;
`;

const Login = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
