import React, { Component } from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import './App.css';
import Links from './Links';
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
                <div>
                    <SideBar/>
                    <Hello/>
                </div>
                <div>


                    <Footer/>
                </div>
            </div>

        );
    }
}

export default App;
