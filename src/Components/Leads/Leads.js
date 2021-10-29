import React, { Component } from 'react'
import Add from './Add';
import Notes from './Notes';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
export default class Leads extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leads: [],
            display: true
        }
    }
    componentDidMount = () => {
        this.load()
    }
    removeComponent = () => {
        this.setState({
            modal: []
        })
    }
    addComponent = (value) => {
        let edit = 0
        let data = {}
        if (value) {
            edit = value.id
            data = value
        }

        let modal = <Add edit={edit} data={data} load={this.load} removeComponent={this.removeComponent} />

        this.setState({
            modal: modal
        })
    }
    notes = (id) => {

        let modal = <Notes leads={id} removeComponent={this.removeComponent} />
        this.setState({
            modal: modal
        })
    }
    // addStudent = async id => {
    //     var password = prompt("Please set a password for select leads.");
    //     if(password != null){
    //         let teacher = JSON.parse(localStorage.getItem('teacher'))
    //         axios.interceptors.request.use(
    //             config => {
    //                 config.headers.authorization = `Bearer ${teacher.user.token}`;
    //                 return config;
    //             },
    //             error => {
    //                 return Promise.reject(error)
    //             }
    //         )
    //         let response = await axios.post(`${process.env.REACT_APP_API_URL}/teachers/addStudent/${id}`, {password: password})
    //         console.log(response.data)
    //         if(response.data.status === 'success'){
    //             NotificationManager.success('Leads telebeler siyahisina elave edildi', 'Success', 5000);
    //         }
    //         else{
    //             let message = response.data.message;
    //             for (const [key, value] of Object.entries(message)) {
    //                 NotificationManager.error(value, 'Error', 5000);
    //             }
    //         }
    //     }
    //     else{
    //         NotificationManager.warning('Sifre teyin edilmedi.', 'Warning', 5000);
    //     }
        
    // }
    load = async name => {
        let teacher = JSON.parse(localStorage.getItem('teacher'))
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${teacher.user.token}`;
                return config;
            },
            error => {
                return Promise.reject(error)
            }
        )
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/teachers/leads`)
        if(response.data.status === 'success'){
            this.setState({
                leads: response.data.leads,
                display: false
            })
        }
        
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h4>Leads</h4>
                            </div>
                            <div className="col-12 col-sm-6 clearfix">
                            <button type="button" className="btn btn-info  float-right" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent()}>Add</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                            <div className="loading" style={{ display: this.state.display ? 'block' : 'none' }}>
                                <div className="text-center">
                                    <span>
                                        Loading...
                                    </span>
                                </div>
                            </div>
                                <div className="table-responsive bg-white m-0 p-3 rounded shadow">
                                    <table className="table table-bordered m-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Leads Name</th>
                                                <th scope="col">Contacts</th>
                                                <th scope="col">Leads source</th>
                                                <th scope="col">Created time</th>
                                                <th scope="col">Leads owner</th>
                                                <th scope="col">Leads purpose</th>
                                                <th scope="col"></th>
                                                {/* <th scope="col"><button className="btn Btn32 text-danger"><i className="fas fa-trash"></i></button></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.leads.length > 0 ? this.state.leads.map((value, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                {value.name}
                                                            </td>
                                                            <td>
                                                                <p className="m-0 p-0">{value.mobile}</p>
                                                                <p className="m-0 p-0">{value.phone}</p>
                                                                <p className="m-0 p-0">{value.email}</p>
                                                                <p className="m-0 p-0"><i>{value.address}</i></p>
                                                            </td>
                                                            <td>
                                                                {value.source}
                                                            </td>
                                                            <td>
                                                                {value.created_at}
                                                            </td>
                                                            <td>
                                                                {value.owner}
                                                            </td>
                                                            <td>
                                                                {value.purpose}
                                                            </td>
                                                            <td className="btnTD text-center">
                                                                <button className="btn Btn32 btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent(value)}><i className="fas fa-pencil-alt"></i></button>
                                                                {/* <button className="btn Btn32 btn-info" onClick={() => this.addStudent(value.id)}><i class="fas fa-user-plus"></i></button> */}
                                                                <button className="btn Btn32 btn-primary" data-toggle="modal" data-target="#notesModal" onClick={() => this.notes(value.id)}><i className="fas fa-clipboard-list"></i></button>

                                                                {/* <button className="btn Btn32 btn-danger" data-id={value.id} data-link="lesson" onClick={this.delete}><i className="fas fa-trash"></i></button> */}

                                                            </td>
                                                        </tr>
                                                    )
                                                }) :  
                                                    <tr>
                                                        <td colSpan="12" className="text-center">
                                                            Empty
                                                        </td>
                                                    </tr>
                                                 }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.modal
                }
                {/* { <Add edit={this.state.edit} data={this.state.data} load={this.load} setData={this.setData} />} */}
            </>
        )
    }
}
