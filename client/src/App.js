import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUserAction } from "./redux/user/user.action";

import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header.component";

import HomePage from './Pages/HomePage.component'
import SurveyPage from './Pages/SurveyPage.component'
import NewSurvey from './Pages/newSurveyPage.component'
import ContactPage from './Pages/ContactPage.component'
import SettingPage from './Pages/SettingPage.component'
import ProfilePage from './Pages/ProfilePage.component'

class App extends Component {
  componentDidMount() {
    this.props.currentUser();
  }

  render() {
    return (
      <PagesContainer>
        <BrowserRouter>
          <Header />
          <>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/surveys" component={SurveyPage} />
            <Route exact path="/survey/new" component={NewSurvey} />
            <Route exact path="/contactus" component={ContactPage} />
            <Route exact path="/settings" component={SettingPage} />
            <Route exact path="/profile" component={ProfilePage} />
          </>
        </BrowserRouter>
      </PagesContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  currentUser: () => dispatch(setCurrentUserAction())
});

export default connect(null, mapDispatchToProps)(App);

const PagesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
