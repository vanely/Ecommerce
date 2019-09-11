import React from 'react';

import SignIn from "../../components/SignIn/SignIn.component";
import Register from "../../components/Register/Register.component";

import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn/>
      <Register/>
    </div>
  );
};

export default Authentication;
