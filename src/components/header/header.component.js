import React from "react";
import { Link } from "react-router-dom";

// add connect component to provide 'user' state
import { connect } from "react-redux";

// Import firebase auth from util file
import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// Import non react exported file
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

// currentUser passed in as props from 'mapStateToProps'
// all we are doing here is getting the state, not triggering an actions
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONCTACT
      </Link>
      {
        // Sign In/Sign Out if currentUser has null signed in

        currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )
      }
      {console.log(currentUser)}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// Mapping state props to use it's current data with no actions

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  hidden: hidden,
});

// Using connect middleware to map our state to props
export default connect(mapStateToProps)(Header);
