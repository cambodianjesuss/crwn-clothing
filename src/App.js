import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//https://reactrouter.com/docs/en/v6/upgrading/v5 Switch => Routes v4 - v5^
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Since we are providing the action here, we are 'setting' the state to dispatch
// This action will return return the payload with an action to match update reducer
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  // Sign out in case memory leaks et
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // Set the state of currentUser to the callback result of auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("User Auth: ", userAuth);
      if (userAuth) {
        //createUserProfile will create/set(fields) snapshot or find a snapshot, which we set our state
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth); // null (signed out)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

// Grab user from state = this.props.user.currentUser
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

// Passing setCurrentUser Action to dispatch
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
