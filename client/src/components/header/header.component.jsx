import React from "react";
import { connect } from "react-redux";

//import { FaUserAlt } from "react-icons/fa";
import Payment from '../payment/payment.component'
import { Link } from "react-router-dom";
import "./header.styles.css";

class Header extends React.Component {
  renderContent() {
    switch (this.props.currentUser) {
      case null:
        return;
      case false:
        return <a href="/auth/google"> Login</a>;
      default:
        return <Payment/>
        //  <a href="/api/logout"> Logout</a>
        
        
    }
  }

  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          Envision
        </Link>
        <div className="left-options">
          <Link className="option" to="/survey">
            SURVEY
          </Link>
          <Link className="option" to="/SELECTION">
            selectionPAge
          </Link>
        </div>
        <div className="right-options">{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
