import React, { Component } from 'react';

import './App.css';

class HeaderBar extends React.Component
{
    render(){

        return(
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Registration</a></li>
                        <li><a href="#">Detail</a></li>
                    </ul>
                </div>
            </nav>
        )

    }
}
class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
            <HeaderBar/>
          <img className="img"   src="http://under30ceo.com/wp-content/uploads/2013/12/o-NEW-YORK-CITY-WRITER-facebook.jpg" />

        </header>
      </div>
    );
  }
}

export default App;
