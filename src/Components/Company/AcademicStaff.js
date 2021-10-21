import React, { Component } from 'react'
import AddAcademicStaff from './Modals/AddAcademicStaff'
export default class AcademicStaff extends Component {
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
                            <h4>Academic staff</h4>
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
                                            <th scope="col"></th>
                                            <th scope="col">Full name</th>
                                            <th scope="col">Languages</th>
                                            <th scope="col">Levels</th>
                                            {/* <th scope="col">Age categories</th> */}
                                            <th scope="col">Offices</th>
                                            <th scope="col">Rating</th>
                                            <th scope="col">Description</th>
                                            <th scope="col"></th>
                                            {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            <img className="rounded-circle" style={{width: '100px', height: '100px'}} src="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg" alt='account' />
                                            </td>
                                            <td>
                                            Alexander Pierce
                                            </td>
                                            <td>
                                            English
                                            </td>
                                            <td>
                                            Beginner Elementary Intermediate Upper-intermediate Pre-intermediate Advanced
                                            </td>
                                            {/* <td>Age categories</td> */}
                                            <td>Caspian</td>
                                            <td>100</td>
                                            <td>Comment</td>
                                            <td className="btnTD text-center">
                                               
                                                <button className="btn Btn32 btn-success mx-1"><i class="fas fa-comment"></i></button>
                                                <button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setState({edit: 1})}><i class="fas fa-pencil-alt"></i></button>
                                                <button className="btn Btn32 btn-info"><i class="far fa-eye"></i></button>
                                                
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
            <AddAcademicStaff edit={this.state.edit} />
            </>
        )
    }
}
