import React, { Component } from 'react'
import AddOfficess from './Modals/AddOffices'
export default class Offices extends Component {
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
                            <h4>Offices</h4>
                        </div>
                        <div className="col-12 col-sm-6 clearfix">
                            <button type="button" class="btn btn-info  float-right" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setState({edit: 0})} data-whatever="@getbootstrap" >Add</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="table-responsive bg-white m-0 p-3 rounded shadow">
                                <table class="table table-bordered m-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Contacts</th>
                                            <th scope="col">Employees</th>
                                            <th scope="col">Classrooms</th>
                                            <th scope="col">Capacity</th>
                                            <th scope="col"></th>
                                            {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            Krasnye vorota
                                            </td>
                                            <td>
                                            Невский проспект, д. 5, тел.: 8910255565
                                            </td>
                                            <td>
                                            fpushkinskaya@mail.ru
                                            </td>
                                            <td>Smit D.</td>
                                            <td>1</td>
                                            <td>10</td>
                                            <td className="btnTD text-center">
                                                <button className="btn Btn32 btn-warning mx-1" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setState({edit: 1})}><i class="fas fa-pencil-alt"></i></button>
                                                <button className="btn Btn32 btn-info"><i class="fas fa-eye"></i></button>
                                                
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
            <AddOfficess edit={this.state.edit} />
            </>
        )
    }
}