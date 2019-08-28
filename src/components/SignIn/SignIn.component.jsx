import React from 'react';
import './SignIn.styles.scss';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required/>
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required/>

                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}