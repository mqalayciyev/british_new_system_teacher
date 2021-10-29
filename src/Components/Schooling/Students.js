import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import img from '../../img/profile.jpg';

export default class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            data: {},
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
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/teachers/students`)
        console.log(response.data)
        if (response.data.status === 'success') {
            
            this.setState({
                students: response.data.students,
                display: false
            })
        }
        

    }
    
    render() {
        const status = ['Resigned', 'Works', 'Intern', 'On Holiday']
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <h4>Students</h4>
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
                                                <th scope="col"></th>
                                                <th scope="col">Full name</th>
                                                <th scope="col">Offices</th>
                                                <th scope="col">Age category</th>
                                                <th scope="col">Lesson</th>
                                                <th scope="col">Type</th>
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
                                                            <img className="rounded-circle" style={{ width: '100px', height: '100px' }} src={value.image ? process.env.REACT_APP_URL + '/' + value.image : img} alt='account' />
                                                        </td>
                                                        <td>
                                                            {value.user_name}
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
                                                            {
                                                                value.group ? <p>Group</p> : ''
                                                            }
                                                            {
                                                                value.private ? <p>Private</p> : ''
                                                            }
                                                            {
                                                                value.demo ? <p>Demo</p> : ''
                                                            }
                                                        </td>
                                                        <td>
                                                            {value.status}
                                                        </td>
                                                        <td className="btnTD text-center">
                                                            <Link to={`/Messages/Chat/${value.id}`} className="btn Btn32 btn-success mx-1"><i class="fas fa-comment"></i></Link>
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
                
            </>
        )
    }
}
