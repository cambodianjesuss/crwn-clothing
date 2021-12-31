import React from 'react';
import { Switch, Route } from 'react-router-dom';
//https://reactrouter.com/docs/en/v6/upgrading/v5 Switch => Routes v4 - v5^
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
