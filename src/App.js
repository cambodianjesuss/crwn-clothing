import React from 'react';
import { Switch, Route } from 'react-router-dom';
//https://reactrouter.com/docs/en/v6/upgrading/v5 Switch => Routes v4 - v5^
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
