import React, { Component } from 'react'
import Add from './Add';
export default class Leads extends Component {
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
                            <div className="col-12 col-sm-6">
                                <h4>Leads</h4>
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
                                                <th scope="col">Lead Name</th>
                                                <th scope="col">Office</th>
                                                <th scope="col">Contacts</th>
                                                <th scope="col">Lead source</th>
                                                <th scope="col">Created time</th>
                                                <th scope="col">Lead owner</th>
                                                <th scope="col">Lead status</th>
                                                <th scope="col"></th>
                                                {/* <th scope="col"><button className="btn Btn32 text-danger"><i class="fas fa-trash"></i></button></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Mehemmed Qalayciyev
                                                </td>
                                                <td>
                                                    Bas Ofis
                                                </td>
                                                <td>
                                                    +994514598208
                                                </td>
                                                <td>
                                                    Ingilis dili testi
                                                </td>
                                                <td>
                                                    <time>3/22/2021</time>
                                                </td>
                                                <td>Ramal Eliyev</td>
                                                <td>Maraqlanir</td>
                                                <td className="btnTD">
                                                    <button className="btn Btn32 btn-success"><i class="far fa-check-square"></i></button>
                                                    <button className="btn Btn32 btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => this.setState({edit: 1})}><i class="fas fa-pencil-alt"></i></button>
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
                <Add edit={this.state.edit} />
            </>
        )
    }
}
