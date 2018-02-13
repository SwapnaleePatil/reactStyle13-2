import React from 'react';
import '../index.css'

class Logout extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        localStorage.removeItem("user");
        this.props.history.push('/login');
    }


    render(){
        return(
            <section>

            </section>
        )
    }
}
export default Logout;