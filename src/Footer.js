import React, { Component } from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import './App.css';
import Login from './comp/login';

class Footer extends React.Component
{
    constructor(){
        super()
        this.logout=this.logout.bind(this);
    }
    logout(){
      //  var email=localStorage.getItem('type','email')
        localStorage.setItem('type','');
        this.props.history.push('/login');
    }
    render(){
        return(
            <header>
                <BrowserRouter>
                    <div className="footer">
                        <h3>Made by React Trainee</h3>
                        <div><a align="right" onClick={this.logout}>Logout</a></div>
                    </div>
                </BrowserRouter>
            </header>
        )
    }
}
export default Footer;