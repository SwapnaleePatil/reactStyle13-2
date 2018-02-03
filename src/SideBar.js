import React, { Component } from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'

import {Collapse,ListGroup,ListGroupItem} from 'react-bootstrap';
import './App.css';

import Home from './comp/Home';
import About from './comp/About';
import Form from './comp/Form';
import Contents from './comp/Content';
import Help from './comp/Help';
import TableDisp from './comp/TableDisp';

class Links extends React.Component
{
    render(){


        return(

    <div className="list-group  " >
        <NavLink className="bor" exact to="/">Home</NavLink>
        <NavLink className="bor" exact to="/about">About</NavLink>
        <NavLink className="bor" exact to="/help">Help</NavLink>
        <NavLink className="bor" exact to="/content">Content</NavLink>
        <NavLink className="bor" exact to="/form">Form</NavLink>
        <NavLink className="bor" exact to="/disp">Display Data</NavLink>
    </div>

        )}
}

class SideBar extends React.Component
{
    render(){
        return(
<header>
    <BrowserRouter>
                <div className="row">
                    <div className="sidenav col-sm-2" >
                        <Links/>
                    </div>
                    <div className="col-sm-10 col-sm-offset-2 rc" >
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/help" component={Help}/>
                            <Route exact path="/content" component={Contents}/>
                            <Route exact path="/form" component={Form}/>
                            <Route exact path="/disp" component={TableDisp}/>
                            <Route exact render={()=> <h1>Not Found</h1>} />
                        </Switch>
                    </div>
                </div>
    </BrowserRouter>
</header>

        )

    }
}
export default SideBar;