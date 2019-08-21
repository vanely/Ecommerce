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

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <label>Email</label>
                    <input name="email" type="email" value={this.state.email} required/>
                    <label>Password</label>
                    <input name="password" type="password" value={this.state.password} required/>

                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}