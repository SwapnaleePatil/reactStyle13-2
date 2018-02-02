import React from 'react';
import '../App.css';

import Table from "../table";


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isChanged:false
        }
    }
    render(){
        return(
            <Table />
        )
    }
}
export default Form;
