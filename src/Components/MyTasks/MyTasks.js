import React from 'react';
import { NavLink  } from "react-router-dom";
import Add from './Add';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Datatables from '../Datatables';


class MyTasks extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            tasks: [],
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
    changeStatus = async (id) => {
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
        let response = await axios.post(`${process.env.REACT_APP_API_URL}/teachers/tasks/status/${id}`)
        // console.log(response.data)
        if (response.data.status === 'success') {
            NotificationManager.success('Task statusu deyisdirildi', 'Success', 5000);
            this.load()
        }
        else{
            NotificationManager.error('Xeta bas verdi', 'Error', 5000);
        }
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
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/teachers/tasks`)
        // console.log(response.data)
        if (response.data.status === 'success') {
            this.setState({
                tasks: response.data.tasks,
                display: false
            })
        }
    }
	delete = async value => {
        let student = JSON.parse(localStorage.getItem('student'))
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${student.user.token}`;
                return config;
            },
            error => {
                return Promise.reject(error)
            }
        )
        let response = await axios.delete(`${process.env.REACT_APP_API_URL}/students/tasks/${value.id}`)
        console.log(response.data)
        if (response.data.status === 'success') {
            NotificationManager.warning('Task silindi', 'Warning', 5000);
            this.load()
        }
    }
	buttons = (row) => {
        return (
            <div style={{ minWidth: '250px' }}>
                <button className="btn Btn32 btn-success" onClick={() => this.changeStatus(row.id)}><i className="far fa-thumbs-up"></i></button>
				<button className="btn Btn32 btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent(row.value)}><i className="fas fa-pencil-alt"></i></button>
                <button className="btn Btn32 btn-danger" onClick={() => this.delete(row.id)}><i className="fas fa-trash"></i></button>
            </div>
        )
    }
    date = (value) => {
        console.log(value)
        return(
            <>
                Start: 
                <p className="text-success">{value.start_date}, {value.start_time}</p>
                End: 
                <p className="text-danger">{value.end_date}, {value.end_time}</p>
            </>
        )
    }
	render() {
        const columns = [
            {
                name: 'Execution date',
                selector: row => this.date(row),
            },
            {
                name: 'Description',
                selector: row => row.note,
            },
            {
                name: 'Client',
                sortable: true,
                selector: row => row.client,
            },
            {
                name: 'Mobile',
                selector: row => row.mobile,
            },
            {
                name: 'Email',
                sortable: true,
                selector: row => row.email,
            },
            {
                name: 'Purpose',
                sortable: true,
                selector: row => row.purpose,
            },
            {
                name: 'Priority',
                sortable: true,
                selector: row => row.priority,
            },
            {
                name: 'Created at',
                sortable: true,
                selector: row => row.created_at,
            },
            {
                name: '',
                selector: row => this.buttons(row),
            },
        ];
        const data = []
        const priority = ['Low', 'Middle', 'High'];
        if(this.state.tasks.length > 0)
        {
            this.state.tasks.map((value, index) => {
                data.push({ 
                    id: value.id, 
                    value: value, 
                    note: value.note, 
                    start_date: value.start_date, 
                    start_time: value.start_time, 
                    end_date: value.end_date, 
                    end_time: value.start_time, 
                    client: value.client, 
                    mobile:  value.mobile,
                    email:  value.email,
                    purpose: value.purpose, 
                    priority: priority[value.priority], 
                    created_at: value.created_at,
                })
            })
        }
		
		return (
			<>
            <NotificationContainer />
			<div className="row">
				<div className="col-12">
					<div className="row">
						<div className="col-12">
							<h4>My Tasks</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<NavLink to="/TasksActual" className={(this.props.page === 'actual') ? 'btn btn-info active' : 'btn btn-info'}>Actual</NavLink>
							<NavLink to="/TasksCompleted" className="btn btn-info ml-2">Completed</NavLink>
						</div>
						<div className="col-6" align='right'>
							{/* <NavLink to="/SchedulingCalendar" className="btn btn-info mx-2">Calendar</NavLink> */}
							<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent()}>Add task</button>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-12">
                        
							<div className="bg-white m-0 p-3 rounded shadow">
                            <Datatables columns={columns} data={data} pending={this.state.display} filter={`note`}/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{
                    this.state.modal
                }
			</>
		);

	}
}

export default MyTasks;