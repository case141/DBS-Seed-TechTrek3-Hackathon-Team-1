import React, { Component } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Group1',
      password: 'R3WlWHwLGXBqN0q',
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    const config = {
      headers: {
        'x-api-key': "dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu"
      }
    }
    try {
      const res = await axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', data , config);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('accountKey', res.data['accountKey']);
        this.props.history.replace(`/wallet-balance`);
      }
    } catch (err) {
      console.log('err: ' + err);
      toast.error(`${err}`);
    }
  };

  loginForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Username</label>
        <input
          onChange={this.handleChange('username')}
          value={this.state.username}
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={this.handleChange('password')}
          value={this.state.password}
          type="password"
          className="form-control"
        ></input>
      </div>
      <div>
        <button className="btn btn-primary" onClick={this.clickSubmit}>
          Login
        </button>
      </div>
    </form>
  );

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <h1 className="p-5 text-center">Login</h1>
        <ToastContainer />
        {this.loginForm()}
      </div>
    );
  }
}
