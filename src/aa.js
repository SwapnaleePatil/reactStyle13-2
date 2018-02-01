import React, { Component } from 'react';
import './boot.css'
var axios=require('axios');

class ListForm extends Component{
    constructor(){
        super();
        this.state={
            data1:[]
        };
        axios.get('http://localhost:5000/fetch').then((sucess)=>{
            this.setState({data1:sucess.data})
        }).catch((err)=>{
            console.log(err);
        })
        this.editData=this.editData.bind(this);
        this.delData=this.delData.bind(this);
    }
    delData(e){
        axios.get('http://localhost:5000/del',{
            _id:e
        }).then((sucess)=>{
            console.log(sucess)
        }).catch((err)=>{
            console.log("error is=",err);
        });
    }
    editData(e){
        console.log(e);
    }
    render(){
        return(
            <table className="table table-striped">
                <tbody>
                <tr><th>Name</th><th>SurName</th><th>email</th><th>Mob</th><th>Address</th><th>City</th><th>Action</th></tr>
                {
                    this.state.data1.map((v,i)=>{
                        return <Fetch key={i} info={v} edt={this.editData} del={this.delData}/>
                    })
                }
                </tbody>
            </table>
        )
    }
}

class Fetch extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.info.name}</td>
                <td>{this.props.info.surname}</td>
                <td>{this.props.info.email}</td>
                <td>{this.props.info.mob}</td>
                <td>{this.props.info.addr}</td>
                <td>{this.props.info.city}</td>
                <td><button onClick={()=>this.props.edt(this.props.info._id)} >Edit</button><button onClick={()=>this.props.del(this.props.info._id)}>Delete</button> </td>
            </tr>
        )
    }
}
export default ListForm;