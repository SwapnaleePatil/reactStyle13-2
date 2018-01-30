import React, { Component } from 'react';
//import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import './App.css';

import SideBar from './SideBar';
import Footer from './Footer';
import Hello from './MainContent';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <div className="App-header">
                    Welcome To React
                </div>
                <div className="row">


                <section className="col-sm-8">
                    <Hello/>

                </section>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>

        );
    }
}

export default App;