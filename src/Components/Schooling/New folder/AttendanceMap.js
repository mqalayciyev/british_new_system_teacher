import React, { Component } from 'react'
import Attendance from './Modals/Attendance'

export default class AttendanceMap extends Component {
    constructor(props) {
        super(props)
        this.state = { id: 0};
    }
    render() {
        return (
            <>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <h4>Exams</h4>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="table-responsive bg-white m-0 p-3 rounded shadow">
                                <table class="table table-bordered m-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Student</th>
                                            <th scope="col">Office</th>
                                            <th scope="col">Lesson</th>
                                            <th scope="col">Attendance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            Student1
                                            </td>
                                            <td>
                                            Caspian
                                            </td>
                                            <td>English</td>
                                            <td>
                                                <button type="button" onClick={() => this.setState({ id: 1 })} class="btn btn-warning" data-toggle="modal" data-target="#exampleModal"> <i class="far fa-calendar-alt"></i> </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Attendance id={this.state.id} />
            </>
        )
    }
}
