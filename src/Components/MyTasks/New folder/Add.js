import React, { Component } from 'react'


export default class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            communication: false,
        }
    }
    render() {
        return (
            <div class="modal fade bd-example-modal-lg" id="exampleModal" data-edit={this.props.edit} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{(this.props.edit !== 0) ? 'Edit' : 'Add'} task</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <label className="col-4 col-sm-6 col-form-label">
                                                Date:
                                        </label>
                                            <div className="col-8 col-sm-6">
                                                <input type="date" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <label className="col-4 col-sm-6 pl-sm-4 col-form-label">
                                                Priority:
                                        </label>
                                            <div className="col-8 col-sm-6">
                                                <select className="form-control">
                                                    <option>-- Priority --</option>
                                                    <option>Low</option>
                                                    <option>Middle</option>
                                                    <option>High</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 mt-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row">
                                                    <label className="col-4 col-form-label">
                                                        Priority:
                                                </label>
                                                    <div className="col-7">
                                                        <select className="form-control">
                                                            <option>-- Priority --</option>
                                                            <option>Low</option>
                                                            <option>Middle</option>
                                                            <option>High</option>
                                                        </select>
                                                    </div>
                                                    <div class="col p-0">
                                                        <div className="row h-100 w-100 align-items-center justify-content-around">
                                                            <span className="text-danger" style={{ cursor: 'pointer' }}><i class="fas fa-times"></i></span>
                                                            <span className="text-success" style={{ cursor: 'pointer' }}><i class="fas fa-plus"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="offset-4 col-8 offset-sm-0 col-sm-3 mt-3">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="checkForAll" class="custom-control-input" />
                                            <label class="custom-control-label" for="checkForAll">For all</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="offset-4 offset-sm-3 col-8 FormField">
                                                <a href="javascript-void:0" onClick={() => this.setState({ communication: !this.state.communication })}>
                                                    <span style={{ fontSize: '1em' }} className="mr-1"><i class={(this.state.communication) ? 'fas fa-caret-down' : 'fas fa-caret-right'}></i></span>
                                                Add communication
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={(this.state.communication) ? { display: 'block' } : { display: 'none' }}>
                                    <div className="col-12">
                                        <div className="row form-group">
                                            <div className="col-12">
                                                <div className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Client:
                                                </label>
                                                    <div className="col-sm-9 mt-3 mt-sm-0">
                                                        <input type="text" className="form-control" value="Mehemmed Qalayciyev" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-12">
                                                <div className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Direction:
                                                </label>
                                                    <div className="col-sm-9 mt-3 mt-sm-0">
                                                        <select className="form-control">
                                                            <option>Outgoing</option>
                                                            <option>Incoming</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-12">
                                                <div className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Method:
                                                </label>
                                                    <div className="col-sm-9 mt-3 mt-sm-0">
                                                        <select className="form-control">
                                                            <option>-- Method --</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-12">
                                                <div className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Purpose:
                                                </label>
                                                    <div className="col-sm-9 mt-3 mt-sm-0">
                                                        <select className="form-control">
                                                            <option>-- Purpose --</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div class="form-group row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="offset-4 offset-sm-3 col-8 FormField">
                                            <a href="javascript-void:0">
                                                <span style={{fontSize: '1em'}} className="mr-1"><i class="fas fa-caret-right"></i></span>
                                                Set execution time
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                <div className="row form-group mt-2">
                                    <div className="col-12">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Task template:
                                        </label>
                                            <div className="col-sm-9 mt-3 mt-sm-0">
                                                <select className="form-control">
                                                    <option>-- Option --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row form-group mt-2">
                                    <div className="col-12">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Description *:
                                        </label>
                                            <div className="col-sm-9 mt-3 mt-sm-0">
                                                <textarea className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" onClick={() => console.log(this.state.text)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
