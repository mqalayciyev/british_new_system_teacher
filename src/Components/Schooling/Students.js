import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AddStudent from './Modals/AddStudent'
import axios from 'axios';
export default class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
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
        let response = await axios.get(`http://127.0.0.1:8000/api/managers/students`)
        if (response.data.status === 'success') {
            console.log(response.data.students)
            this.setState({
                students: response.data.students
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
        if(value){
            edit = value.id
            data = value
        }
        
        let modal = <AddStudent edit={edit} data={data} removeComponent={this.removeComponent} load={this.load} />

        this.setState({
            modal: modal
        })
    }
    
    render() {
        const status = ['Resigned', 'Works', 'Intern', 'On Holiday']
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h4>Students</h4>
                            </div>
                            <div className="col-12 col-sm-6 clearfix">
                                <button type="button" class="btn btn-info  float-right" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent()}  data-whatever="@getbootstrap">Add</button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="table-responsive bg-white m-0 p-3 rounded shadow">
                                    <table class="table table-bordered m-0">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Full name</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Offices</th>
                                                <th scope="col">Age category</th>
                                                <th scope="col">Lesson</th>
                                                <th scope="col">Group</th>
                                                <th scope="col">Date / type of application</th>
                                                <th scope="col">Contacts</th>
                                                <th scope="col">Comment</th>
                                                <th scope="col">Status</th>
                                                <th scope="col"></th>
                                                {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.students.length > 0 ? this.state.students.map((value, index) => {
                                                const less = JSON.parse(value.lessons)
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <img className="rounded-circle" style={{ width: '100px', height: '100px' }} src="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg" alt='account' />
                                                        </td>
                                                        <td>
                                                            {value.user_name}
                                                        </td>
                                                        <td>
                                                        {value.date}
                                                        </td>
                                                        <td>
                                                            {value.office_name}
                                                        </td>
                                                        <td>
                                                            {value.age_cat_title}
                                                        </td>
                                                        
                                                        <td>
                                                        {
                                                            less.map((v, i) => {
                                                                return <p className="m-0">{v.label}</p>
                                                            })
                                                        }
                                                        </td>
                                                        <td>
                                                            {value.group_name}
                                                        </td>
                                                        <td>
                                                            {value.created_at}
                                                        </td>
                                                        <td>
                                                            <p className="m-0 p-0">{value.mobile}</p>
                                                            <p className="m-0 p-0">{value.phone}</p>
                                                            <p className="m-0 p-0">{value.email}</p>
                                                            <p className="m-0 p-0"><i>{value.address}</i></p>
                                                        </td>
                                                        <td>
                                                            {value.note}
                                                        </td>
                                                        <td>
                                                            {value.status}
                                                        </td>
                                                        <td className="btnTD text-center">
                                                            <Link to={`/MessagesUser/${value.id}`} className="btn Btn32 btn-success mx-1"><i class="fas fa-comment"></i></Link>
                                                            <button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent(value)}><i class="fas fa-pencil-alt"></i></button>
                                                            {/* <button className="btn Btn32 btn-info"><i class="far fa-eye"></i></button> */}

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
