import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../../components/HomePage/HomePage.component';

import './App.scss';

const HatsPage = (props) => {
    return(
        <div>
            <h1>Hats Page</h1>
            <button onClick={() => {props.history.push('/')}}>Home Page</button>
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
            <Route exact path='/hats' component={ HatsPage }/>
            {/*<HomePage/>*/}
        </div>
      );
    }
}
