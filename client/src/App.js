import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux'
import {setCurrentUserAction} from './redux/user/user.action'

import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/header.component'

const Landing = () => <h2>Landing</h2>;
const Selection = () => <h2>Selection</h2>;
const Survey = () => <h2>survey</h2>;

class App extends Component {
  componentDidMount(){
    this.props.currentUser()
  }

  render(){

    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/selection" component={Selection} />
          <Route exact path="/survey" component={Survey} />
        </BrowserRouter>
      </div>
    );
  }

}

const mapDispatchToProps=(dispatch)=>({
  currentUser:()=>dispatch(setCurrentUserAction())
});

export default connect(null,mapDispatchToProps)(App);
