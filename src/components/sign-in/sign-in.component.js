import React from "react";

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  render(){
    return(
      <div className="sign-in">
        <h1>I already have an accound</h1>
        <span>Sign in with your email and password</span>
      </div>
    )
  }
}

export default SignIn;