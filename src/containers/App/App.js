import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../Pages/HomePage/HomePage.component';
import Shop from '../../Pages/Shop/Shop.component';

import './App.scss';

const HatsPage = (props) => {
    return(
        <div>
            <h1>Hats Page</h1>
            <button onClick={() => {props.history.push('/')}}>Home Page</button>
            <button onClick={() => {props.history.push('/shop')}}>Shop</button>
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
            <Route exact path='/' component={ HomePage }/>
            <Route exact path='/shop/hats' component={ HatsPage }/>
            <Switch>
                <Route exact path='/shop' component={ Shop }/>
            </Switch>
        </div>
      );
    }
}
