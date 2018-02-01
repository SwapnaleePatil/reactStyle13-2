import React, { Component } from 'react';
//import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import './App.css';
import Footer from './Footer';
import Hello from './MainContent';
import SideBar from './SideBar';
class App extends Component {
    render() {
        return (
            <div className="App" >
                <div className="App-header">
                    Welcome To React

                </div>

                <div className="row">
                    <div>
                    <div>
                        <SideBar/>
                    </div>
                    <div className="container">
                        <Hello/>
                    </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default App;