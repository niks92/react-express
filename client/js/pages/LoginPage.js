import React from 'react';
import DocumentTitle from 'react-document-title';
import UserService from '../services/UserService';
import { browserHistory, Link } from 'react-router';
import Alert from 'react-s-alert';
import validator from 'validator';

export default class LoginPage extends React.Component {

  constructor() {
    super();
    this.state = {
        errorMessage: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(){
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let self = this;
    let postData = {
      email: email,
      password: password
    };

    if(!email || email == "" || !validator.isEmail(email)){
        this.setState({
          errorMessage : "Enter a valid Email"  
        })
        return;

    }
    else  if(!password || password.length < 8){
        this.setState({
            errorMessage : "Enter a valid Password(8 characters minimum)"  
          })
        return;
    }

    UserService.loginUser(postData).then(function (response) {
        localStorage.setItem("token", response.token)
        browserHistory.push("/dashboard");
    }).catch(function (err) {
        self.setState({
            errorMessage: err.response ? JSON.parse(err.response).message : "Please check the credentials"
        })
        return;
    });
  }

  render() {
    return (
        <div className="container main-wrapper">
            <div className="row main">
                <div className="col-xs-12 text-center">
                    <h3>Login</h3>
                    <hr />
                </div>
                <div className="col-md-6 col-md-offset-3">
                    <form className="auth-form-inner">

                        <div className="form-group">
                            <label className="control-label hidden" for="email">Email:</label>
                            <input type="email" ref="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label className="control-label hidden" for="pwd">Password:</label>
                            <input type="password" ref="password" className="form-control" id="pwd" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="text-center footer-block">
                                <button id="loginUser" type="button" onClick={this.onFormSubmit} className="btn btn btn-primary">Login</button>
                            </div>
                        </div>
                        <div className="form-group text-center">
                          <a href="/register"><i className="fa fa-angle-double-left" aria-hidden="true"></i> New User?</a>
                      </div>
                      { this.state.errorMessage == "" ? null :
                        <div>
                            <p className="text-center bg-danger">{this.state.errorMessage}</p>
                        </div> 
                      }
                      
                    </form>
                </div>
            </div>
        </div>
    );
  }
}
