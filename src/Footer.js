import React, { Component } from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'

import './App.css';
import Login from './comp/login';

class Footer extends React.Component
{
    constructor(){
        super()

    }

    render(){
        return(
            <header>
                <BrowserRouter>
                    <div className="footer">
                        <h3>Made by React Trainee</h3>
                    </div>
                </BrowserRouter>
            </header>
        )
    }
}
export default Footer;