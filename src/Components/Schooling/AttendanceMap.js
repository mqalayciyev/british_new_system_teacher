import React, { Component } from 'react'

export default class AttendanceMap extends Component {
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
                                            <th scope="col">Teacher</th>
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
                                            <td>
                                            Teacher1
                                            </td>
                                            <td>English</td>
                                            <td>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item bg-danger">01/04/21</li>
                                                    <li class="list-group-item bg-success">02/04/21</li>
                                                    <li class="list-group-item bg-primary">03/04/21</li>
                                                    <li class="list-group-item bg-success">04/04/21</li>
                                                    <li class="list-group-item bg-success">05/04/21</li>
                                                    <li class="list-group-item bg-success">06/04/21</li>
                                                    <li class="list-group-item bg-success">07/04/21</li>
                                                    <li class="list-group-item bg-success">08/04/21</li>
                                                    <li class="list-group-item bg-success">09/04/21</li>
                                                    <li class="list-group-item bg-success">10/04/21</li>
                                                    <li class="list-group-item bg-success">11/04/21</li>
                                                    <li class="list-group-item bg-success">12/04/21</li>
                                                </ul>
                                            </td>
                                        </tr>
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
