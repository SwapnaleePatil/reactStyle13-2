import React, { Component } from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import './App.css';

import Home from './comp/Home';
import About from './comp/About';
import Form from './comp/Form';
import Contents from './comp/Content';
import Help from './comp/Help';


const Links=()=>(
    <div className="list-group">
        <NavLink className="bor" exact to="/">Home</NavLink>
        <NavLink className="bor" to="/about">About</NavLink>
        <NavLink className="bor" to="/help">Help</NavLink>

        <NavLink className="bor" to="/content">Content</NavLink>
        <NavLink className="bor" to="/form">Form</NavLink>
    </div>
)

class SideBar extends React.Component
{
    render(){
        return(

<header>
    <BrowserRouter>
                <div className="row">
                    <div className="sidenav col-sm-4" >
                        <Links/>
                    </div>
                    <div className="col-sm-8">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/help" component={Help}/>
                            <Route path="/content" component={Contents}/>
                            <Route path="/form" component={Form}/>
                            <Route render={()=> <h1>Not Found</h1>} />
                        </Switch>
                    </div>
                </div>

    </BrowserRouter>
</header>

        )

    }
}
export default SideBar;