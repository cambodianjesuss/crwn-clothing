import React from "react";
import { Link } from "react-router-dom";

// add connect component to provide 'user' state
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

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
// For clarity, I've added the prop name = this.props.user || this.props.cart
//
// Imported createStructuredSelect()
// It will run the selectors and pass the respected state needed as an object
// Same as mapStateToProps = (state) => ({ currentUser: selectCurrentUser(state)})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// Using connect middleware to map our state to props
export default connect(mapStateToProps)(Header);
