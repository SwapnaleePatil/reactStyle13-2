import React, { Component } from 'react';
//import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import '../table.css';
const axios=require('axios');
var eid='';

class TableData extends React.Component
{
    constructor()
    {
        super();
        this.state={

          data1:[]
        }

        axios.get('http://localhost:5000/fetch').then((success)=>{
            if(!success)
            {
                console.log("Data Not Get");
            }
            this.setState({data1:success.data})
         //   console.log("Data1:",this.state.data1)
        }).catch((e)=>{
                    console.log("Error:",e)
        });

    }



    render()
    {
        return(
            <div className="table-responsive">
                <h3 align="center">Display</h3>
                <center>
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>Employee Name</th>
                        <th>Email</th>

                        <th>Phone No</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Agree</th>
                        <th colSpan='2'>Action</th>
                    </tr>
                    {

                        this.state.data1.map((v,i)=>{
                                return <GetData info={v} key={i}/>
                        })
                    }
                    </tbody>
                </table>
                </center>
            </div>
        )
    }
}
const editData=(eid)=>{
    console.log("state",eid);
     axios.post(
        'http://localhost:5000/delete',
        {
            id:eid
        })
        .then((res)=>{

         console.log("Response",res.data);

         this.setState({
             data1:{
                 ...this.state.data1,

             }
         })
        })
        .catch((e)=>{
            console.log("Error"+e);
        });

}

class GetData extends React.Component
{
    render(){
    return(
        <tr>
            <td>{this.props.info.ename}</td>
            <td>{this.props.info.email}</td>

            <td>{this.props.info.pno}</td>
            <td>{this.props.info.gender}</td>
            <td>{this.props.info.city}</td>
            <td>{this.props.info.agree}</td>
            <td><a href="#" className="fa fa-trash-o fa-2x" onClick={()=>{

                    eid=this.props.info._id


                console.log("Eid",eid);
                editData(eid);
            }}/></td>
    <th>           <a href="#" className="fa fa-pencil fa-2x"/></th>
        </tr>
    )
    }
}

export default TableData;