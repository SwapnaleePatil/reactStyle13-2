import React from 'react';

import '../App.css';


class Home extends React.Component {
    constructor(){
        super();
    }
    componentWillMount() {
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login');
        }
    }
    render(){
        return(
            <div className="txt">
                Home
            </div>
        )
    }
}
export default Home;