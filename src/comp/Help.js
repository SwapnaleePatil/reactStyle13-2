import React from 'react';
import '../App.css';

class Help extends React.Component {
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
                       </div>
        )
    }
}
export default Help;