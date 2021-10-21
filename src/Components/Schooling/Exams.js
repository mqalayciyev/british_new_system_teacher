import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AddExam from './Modals/AddExam';
import axios from 'axios';

export default class Exams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exam: [],
            data: {}
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
        let response = await axios.get(`http://127.0.0.1:8000/api/teachers/exam`)
        if (response.data.status === 'success') {
            console.log(response.data)
            this.setState({
                exam: response.data.exam
            })
        }


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

        let modal = <AddExam edit={edit} data={data} removeComponent={this.removeComponent} load={this.load} />

        this.setState({
            modal: modal
        })
    }
    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h4>Exams</h4>
                            </div>
                            <div className="col-12 col-sm-6 clearfix">
                                <button type="button" class="btn btn-info  float-right" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent()} data-whatever="@getbootstrap">Add</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="table-responsive bg-white m-0 p-3 rounded shadow">
                                    <table class="table table-bordered m-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Added by</th>
                                                <th scope="col">Level</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Test</th>
                                                <th scope="col">Note</th>
                                                <th scope="col">Status</th>
                                                <th scope="col"></th>
                                                {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.exam.length > 0 ? this.state.exam.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            {value.name}
                                                        </td>
                                                        <td>
                                                            {<p className="m-0"><Link to={`/Users?user=${value.added_by}`}>{value.user_name}</Link> </p>}
                                                        </td>

                                                        <td>
                                                            {value.level_title}
                                                        </td>

                                                        <td>
                                                            {value.type}
                                                        </td>
                                                        <td>
                                                            {value.test_name}
                                                        </td>
                                                        <td>
                                                            {value.note}
                                                        </td>
                                                        <td>
                                                            {value.status}
                                                        </td>
                                                        <td className="btnTD text-center">
                                                            <button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent(value)}><i class="fas fa-pencil-alt"></i></button>
                                                            {/* <button className="btn Btn32 btn-info"><i class="far fa-eye"></i></button> */}
                                                            <button className="btn Btn32 btn-success"><i class="fas fa-clipboard-list"></i></button>
                                                            {/* <button className="btn Btn32 btn-danger" data-id={value.id} data-link="lesson" onClick={this.delete}><i class="fas fa-trash"></i></button> */}

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
            </>
        )
    }
}
