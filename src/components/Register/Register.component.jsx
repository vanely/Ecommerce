import React from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import './Register.styles.scss';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmedPass: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({displayName: '', email: '', password: '', confirmedPass: ''});
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form>
          <FormInput
            name='displayName'
            type='text'
            value={this.state.displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            name='confirmPass'
            type='password'
            value={this.state.confirmedPass}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton
            type='submit'
            onSubmit={this.handleSubmit}
          >
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}
