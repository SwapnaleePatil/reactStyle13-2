import React from 'react';
import './login.css'
import './../App.css'

import {Route} from 'react-router-dom';
import App from './../App';
const axios = require('axios');

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.sendData = this.sendData.bind(this);
        this.googleLogin=this.googleLogin.bind(this);
    }

    googleLogin(){
            alert('gmail login');
            axios.get('/auth/google').then((res) => {
               // console.log(res.data);
                this.props.history.push('/disp');
            }).catch((e) => {
                console.log(`Error : ${e.message}`);
            });
    }
    sendData() {
        localStorage.setItem('type','simple');
        console.log("state", this.state)
        axios.post(
            'http://localhost:5000/logP',
            {
                username: this.state.email,
                password: this.state.password
            })
            .then((res) => {
                console.log("Response", res.data)
                this.props.history.push('/disp')

            })
            .catch((e) => {
                console.log("Error" + e);
                this.props.history.push('/login')
            });

    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div id="polina" className="col-sm-3">
                        <h4 className="text-center">Register as a New Seller</h4>
                        <div className="social text-center">
                            <div className="row">
                                <div className="col-sm-6">
                                    <a href="/auth/google" className="btn btn-block btn-social btn-facebook">
                                        <span className="fa fa-facebook"></span> Facebook
                                    </a>
                                </div>
                                <div className="col-sm-6">

                                    <a href="http://localhost:5000/auth/google" className="btn btn-block btn-social btn-google" >
                                        <span className="fa fa-google"></span> Google
                                        {
                                            localStorage.setItem('type','gmail')
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="text-center">
                            <h5>OR</h5>
                        </div>
                        <br/>
                        <form className="form-horizontal">

                            <div className="form-group has-success has-feedback">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="email" name="email"
                                           placeholder="Email" required/>
                                    <a href="#" className="glyphicon glyphicon-envelope form-control-feedback"/>
                                </div>
                            </div>

                            <div className="form-group has-success has-feedback">
                                <div className="col-sm-12">
                                    <input type="password" className="form-control" id="password" name="password"
                                           placeholder="Password" required/>
                                    <a href="#" className="glyphicon glyphicon-lock form-control-feedback"/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn sellBtn btn-success" onClick={() => {
                                    this.setState({
                                            email: document.getElementById('email').value,
                                            password: document.getElementById('password').value,
                                        },
                                        () => {
                                            console.log('Method Call Back');
                                            this.sendData();
                                        });
                                    }
                                }
                                >Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;