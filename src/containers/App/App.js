import React from 'react';

import HomePage from '../../components/HomePage/HomePage.component';

import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div className="App">
            <HomePage/>
        </div>
      );
    }
}
