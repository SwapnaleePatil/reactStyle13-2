import React from 'react';
import '../App.css';

import Table from "../table";


class Form extends React.Component {
    constructor(){
        super();
        this.state={
            isChanged:false
        }
    }
    render(){
        return(
            <Table/>

        )
    }

}
export default Form;
