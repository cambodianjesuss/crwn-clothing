import React from 'react';
import { Link } from 'react-router-dom';

// Import firebase auth from util file
import { auth } from '../../firebase/firebase.utils';

// Import non react exported file 
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss'

const Header = ( {currentUser} ) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONCTACT</Link>
      {
        // Sign In/Sign Out if currentUser has null signed in

        
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
          <Link className='option' to='/signin'>SIGN IN</Link>
      }
      {
        console.log(currentUser)
      }
    </div>
  </div>
)

export default Header;