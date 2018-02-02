import React, {Component} from 'react';
import {Route, BrowserRouter, NavLink, Prompt, Switch} from 'react-router-dom'
import '../table.css';
import Form from './Form';

const axios = require('axios');


var eid = '';

class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ename: "",
            email: "",
            password: "",
            pno: "",
            gender: "",
            city: "",
            agree: "",
            data1: [],
            isEditing: false,
            detailData: []
        }

        axios.get('http://localhost:5000/fetch').then((success) => {
            if (!success) {
                console.log("Data Not Get");
            }
            this.setState({data1: success.data})
            //   console.log("Data1:",this.state.data1)
        }).catch((e) => {
            console.log("Error:", e)
        });
        this.renderForm = this.renderForm.bind(this);
        this.handleename = this.handleename.bind(this);
        // this.toggleItem=this.toggleItem.bind(this);
    }

    handleename(event) {
//        console.log(event.target.value);
        const {value, name} = event.target;
        const detailData = this.state.detailData;
        detailData[name] = value;
        this.setState({detailData}, () => {
            console.log(this.state.ename);
        });
    }

    updateData = () => {
        console.log("state", this.state);
        axios.post(
            'http://localhost:5000/savedata',
            {
                ename: this.state.ename,
                email: this.state.email,
                password: this.state.password,
                pno: this.state.pno,
                gender: this.state.gender,
                city: this.state.city,
                agree: this.state.agree,
                ...this.state.detailData
            })
            .then((res) => {
                console.log("Response", res.data)

            })
            .catch((e) => {
                console.log("Error" + e);
            });

    }
    editData = (eid) => {
        console.log("state", eid);
        axios.post(
            'http://localhost:5000/edit',
            {
                id: eid
            })
            .then((res) => {
                console.log("Response", res.data);
                this.setState({
                    detailData: res.data[0]
                });
                console.log("Data", this.state.detailData);
            })
            .catch((e) => {
                console.log("Error" + e);
            });


    }
    deleteData = (eid) => {
        console.log("state", eid);
        axios.post(
            'http://localhost:5000/delete',
            {
                id: eid
            })
            .then((res) => {

                console.log("Response", res.data);


            })
            .catch((e) => {
                console.log("Error" + e);
            });

    }

    renderForm() {
        //console.log("Data in Randor1",this.state.detailData.ename);
        const detailData = this.state.detailData;
        return (
            <div className="table">
                <div className="container">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                    }}>

                        <div className="row">
                            <div className="col-25">
                                <label>Full Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="ename" value={detailData.ename}
                                       onChange={this.handleename}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Email</label>
                            </div>
                            <div className="col-75">
                                <input type="email" id="email1" name="email1" value={detailData.email}
                                       onChange={this.handleename} placeholder="Enter Your Email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Password</label>
                            </div>
                            <div className="col-75">
                                <input type="password" id="pwd" value={detailData.password} name="pwd"
                                       placeholder="Enter Your Secure Password"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Phone No</label>
                            </div>
                            <div className="col-75">
                                <input type="number" id="pno" name="pno" value={this.state.detailData.pno}
                                       placeholder="Enter Number"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Gender</label>
                            </div>
                            <div className="col-75">
                                <div>

                                    <div className="col-10">
                                        <input type="radio" name="r1" id="r1" ref="r1" value="male" onChange=""/>
                                        <div vertical-align="middle" align="left">Male</div>
                                    </div>
                                    <div className="col-10">
                                        <input type="radio" name="r1" id="r2" ref="r2" value="female"/>
                                        <div vertical-align="middle" align="left">Female</div>
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
                            <input type="submit" value="Submit" onClick={() => {
                                let r = '';
                                let a = 0;
                                if (document.getElementById('r1').checked === true) {
                                    r = 'male';
                                }
                                if (document.getElementById('r2').checked === true) {
                                    r = 'female';
                                }
                                if (document.getElementById('agree').checked === true) {
                                    a = 1;
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
                                        this.updateData();

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

    toggleItem() {
        return <toggle/>
        const isEditing = this.state.isEditing;
        this.setState({
            isEditing: !isEditing
        })
    }

    componentDidUpdate() {
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


    render() {
        const isEditing = this.state.isEditing;
        return (
            <section>
                {
                    isEditing ? this.renderForm() :
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

                                        this.state.data1.map((v, i) => {
                                            return <tr>
                                                <td>{v.ename}</td>
                                                <td>{v.email}</td>
                                                <td>{v.pno}</td>
                                                <td>{v.gender}</td>
                                                <td>{v.city}</td>
                                                <td>{v.agree}</td>
                                                <td><a href="#" className="fa fa-pencil fa-2x" onClick={() => {
                                                    eid = v._id;
                                                    this.setState({
                                                        isEditing: true
                                                    })
                                                    this.editData(eid);
                                                    console.log(this.state.editData1);
                                                }}/></td>

                                                <th><a href="#" className="fa fa-trash-o fa-2x" onClick={() => {
                                                    eid = v._id
                                                    console.log("Eid", eid);
                                                    this.deleteData(eid);
                                                }}/></th>
                                            </tr>
                                        })
                                    }
                                    </tbody>
                                </table>
                            </center>
                        </div>
                }
            </section>
        )
    }
}


export default TableData;