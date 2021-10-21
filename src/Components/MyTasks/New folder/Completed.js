import React from 'react';
import { NavLink  } from "react-router-dom";
import axios from 'axios';


class Completed extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            tasks: [],
        }
    }
    componentDidMount = () => {
        this.load()
    }
    load = async name => {
        let userInfo = JSON.parse(localStorage.getItem('user-info'))
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${userInfo.user.token}`;
                return config;
            },
            error => {
                return Promise.reject(error)
            }
        )
        let response = await axios.post(`http://127.0.0.1:8000/api/managers/tasks/completed`)
        console.log(response.data)
        if (response.data.status === 'success') {
            this.setState({
                tasks: response.data.tasks
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
							{/* <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent()}>Add task</button> */}
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-12">
							<div className="table-responsive bg-white m-0 p-3 rounded shadow">
								<table class="table table-bordered m-0">
									<thead>
										<tr>
											<th scope="col">Execution date</th>
											<th scope="col">Description</th>
											<th scope="col">Client</th>
											<th scope="col">Client Contact</th>
											<th scope="col">Purpose</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
									{this.state.tasks.length > 0 ? this.state.tasks.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
															Start: 
                                                            <p className="text-success">{value.start_date}, {value.start_time}</p>
															End: 
                                                            <p className="text-danger">{value.end_date}, {value.end_time}</p>
                                                        </td>
                                                        <td>
                                                            {value.note}
                                                        </td>
                                                        <td>
                                                            {value.client}
                                                        </td>
                                                        <td>
                                                            <p>{value.mobile}</p>
                                                            <p>{value.email}</p>
                                                        </td>
                                                        <td>
                                                        {value.purpose}
                                                        </td>
                                                        <td className="btnTD text-center">
															{/* <button className="btn Btn32 btn-success"><i class="far fa-thumbs-up"></i></button> */}
															{/* <button className="btn Btn32 btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => this.addComponent(value)}><i class="fas fa-pencil-alt"></i></button> */}
															{/* <button className="btn Btn32 btn-info"><i class="fas fa-eye"></i></button> */}
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
			</>
		);

	}
}

export default Completed;