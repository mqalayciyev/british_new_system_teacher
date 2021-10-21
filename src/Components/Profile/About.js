import React, { Component } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
import img from '../../img/profile.jpg';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import '../../CSS/style.css';
import ImageUpload from './ImageUpload';
import { SessionContext } from "../../Context/Session";
export default class About extends Component {
    static contextType = SessionContext;
    constructor(props){
        super(props);
        const teacher = localStorage.getItem('teacher')
        const user = JSON.parse(teacher)
        this.state = {
            status: ['Passive', 'Active', 'Left his job', 'On vacation', 'Was fired', 'Is engaged in', 'Graduated from training', 'Will continue',],
            img: user.user.user_info.image,
            show: false,
			changePassword: false,
            formData: {},
            delete: false,
        }
    }

    setImage = (img) => {
        this.setState({
            img: img
        })
    }


    date(value) {
        let date = value.split('-')
        return `${date[2]}/${date[1]}/${date[0]}`
    }

    onConfirm = async (link) => {

        const teacher = JSON.parse(localStorage.getItem('teacher'))
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${teacher.user.token}`;
                return config;
            },
            error => {
                return Promise.reject(error)
            }
        )

        let formData = new FormData();
        this.state.formData.old_password && formData.append("old_password", this.state.formData.old_password)
        this.state.formData.confirm_password && formData.append("confirm_password", this.state.formData.confirm_password)
        this.state.formData.new_password && formData.append("new_password", this.state.formData.new_password)

        formData.append("id", teacher.user.user_id)

        let response = await axios.post(`http://127.0.0.1:8000/api/teachers/teacher/${link}`, formData)

        console.log(response.data)

        if (response.data.status === 'success') {
            NotificationManager.success('Məlumatlar dəyişdirildi.', 'Success', 5000);
            if (response.data.user) {
                teacher['user']['user_info'] = response.data.user;
                localStorage.setItem('user-info', JSON.stringify(teacher))
                this.context.setSession(response.data.status, teacher)
                this.setState({ img: response.data.image, show: false, formData: {} })
            }
        }
        if (response.data.status === 'error') {
            let message = response.data.message;
            for (const [key, value] of Object.entries(message)) {
                NotificationManager.error(value, 'Error', 5000);
            }
            // this.setState({ formData: {} })
        }
    }
    onCancel = (st) => {
        this.setState({ [st]: false, formData: {} })
    }
    onDelete = async () => {
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

        let response = await axios.post(`http://127.0.0.1:8000/api/teachers/teacher/delete_image/${teacher.user.user_id}`)
        if(response.data.status === 'success'){
            NotificationManager.success('Məlumatlar dəyişdirildi.', 'Success', 5000);
            teacher['user']['user_info'] = response.data.user;
            localStorage.setItem('teacher', JSON.stringify(teacher))
            this.context.setSession(response.data.status, teacher)
            this.setState({img: null, delete: false, formData: {}})
        }
        if(response.data.status === 'error'){
            let message = response.data.message;
            for (const [key, value] of Object.entries(message)) {
                NotificationManager.error(value, 'Error', 5000);
            }
            this.setState({formData: {}})
        }
    }
    changeData(event) {

        let newFormData = this.state.formData;
        newFormData[event.target.name] = event.target.value
        this.setState({
            formData: newFormData
        })
    }
    render() {
        return (
            <>
                <NotificationContainer/>
            <div className="col-lg-3 float-left">
                <div className="row">
                    <div className="card col-12">
                        <div className="card-header">
                                <div className="row justify-content-center profile_image">
                                    <div className="rounded-circle actions">
                                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#imageUpload"><i className="fa fa-plus"></i></button>
                                        <button className="btn btn-danger ml-1" onClick={() => this.setState({ delete: true })} ><i className="fa fa-trash"></i></button>
                                    </div>

                                    <SweetAlert
                                        title={"Are you sure?"}
                                        placeholder={"You won't be able to revert this!"}
                                        type={`warning`}
                                        onConfirm={this.onDelete}
                                        onCancel={() => this.setState({ delete: false })}
                                        showCancel={`true`}
                                        show={this.state.delete}
                                        confirmBtnBsStyle="success"
                                        confirmBtnText="Yes, delete it!"
                                        cancelBtnBsStyle="danger"
                                        cancelBtnText='No, cancel!'
                                    />
                                    <img src={this.state.img ? this.state.img : img} style={{ width: '150px', height: '150px' }} className="rounded-circle" alt="user" />
                                </div>
                            </div>
                        <div className="card-body">
                            <div className="row">
                                <label className="col-12">Main info</label>
                            </div>
                            <div className="row">
                                <p className="col-12 m-0">Status</p>
                                <p className="col-12"><a href="javascript-void:(0)" className="Dashed">{(this.props.user.status !== '') ? this.state.status[this.props.user.status] : `[No]`}</a></p>
                            </div>
                            <div className="row">
                                <p className="col-12 m-0">Age</p>
                                <p className="col-12">{(this.props.user.date) ? this.date(this.props.user.date) : ''}</p>
                            </div>
                            <div className="row">
                                <p className="col-12 m-0">Office</p>
                                <p className="col-12">{this.props.office && this.props.office.name}</p>
                            </div>
                            <div className="row">
                                <p className="col-12 m-0">Email</p>
                                <p className="col-12">{this.props.user.email}</p>
                            </div>
                            <div className="row">
                                <p className="col-12 m-0">Mobile</p>
                                <p className="col-12">{this.props.user.mobile}</p>
                            </div>
                            <div className="row">
                                <p className="col-12 m-0">Phone</p>
                                <p className="col-12">{this.props.user.phone}</p>
                            </div>
                            <div className="row">
                                    <SweetAlert
                                        title={"Şifrənizi Dəyişin"}
                                        onConfirm={() => this.onConfirm('change_password')}
                                        onCancel={() => this.onCancel('changePassword')}
                                        showCancel={`true`}
                                        show={this.state.changePassword}
                                        confirmBtnBsStyle="success"
                                        confirmBtnText="Save"
                                        cancelBtnBsStyle="danger"
                                    >
                                        {() => (
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        type={'password'}
                                                        className="form-control"
                                                        name="old_password"
                                                        value={this.state.formData.old_password}
                                                        onChange={this.changeData.bind(this)}
                                                        placeholder="Köhnə şifrə"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type={'password'}
                                                        className="form-control"
                                                        name="new_password"
                                                        value={this.state.formData.new_password}
                                                        onChange={this.changeData.bind(this)}
                                                        placeholder="Yeni şifrə"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type={'password'}
                                                        className="form-control"
                                                        name="confirm_password"
                                                        value={this.state.formData.confirm_password}
                                                        onChange={this.changeData.bind(this)}
                                                        placeholder="Yeni şifrə (təkrar)"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </SweetAlert>
                                    <p className="col-12"><a href="#" onClick={(e) => { e.preventDefault(); this.setState({ changePassword: true }); }} className="Dashed">Change password</a></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImageUpload user={this.state.user} setImage={this.setImage} />
            </>
        )
    }
}
