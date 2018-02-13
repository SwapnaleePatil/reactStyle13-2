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
import Login from './comp/login';
import Logout from './comp/logout';
import ExamC from './comp/examCrud';
class Links extends React.Component
{
    render(){
        return(
<div>
        <NavLink className="bor" exact to="/">Home</NavLink>
        <NavLink className="bor" exact to="/about">About</NavLink>
        <NavLink className="bor" exact to="/help">Help</NavLink>
        <NavLink className="bor" exact to="/content">Content</NavLink>
        <NavLink className="bor" exact to="/examC">Crud User</NavLink>

        <NavLink className="bor" exact to="/form">Form</NavLink>
        <NavLink className="bor" exact to="/disp">Display Data</NavLink>
        { (localStorage.getItem('user')) ?
            <NavLink className="bor" exact to="/logout">Logout</NavLink> :
            <NavLink className="bor" exact to="/login">Login</NavLink> }

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

                    <section className="sidenav  col-lg-3" >
                        <Links/>
                    </section>
                    <section className="main  col-lg-9" >
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/help" component={Help}/>
                            <Route exact path="/content" component={Contents}/>

                            <Route exact path="/examC" component={ExamC}/>
                            <Route exact path="/form" component={Form}/>
                            <Route exact path="/disp" component={TableDisp}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/logout" component={Logout}/>
                            <Route exact render={()=> <h1>Not Found</h1>} />
                        </Switch>
                    </section>
                </div>
    </BrowserRouter>
</header>

        )

    }
}
export default SideBar;