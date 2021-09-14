import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import {Switch ,Route} from 'react-router-dom';

const Hats = () => (
  <div>
    <h1>Hats Available</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
