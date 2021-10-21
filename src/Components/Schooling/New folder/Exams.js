import React, { Component } from 'react'
import  AddExam from './Modals/AddExam';
export default class Exams extends Component {
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
                            <h4>Exams</h4>
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
                                            <th scope="col">Exam date</th>
                                            <th scope="col">Office</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Teacher</th>
                                            <th scope="col">Student</th>
                                            <th scope="col">Test</th>
                                            <th scope="col">Result</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                            {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            Exam (Mon 3/29)
                                            </td>
                                            <td>
                                            Caspian
                                            </td>
                                            <td>Beginer</td>
                                            <td>Seviyye yoxlanisi</td>
                                            <td>Teacher1</td>
                                            <td>Student1</td>
                                            <td>Test1</td>
                                            <td>15</td>
                                            <td>Actual</td>
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
            <AddExam edit={this.state.edit} />
            </>
        )
    }
}
