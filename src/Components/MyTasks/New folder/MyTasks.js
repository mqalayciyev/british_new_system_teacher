import React from 'react';
import { NavLink, useLocation  } from "react-router-dom";
import Add from './Add';

class MyTasks extends React.Component {
	constructor(props) {
        super(props)
        this.state = { edit: 0 };
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
							<NavLink to="/TasksActual" className={(this.props.page == 'actual') ? 'btn btn-info active' : 'btn btn-info'}>Actual</NavLink>
							<NavLink to="/TasksFuture" className="btn btn-info mx-2">For Future</NavLink>
							<NavLink to="/TasksCompleted" className="btn btn-info">Completed</NavLink>
						</div>
						<div className="col-6" align='right'>
							<NavLink to="/SchedulingCalendar" className="btn btn-info mx-2">Calendar</NavLink>
							<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setState({edit: 0})} data-whatever="@getbootstrap">Add task</button>
						</div>
						<div class="col-12 mt-2">
							<div class="card">
								<div class="card-body p-2 ">
									<div class="row">
										<div class="col-xl-6 offset-xl-6">
											<div class="row form-group m-0">
												<div className="col-sm-6">
													<select className="form-control">
														<option>-- Status --</option>
														<option>Active</option>
														<option>Passive</option>
													</select>
												</div>
												<div className="col-sm-6">
													<select className="form-control">
														<option>-- Tarix --</option>
														<option>Artan</option>
														<option>Azalan</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="table-responsive bg-white m-0 p-3 rounded shadow">
								<table class="table table-bordered m-0">
									<thead>
										<tr>
											<th scope="col"></th>
											<th scope="col">Execution date</th>
											<th scope="col">Description</th>
											<th scope="col">Client</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row"><input type="checkbox" name="checkbox" /></th>
											<td>
												<time>
												3/22/2021
												</time>
												<p className="m-0 text-danger">
												Overdue
												</p>
											</td>
											<td>
											Lorem Ipsum is simply dummy text of the printing and typesetting 
											industry. egetgte brtghtrg4rg
											</td>
											<td>Lorem Ipsum</td>
											<td className="btnTD">
												<button className="btn Btn32 btn-success"><i class="far fa-thumbs-up"></i></button>
												<button className="btn Btn32 btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setState({edit: 15})}><i class="fas fa-pencil-alt"></i></button>
												<button className="btn Btn32 btn-info"><i class="fas fa-eye"></i></button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="card mt-3">
								<div class="card-body" >
									<div class="alert alert-hint m-0 p-0">
										No tasks found
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Add edit={this.state.edit} />
			</>
		);

	}
}

export default MyTasks;