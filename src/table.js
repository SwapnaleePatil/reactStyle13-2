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
            'http://localhost:5000/savedata',
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
        console.log('table : ',this.props);
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