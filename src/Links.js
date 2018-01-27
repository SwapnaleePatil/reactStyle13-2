import React, { Component } from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import './App.css';

const Link=()=>(
    <div className="list-group">
        <NavLink className="list-group-item  " activeClassName="active" exact to="/">Home</NavLink>
        <NavLink className="list-group-item " activeClassName="active" to="/about">About</NavLink>
        <NavLink className="list-group-item  " activeClassName="active" to="/help">Help</NavLink>
        <NavLink className="list-group-item  " activeClassName="active" to="/content">Content</NavLink>
        <NavLink className="list-group-item  " activeClassName="active" to="/form">Form</NavLink>
    </div>
)
class Links extends React.Component
{
    render(){
        return(
            <header>
                <BrowserRouter>
                        <div className="topnav">
                            <Link/>

                        </div>
                </BrowserRouter>
            </header>
        )

    }
}
export default Links;