import React, { Component } from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import '../table.css';
import Form from './Form';
const axios=require('axios');


var eid='';

class TableData extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            IDInfo:'',
            isEditing:false,
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
        this.editData=this.editData.bind(this);
        this.delData=this.delData.bind(this);
        this.upadteData=this.upadteData.bind(this);
    }

    componentDidUpdate()
    {
        // axios.get('http://localhost:5000/fetch').then((success)=>{
        //     if(!success)
        //     {
        //         console.log("Data Not Get");
        //     }
        //     this.setState({data1:success.data})
        //     //   console.log("Data1:",this.state.data1)
        // }).catch((e)=>{
        //     console.log("Error:",e)
        // });
    }
    editData(e) {
        console.log(e)
        this.setState({isEditing: true, IDInfo: e});
    }
    upadteData(e,ename,email,pno,gender,city){
        console.log(e,ename,email,password,pno,gender,city,agree);
        this.setState({isEditing: false, IDInfo:''});

        axios.post('http://localhost:5000/upd',{
            _id:e,
            ename:ename,
            email:email,
            password:password,
            pno:pno,
            gender:gender,

            city:city,
            agree:agree
        }).then((sucess)=>{
            console.log(sucess.data);
            this.setState({data1:sucess.data})
        }).catch((err)=>{
            console.log("error is=",err);
        });
    }


    render()
    {
        return(
            <header>
                <BrowserRouter>
                    <div>
                        <div>
                            <Route path="/form/" component={Form}/>
                        </div>
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
                                            return <GetData key={i} info={v} edt={this.editData} del={this.delData} isedt={this.state.isEditing} id={this.state.IDInfo} upd={this.upadteData}/>
                                        })
                                    }
                                    </tbody>
                                </table>
                            </center>
                        </div>
                    </div>
                </BrowserRouter>
            </header>

        )
    }
}
const deleteData=(eid)=>{
    console.log("state",eid);
    axios.post(
        'http://localhost:5000/delete',
        {
            id:eid
        })
        .then((res)=>{

            console.log("Response",res.data);


        })
        .catch((e)=>{
            console.log("Error"+e);
        });

}
class GetData extends React.Component
{
    render(){
        return(
            (this.props.isedt && this.props.id === this.props.info._id) ?
                <tr>
                    <td> <input type="text" id="fname" value={this.props.info.ename} /></td>
                    <td><input type="email" id="email1" defaultValue={this.props.info.email}  /></td>

                    <td><input type="number" id="pno" defaultValue={this.props.info.email} /> </td>
                    <td><input type="radio" name="r1" id="r1" ref="r1" value="male" onChange=""/><div vertical-align="middle" align="left">Male</div>
                        <input type="radio" name="r1" id="r2" ref="r2" value="female"/><div vertical-align="middle" align="left">Female</div></td>
                    <td><select id="city" name="city" ref="city">
                        <option>--Select--</option>
                        <option value="vyara">Vyara</option>
                        <option value="surat">Surat</option>
                        <option value="mumbai">Mumbai</option>
                    </select></td>
                    <td><input type="text" defaultValue={this.props.info.city} id="city" /></td>
                    <td>
                        <button onClick={()=>this.props.upd(this.props.info._id,
                        document.getElementById("ename").value,
                        document.getElementById("email").value,
                        document.getElementById("pno").value,
                        document.getElementById("gender").value,
                        document.getElementById("city").value,
                        document.getElementById("agree").value
                    )} >submit</button><button onClick={()=>this.props.del(this.props.info._id)}>Delete</button> </td>
                </tr>
                :
                <tr>
                    <td>{this.props.info.ename}</td>
                    <td>{this.props.info.email}</td>
                    <td>{this.props.info.pno}</td>
                    <td>{this.props.info.gender}</td>
                    <td>{this.props.info.city}</td>
                    <td>{this.props.info.agree}</td>
                    <td><a href="#" className="fa fa-pencil fa-2x" onClick={()=>this.props.edt(this.props.info._id)} /></td>
                        <td><a href="#" className="fa fa-trash-o fa-2x" onClick={()=>{

                            eid=this.props.info._id
                            console.log("Eid",eid);
                            deleteData(eid);
                        }}/></td>
                </tr>

        )
    }
}

export default TableData;