import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import SideBar from './SideBar';
import NavBar from "./NavBar";
class Hello1 extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="row">

                    <section className="main">

                    </section>
                </div>
            </BrowserRouter>)
    }
}

export default Hello1;

