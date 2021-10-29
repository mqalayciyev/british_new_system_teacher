import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
export default class GroupLessons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groups: [],
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
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/teachers/group`)
        if (response.data.status === 'success') {
            this.setState({
                groups: response.data.groups,
                display: false
            })
        }
        

    }
    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    render() {
        let teacher = JSON.parse(localStorage.getItem('teacher'))
        const status = ['', 'Actual', 'Complete']
        return (
            <>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h4>Group lessons</h4>
                        </div>
                        {/* <div className="col-12 col-sm-6 clearfix">
                            <button type="button" className="btn btn-info  float-right" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent()} data-whatever="@getbootstrap">Add</button>
                        </div> */}
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
                                            <th scope="col">Group</th>
                                            <th scope="col">Students</th>
                                            <th scope="col">Lesson</th>
                                            <th scope="col">Office</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Age Category</th>
                                            <th scope="col">Hours</th>
                                            <th scope="col">Schedule</th>
                                            <th scope="col">Teachers</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                            {/* <th scope="col"><button className="btn Btn32 text-danger"><i className="fas fa-trash"></i></button></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.groups.length > 0 ? this.state.groups.map((value, index) => {
                                                const students = JSON.parse(value.students)
                                                const hours_price = JSON.parse(value.hours_price)
                                                const study_days = JSON.parse(value.study_days)
                                                const total_price = value.hours*60*hours_price[0].price / hours_price[0].minutes
                                                let days = []
                                                for (const [keys, value] of Object.entries(study_days)) {
                                                    if(keys !== 'id' && keys !== 'company' && keys !== 'group' && value === 1){
                                                        days.push(<p className="m-0">{this.capitalize(keys)}</p>)
                                                    }
                                                }
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                        {value.group_name}    
                                                        </td>
                                                        <td>
                                                        {
                                                            students.map((v, i) => {
                                                                return <p className="m-0"><Link to={`/Users?user=${v.id}`}>{v.name}</Link> </p>
                                                                
                                                            })
                                                        }
                                                        </td>
                                                        <td>
                                                        {value.lesson_title}
                                                        </td>
                                                        <td>
                                                            {value.office_name}
                                                        </td>
                                                        <td>
                                                            {value.level_title}
                                                        </td>
                                                        
                                                        <td>
                                                            {value.age_category_title}
                                                        </td>
                                                        <td>
                                                            {value.hours}
                                                        </td>
                                                        <td>
                                                        {days}
                                                        </td>
                                                        <td>
                                                        <p className="m-0"><Link to={`/Users?user=${value.teacher}`}>{value.teacher_name}</Link> </p>
                                                        </td>
                                                        <td>
                                                            <p>({hours_price[0].minutes}min - {hours_price[0].price})</p>
                                                            <p>(Total: {total_price + teacher.company.currency})</p>
                                                        </td>
                                                        <td>
                                                            {status[value.status]}
                                                        </td>
                                                        <td className="btnTD text-center">
                                                            {/* <Link to={`/MessagesUser/${value.id}`} className="btn Btn32 btn-success mx-1"><i className="fas fa-comment"></i></Link> */}
                                                            {/* <button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent(value)}><i className="fas fa-pencil-alt"></i></button> */}
                                                            <button className="btn Btn32 btn-info"><i className="far fa-eye"></i></button>
                                                            {/* <button className="btn Btn32 btn-success" data-toggle="modal" data-target="#addModal" onClick={() => this.addModal(value.id)}><i className="fas fa-user-plus"></i></button> */}

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
            </>
        )
    }
}
