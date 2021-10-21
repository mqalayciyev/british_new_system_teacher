import React, { Component } from 'react'

export default class AddExam extends Component {
    render() {
        return (
            <div class="modal fade bd-example-modal-lg" id="exampleModal" data-edit={this.props.edit}  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{(this.props.edit) ? 'Edit' : 'Add new '} exam</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row">
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label">
                                                Office:
                                            </label>
                                            <div className="col-sm-8">
                                                <select className="form-control">
                                                    <option>-- Office --</option>\
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label text-sm-center">
                                                Exam date:
                                            </label>
                                            <div className="col-sm-8">
                                                <input className="form-control" type="date" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label">
                                                Type:
                                            </label>
                                            <div className="col-sm-8">
                                                <select className="form-control">
                                                    <option>-- Type --</option>\
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label text-sm-center">
                                                Level:
                                            </label>
                                            <div className="col-sm-8">
                                                <select className="form-control">
                                                    <option value="">-- Level --</option>
                                                    <option value="2">All</option>
                                                    <option value="2">Beginner</option>
                                                    <option value="1">Elementary</option>
                                                    <option value="4">Intermediate</option>
                                                    <option value="5">Upper-intermediate</option>
                                                    <option value="3">Pre-intermediate</option>
                                                    <option value="6">Advanced</option>
                                                    <option value="9">Base</option>
                                                    <option value="27">Elementary</option>
                                                    <option value="16">Middle</option>
                                                    <option value="15">Advanced</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label">
                                            Teacher:
                                            </label>
                                            <div className="col-sm-8">
                                                <input list="students" className="form-control" />
                                                <datalist id="students">
                                                    <option>Teacher1</option>
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label text-sm-center">
                                            Student:
                                            </label>
                                            <div className="col-sm-8">
                                                <input list="students" className="form-control" />
                                                <datalist id="students">
                                                    <option>Student1</option>
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label">
                                            Test:
                                            </label>
                                            <div className="col-sm-8">
                                                <input list="students" className="form-control" />
                                                <datalist id="students">
                                                    <option>Test1</option>
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label text-sm-center">
                                            Result:
                                            </label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" />
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
