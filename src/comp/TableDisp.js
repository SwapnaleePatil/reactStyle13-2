import React, {Component} from 'react';
import {Route, BrowserRouter, NavLink, Prompt, Switch} from 'react-router-dom'
import '../table.css';
import Form from './Form';

const axios = require('axios');
var eid = '';
var isChecked = false;

class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [],
            isEditing: false,

            detailData: [],
            cities:['vyara','Surat','Mumbai','Pune','Banglore']

        }
        this.showData();
        this.showData = this.showData.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderForm1 = this.renderForm1.bind(this);
        this.handleename = this.handleename.bind(this);
        this.handleemail = this.handleemail.bind(this);
        this.handlepno = this.handlepno.bind(this);
        this.handlegen = this.handlegen.bind(this);
        this.handlecity = this.handlecity.bind(this);
        this.handleGender = this.handleGender.bind(this);

    }
    componentWillMount() {
        return (
            {}
        )
    }
    showData() {
        axios.get('http://localhost:5000/fetch').then((success) => {
            if (!success) {
                console.log("Data Not Get");
            }
            this.setState({data1: success.data})
            //   console.log("Data1:",this.state.data1)
        }).catch((e) => {
            console.log("Error:", e)
        });
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
    handleemail(event) {
//        console.log(event.target.value);
        const {value, name} = event.target;
        const detailData = this.state.detailData;
        detailData[name] = value;
        this.setState({detailData}, () => {
            console.log(this.state.email);
        });
    }
    handlepno(event) {
//        console.log(event.target.value);
        const {value, name} = event.target;
        const detailData = this.state.detailData;
        detailData[name] = value;
        this.setState({detailData}, () => {
            console.log(this.state.pno);
        });
    }
    handlegen(event) {
//        console.log(event.target.value);
        const {value, name} = event.target;
        const detailData = this.state.detailData;
        detailData[name] = value;
        this.setState({detailData}, () => {
            console.log(this.state.gender);
        });
    }
    handlecity(event) {
//        console.log(event.target.value);
        const {value, name} = event.target;
        const detailData = this.state.detailData;
        detailData[name] = value;
        this.setState({detailData}, () => {
            console.log(this.state.city);
        });
    }
    handleGender(event){
        console.log('Gender : ',event.target.value);
        const {value, name} = event.target;
        const detailData = this.state.detailData;
        detailData[name] = value;
        this.setState({detailData}, () => {
            console.log("GEnder",this.state.detailData);
        });


    }
    updateData = () => {
        console.log("Detail state", this.state.detailData);
        axios.post(
            'http://localhost:5000/update',
            {
                id: this.state.detailData._id,
                ...this.state.detailData
            })
            .then((res) => {
                console.log("Response", res.data)
                this.setState({
                    isEditing: false
                })
                this.showData();
            })
            .catch((e) => {
                console.log("Error" + e);
            });
        this.showData();
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
                this.showData();
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
                this.showData();
            })
            .catch((e) => {
                console.log("Error" + e);
            });


    }

    renderForm() {
        //console.log("Data in Randor1",this.state.detailData.ename);
        const detailData = this.state.detailData;
        if (detailData.gender === "male") {
            isChecked = true
        }
        else {
            isChecked = false
        }
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
                                <input type="text" id="ename" name="ename" value={detailData.ename}
                                       onChange={this.handleename}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Email</label>
                            </div>
                            <div className="col-75">
                                <input type="email" id="email" name="email" value={detailData.email}
                                       onChange={this.handleemail}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label>Phone No</label>
                            </div>
                            <div className="col-75">
                                <input type="number" id="pno" name="pno" value={detailData.pno}
                                       onChange={this.handlepno}/>
                            </div>
                        </div>
                        <div className="row">
                            <section>
                                <div className="col-25">
                                    <label>Gender</label>
                                </div>
                                <div className="col-75">
                                    <div>
                                        <section>
                                            {isChecked ? <div>
                                                <div className="col-10">
                                                    <input type="radio" name="gender" id="r1" defaultValue="male"
                                                           checked={true} onChange={this.handleGender}/>
                                                    <div vertical-align="middle" align="left">Male</div>
                                                </div>
                                                <div>
                                                    <div className="col-10">
                                                        <input type="radio" name="gender" id="r2"  defaultValue="female"
                                                               onChange={this.handleGender}/>
                                                        <div vertical-align="middle" align="left">Female</div>
                                                    </div>
                                                </div>
                                                </div>
                                                :
                                                <div>
                                                    <div className="col-10">
                                                        <input type="radio" name="gender" id="r1" defaultValue="male"
                                                               onChange={this.handleGender}/>
                                                        <div vertical-align="middle" align="left">Male</div>
                                                    </div>
                                                    <div className="col-10">
                                                        <input type="radio" name="gender" id="r2" defaultValue="female"
                                                               checked={true} onChange={this.handleGender}/>
                                                        <div vertical-align="middle" align="left">Female</div>
                                                    </div>
                                                </div>
                                                }


                                        </section>
                                    </div>

                                </div>
                            </section>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>City</label>
                            </div>
                            <div className="col-75">
                                <select id="city" name="city" ref="city" onChange={this.handlecity}>
                                    <option defaultValue={detailData.city}>{detailData.city}</option>
                                    {
                                        this.state.cities.map((v,i)=>{
                                                return v===detailData.city ? ``: <option value={v}>{v}</option>
                                    })
                                    }


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

                                this.setState({
                                        id: detailData._id,
                                        ename: document.getElementById('ename').value,
                                        email: document.getElementById('email').value,
                                        pno: document.getElementById('pno').value,
                                        gender: r,
                                        city: document.getElementById('city').value,
                                    },
                                    () => {
                                        console.log('Method Call Back');
                                        console.log("ID:", detailData._id)
                                        this.updateData(detailData._id);

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

    renderForm1() {
        return (
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
        )
    }

    render() {
        const isEditing = this.state.isEditing;
        return (
            <section>
                {
                    isEditing ? this.renderForm() : this.renderForm1()

                }
            </section>
        )
    }
}


export default TableData;