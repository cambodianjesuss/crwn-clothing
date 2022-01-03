import React from 'react';
import { Switch, Route } from 'react-router-dom';
//https://reactrouter.com/docs/en/v6/upgrading/v5 Switch => Routes v4 - v5^
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  // Sign out in case memory leaks et
  unsubscribeFromAuth = null;  

  componentDidMount(){
    // Set the state of currentUser to the callback result of auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      
      createUserProfileDocument(user)

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App;
