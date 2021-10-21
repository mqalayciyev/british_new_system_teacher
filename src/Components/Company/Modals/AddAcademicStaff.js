import React, { Component } from 'react'
export default class AddAcademicStaff extends Component {
    render() {
        return (
            <div class="modal fade bd-example-modal-lg" id="exampleModal" data-edit={this.props.edit} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{(this.props.edit) ? 'Edit' : 'Add'} academic staff</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group row">
                                    <div className="col-8">
                                        <select className="form-control w-100">
                                            <option>Teacher</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-12">
                                        <fieldset className="form-group border p-3">
                                            <legend className="w-auto px-2">Information for authorization</legend>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="row">
                                                        <label className="col-4 col-sm-6 col-form-label">
                                                            Email
                                                        </label>
                                                        <div className="col-8 col-sm-6">
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                <div className="row">
                                                        <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                                        Password
                                                        </label>
                                                        <div className="col-8 col-sm-6">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <input type="text" placeholder="First name" className="form-control" />
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="text" placeholder="Last name" className="form-control" />
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="text" placeholder="Address" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <label className="col-4 col-sm-6 col-form-label">
                                                    Main office:
                                                    </label>
                                                    <div className="col-8 col-sm-6">
                                                        <select className="form-control">
                                                            <option>Office 1</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                                    Mobile:
                                                    </label>
                                                    <div className="col-8 col-sm-6">
                                                        <input type="tel" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div className="col-12">
                                        <div className="row">
                                            <label className="col-4 col-sm-3 col-form-label">
                                                Note:
                                            </label>
                                            <div className="col-8 col-sm-9">
                                            <textarea className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
