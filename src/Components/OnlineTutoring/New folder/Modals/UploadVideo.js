import React, { Component } from 'react'
export default class AddDemoLessons extends Component {
    render() {
        return (
            <div class="modal fade bd-example-modal-lg" id="uploadVideoModal" data-edit={this.props.edit} tabindex="-1" role="dialog" aria-labelledby="uploadVideoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="uploadVideoModalLabel">Upload video</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row form-group">
                                    <div className="col-12">
                                        <input type="file" className="btn btn-default border-0 col-12" />
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div className="col-12">
                                        <div className="row form-group ">
                                            <label className="col-sm-3 col-form-label">
                                                Title *:
                                            </label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label">
                                            Language:
                                            </label>
                                            <div className="col-sm-8">
                                                <select className="form-control">
                                                    <option value="">-- Language --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label text-sm-center">
                                            Age category:
                                            </label>
                                            <div className="col-sm-8">
                                                <select className="form-control">
                                                    <option value="">-- Age --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label">
                                            Office:
                                            </label>
                                            <div className="col-sm-8">
                                                <select className="form-control">
                                                    <option value="">-- Office --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label text-sm-center">
                                            Assignee:
                                            </label>
                                            <div className="col-sm-8">
                                                <select className="form-control">
                                                    <option value="">-- Assignee --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-12">
                                        <div className="row form-group ">
                                            <label className="col-sm-3 col-form-label">
                                            Description:
                                            </label>
                                            <div className="col-sm-9">
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
