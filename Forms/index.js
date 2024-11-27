import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import FormLogin from './LoginSignup';
import DonationForm from './DonationForm';

ReactDOM.render(<Form/>,document.getElementById("root"));
ReactDOM.render(<DonationForm/>,document.getElementById("root"));
ReactDOM.render(<FormLogin/>,document.getElementById("root"));
