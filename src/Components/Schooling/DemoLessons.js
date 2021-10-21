import React, { Component } from 'react'
import AddDemoLessons from './Modals/AddDemoLessons'
import { Link } from "react-router-dom";
import axios from 'axios';

export default class DemoLessons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            demo: [],
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
        let response = await axios.get(`http://127.0.0.1:8000/api/teachers/demo`)
        if (response.data.status === 'success') {
            console.log(response.data)
            this.setState({
                demo: response.data.demo
            })
        }


    }
    // removeComponent = () => {
    //     this.setState({
    //         modal: []
    //     })
    // }
    // addComponent = (value) => {
    //     let edit = 0
    //     let data = {}
    //     if (value) {
    //         edit = value.id
    //         data = value
    //     }

    //     let modal = <AddDemoLessons edit={edit} data={data} removeComponent={this.removeComponent} load={this.load} />

    //     this.setState({
    //         modal: modal
    //     })
    // }
    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    dateReplace = (time) => {
        let date = new Date(time)
        date = date.toString()
        date = date.split('GMT')[0]
        return date
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h4>Demo lessons</h4>
                            </div>
                            {/* <div className="col-12 col-sm-6 clearfix">
                                <button type="button" class="btn btn-info  float-right" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent()} data-whatever="@getbootstrap">Add</button>
                            </div> */}
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="table-responsive bg-white m-0 p-3 rounded shadow">
                                    <table class="table table-bordered m-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Student</th>
                                                <th scope="col">Office</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Teacher</th>
                                                <th scope="col">Lesson</th>
                                                <th scope="col"></th>
                                                {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.demo.length > 0 ? this.state.demo.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            {<p className="m-0"><Link to={`/Users?user=${value.student}`}>{value.student_name}</Link> </p>}
                                                        </td>
                                                        <td>
                                                            {value.office_name}
                                                        </td>
                                                        <td>
                                                            {this.dateReplace(value.date)}
                                                        </td>

                                                        <td>
                                                            <p className="m-0"><Link to={`/Users?user=${value.teacher}`}>{value.teacher_name}</Link> </p>
                                                        </td>
                                                        <td>
                                                            {value.lesson_name}
                                                        </td>
                                                        <td className="btnTD text-center">
                                                            {/* <button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent(value)}><i class="fas fa-pencil-alt"></i></button> */}
                                                            <button className="btn Btn32 btn-info"><i class="far fa-eye"></i></button>
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
