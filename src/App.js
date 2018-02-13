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
                    <h5 align="right">{localStorage.getItem('user')==='' ? "User" : localStorage.getItem('user')}</h5>
                </div>

                <div className="row">
                    <div>
                        <SideBar/>
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