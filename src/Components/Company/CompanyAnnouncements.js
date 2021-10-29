import React, { Component } from 'react'
import axios from 'axios';

export default class CompanyAnnouncements extends Component {

    constructor(props) {
        super(props)
        this.state = {
            announcements: [],
            display: true
        }
    }
    componentDidMount = () => {
        this.load()
    }
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
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/teachers/announcements`)
        if (response.data.status === 'success') {
            this.setState({
                announcements: response.data.announcements,
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
                            <div className="col-12">
                                <h4>Company announcements</h4>
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
                                    <table class="table table-bordered m-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Added date</th>
                                                <th scope="col">Created by</th>
                                                <th scope="col">Body</th>
                                                <th scope="col">Share With</th>
                                                {/* <th scope="col"></th> */}
                                                {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.announcements.length > 0 ? this.state.announcements.map((value, index) => {
                                                const share_with = []
                                                if (value.manager) {
                                                    share_with.push({ value: 2, label: 'Manager' })
                                                }
                                                if (value.teacher) {
                                                    share_with.push({ value: 3, label: 'Teacher' })
                                                }
                                                if (value.student) {
                                                    share_with.push({ value: 4, label: 'Student' })
                                                }
                                                value['share_with'] = share_with
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            {value.updated_at}
                                                        </td>
                                                        <td>
                                                            {value.user_name}
                                                        </td>
                                                        <td>
                                                            {value.note}
                                                        </td>
                                                        <td>
                                                            {(value.teacher) ? <p className="m-0">Teacher</p> : null}
                                                            {(value.manager) ? <p className="m-0">Manager</p> : null}
                                                            {(value.student) ? <p className="m-0">Student</p> : null}
                                                        </td>
                                                        {/* <td className="btnTD text-center"> */}
                                                            {/* <button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent(value)}><i class="fas fa-pencil-alt"></i></button> */}
                                                            {/* <button className="btn Btn32 btn-info"><i class="far fa-eye"></i></button> */}

                                                            {/* <button className="btn Btn32 btn-danger" data-id={value.id} data-link="lesson" onClick={this.delete}><i class="fas fa-trash"></i></button> */}

                                                        {/* </td> */}
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
                
            </>
        )
    }
}
