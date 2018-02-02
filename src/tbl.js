import React, { Component } from 'react';
//import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import './table.css';
import {Popup} from 'react-popup';
const axios=require('axios');
var eid='';
class Table extends React.Component
{
    constructor()
    {
        super();
        this.state={
            ename:"",
            email:"",
            password:"",
            pno:"",
            gender:"",
            city:"",
            agree:""
        }

    }

    sendData=()=>{
        console.log("state",this.state);
        axios.post(
            'http://localhost:5000/update',
            {
                ename:this.state.ename,
                email:this.state.email,
                password:this.state.password,
                pno:this.state.pno,
                gender:this.state.gender,
                city:this.state.city,
                agree:this.state.agree
            })
            .then((res)=>{
                console.log("Response",res.data)
                Popup.alert('Successfully Inserted');
            })
            .catch((e)=>{
                console.log("Error"+e);
            });

    }
    render()
    {
        return(
            <div className="table">
                <div className="container">
                    <form onSubmit={(event)=>{
                        event.preventDefault();
                    }}>
                        <div className="row">
                            <div className="col-25">
                                <label>Full Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" ref="fname" name="fname" placeholder="Enter Your Name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Email</label>
                            </div>
                            <div className="col-75">
                                <input type="email" id="email1" name="email1" ref="email1" placeholder="Enter Your Email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Password</label>
                            </div>
                            <div className="col-75">
                                <input type="password" id="pwd" ref="pwd" name="pwd" placeholder="Enter Your Secure Password"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Phone No</label>
                            </div>
                            <div className="col-75">
                                <input type="number" id="pno" name="pno" ref="pno" placeholder="Enter Number"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Gender</label>
                            </div>
                            <div className="col-75">
                                <div  >
                                    <div className="col-10">
                                        <input type="radio" name="r1" id="r1" ref="r1" value="male" onChange=""/><div vertical-align="middle" align="left">Male</div>
                                    </div>
                                    <div className="col-10">
                                        <input type="radio" name="r1" id="r2" ref="r2" value="female"/><div vertical-align="middle" align="left">Female</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>City</label>
                            </div>
                            <div className="col-75">
                                <select id="city" name="city" ref="city">
                                    <option>--Select--</option>
                                    <option value="vyara">Vyara</option>
                                    <option value="surat">Surat</option>
                                    <option value="mumbai">Mumbai</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                            </div>
                            <div className="col-75">
                                <input type="checkbox" id="agree" value="1" ref="agree" name="agree" /><div vertical-align="middle" align="left">I Agree</div>
                            </div>

                        </div>
                        <div className="row">
                            <input type="submit" value="Submit" onClick={() => {
                                let r='';
                                let a=0;
                                if(document.getElementById('r1').checked===true)
                                {
                                    r='male';
                                }
                                if(document.getElementById('r2').checked===true)
                                {
                                    r='female';
                                }
                                if(document.getElementById('agree').checked===true)
                                {
                                    a=1;
                                }
                                this.setState({
                                        ename: document.getElementById('fname').value,
                                        email: document.getElementById('email1').value,
                                        password: document.getElementById('pwd').value,
                                        pno: document.getElementById('pno').value,
                                        gender: r,
                                        city: document.getElementById('city').value,
                                        agree: a
                                    },
                                    () => {
                                        console.log('Method Call Back');
                                        this.sendData();

                                    });
                            }
                            }
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Table;


//==============================================================================================

import React, { Component } from 'react';
import './boot.css'
var axios=require('axios');
class ListForm extends Component{
    constructor(){
        super();
        this.state={
            IDInfo:'',
            isEditing:false,
            data1:[]
        };
        axios.get('http://localhost:5000/fetch').then((sucess)=>{
            this.setState({data1:sucess.data})
        }).catch((err)=>{
            console.log(err);
        })
        this.editData=this.editData.bind(this);
        this.delData=this.delData.bind(this);
        this.upadteData=this.upadteData.bind(this);
    }
    delData(e){
        console.log(e);
        axios.post('http://localhost:5000/del',{
            id:e
        }).then((sucess)=>{
            console.log(sucess.data);
            this.setState({data1:sucess.data})
        }).catch((err)=>{
            console.log("error is=",err);
        });
    }
    editData(e) {
        console.log(e)
        this.setState({isEditing: true, IDInfo: e});
    }
    upadteData(e,name,surname,email,mob,addr,city){
        console.log(e,name,surname,email,mob,addr,city);
        this.setState({isEditing: false, IDInfo:''});
        axios.post('http://localhost:5000/upd',{
            _id:e,
            name:name,
            surname:surname,
            email:email,
            mob:mob,
            addr:addr,
            city:city
        }).then((sucess)=>{
            console.log(sucess.data);
            this.setState({data1:sucess.data})
        }).catch((err)=>{
            console.log("error is=",err);
        });
    }
    render(){
        return(
            <table className="table table-striped">
                <tbody>
                <tr><th>Name</th><th>SurName</th><th>email</th><th>Mob</th><th>Address</th><th>City</th><th>Action</th></tr>
                {
                    this.state.data1.map((v,i)=>{
                        return <Fetch key={i} info={v} edt={this.editData} del={this.delData} isedt={this.state.isEditing} id={this.state.IDInfo} upd={this.upadteData}/>
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
            (this.props.isedt && this.props.id === this.props.info._id) ?
                <tr>
                    <td><input type="text" defaultValue={this.props.info.name} id="name" /></td>
                    <td><input type="text" defaultValue={this.props.info.surname} id="surname"  /></td>
                    <td><input type="text" defaultValue={this.props.info.email} id="email" /> </td>
                    <td><input type="text" defaultValue={this.props.info.mob} id="mob" /> </td>
                    <td><input type="text" defaultValue={this.props.info.addr} id="addr" /></td>
                    <td><input type="text" defaultValue={this.props.info.city} id="city" /></td>
                    <td><button onClick={()=>this.props.upd(this.props.info._id,
                        document.getElementById("name").value,
                        document.getElementById("surname").value,
                        document.getElementById("email").value,
                        document.getElementById("mob").value,
                        document.getElementById("addr").value,
                        document.getElementById("city").value
                    )} >submit</button><button onClick={()=>this.props.del(this.props.info._id)}>Delete</button> </td>
                </tr>
                :
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


Add CommentCollapse 
