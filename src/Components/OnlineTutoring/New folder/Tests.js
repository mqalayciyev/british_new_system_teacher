import React, { Component } from 'react'
import UploadTest from './Modals/UploadTest'
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
                            <h4>Tests</h4>
                        </div>
                        <div className="col-12 col-sm-6 clearfix">
                            <button type="button" class="btn btn-info  float-right" data-toggle="modal" data-target="#uploadTestModal" onClick={() => this.setState({edit: 0})} data-whatever="@getbootstrap">Add</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="table-responsive bg-white m-0 p-3 rounded shadow">
                                <table class="table table-bordered m-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Language</th>
                                            <th scope="col">Office</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Added by</th>
                                            <th scope="col">Age Category</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Questions</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                            {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            File1
                                            </td>
                                            <td>
                                            English
                                            </td>
                                            <td>Caspian</td>
                                            <td>Beginer</td>
                                            <td>Staff1</td>
                                            <td>Youngs</td>
                                            <td>Comment</td>
                                            <td>15</td>
                                            <td>Actual</td>
                                            <td className="btnTD text-center">
                                                <p className="m-0 p-0"><button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#uploadTestModal" onClick={() => this.setState({edit: 1})}><i className="fas fa-pencil-alt"></i></button></p>
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
            <UploadTest edit={this.state.edit} />
            </>
        )
    }
}
