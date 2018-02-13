import React from 'react';


import '../App.css';

class About extends React.Component {
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
                About
            </div>
        )
    }
}
export default About;