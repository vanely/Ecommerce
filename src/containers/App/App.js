import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from "../../components/Header/Header.component";
import HomePage from '../../Pages/HomePage/HomePage.component';
import Shop from '../../Pages/Shop/Shop.component';

import './App.scss';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop/hats' component={HatsPage}/>
          <Route exact path='/shop' component={Shop}/>
        </Switch>
      </div>
    );
  }
}
