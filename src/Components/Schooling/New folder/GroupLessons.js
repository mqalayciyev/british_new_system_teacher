import React, { Component } from 'react'
import AddGroupLessons from './Modals/AddGroupLessons'
export default class GroupLessons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: 0,
        }
      }
    render() {
        return (
            <>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h4>Group lessons</h4>
                        </div>
                        <div className="col-12 col-sm-6 clearfix">
                            <button type="button" class="btn btn-info  float-right" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setState({edit: 0})} data-whatever="@getbootstrap">Add</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="table-responsive bg-white m-0 p-3 rounded shadow">
                                <table class="table table-bordered m-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Group</th>
                                            <th scope="col">Students</th>
                                            
                                            <th scope="col">Office</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Academ. hours</th>
                                            <th scope="col">Schedule</th>
                                            <th scope="col">Teachers</th>
                                            <th scope="col">Hourly Rate</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                            {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            Summer
                                            </td>
                                            <td>
                                            Student1
                                            Student2
                                            </td>
                                            
                                            <td>
                                            Caspian
                                            </td>
                                            <td>Beginer</td>
                                            <td>120hours</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>15azn</td>
                                            <td>Active</td>
                                            <td className="btnTD text-center">
                                                <p className="m-0 p-0"><button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setState({edit: 1})}><i className="fas fa-pencil-alt"></i></button></p>
                                                <p className="m-0 p-0"><button className="btn Btn32 btn-info"><i className="far fa-eye"></i></button></p>
                                            </td>
                                            {/* <th scope="row" className="text-center"><input type="checkbox" name="checkbox" /></th> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddGroupLessons edit={this.state.edit} />
            </>
        )
    }
}
