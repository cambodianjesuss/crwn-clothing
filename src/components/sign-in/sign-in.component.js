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

  handleSubmit = (e) => {
    e.prventDefault();

    this.setState({ email: '', password: ''}) // Clears fields
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    
    // Dyanmically set the name of input with value;
    this.setState({ [name]: value})
  }

  render(){
    return(
      <div className="sign-in">
        <h1>I already have an accound</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input 
            name="email" 
            type="email"
            value={this.state.email} 
            onChange={this.handleChange}
            required />
          <label>Email</label>
          <input 
            name="password" 
            type="password" 
            value={this.state.password} 
            onChange={this.handleChange}
            required />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

export default SignIn;