import React, { Component } from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import './App.css';

const Link=()=>(
    <div className="list-group">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/content">Content</NavLink>
        <NavLink to="/form">Form</NavLink>
    </div>
)
class SideBar extends React.Component
{
    render(){
        return(
            <header>
                <BrowserRouter>
                    <div className="sidenav">
                        <Link/>

                    </div>
                </BrowserRouter>
            </header>
        )

    }
}
export default SideBar;