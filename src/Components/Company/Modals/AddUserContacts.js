import React, { Component } from 'react'

export default class AddUserContacts extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div class="form-group row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <label className="col-4 col-sm-6 col-form-label">
                                            Last name:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                            First name:
                                                </label>
                                        <div className="col-8 col-sm-6">
                                            <input type="text" placeholder="http://" className="form-control" />
                                        </div>
                                    </div>
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
                                            Phone:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <input type="tel" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                            Mobile:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <input type="tel" placeholder="http://" className="form-control" />
                                        </div>
                                    </div>
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
                                            Email:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                            Comment:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className="col-6 offset-6">
                            <a href="javascript-void:0" onClick={this.props.removeChild.bind(this, this.props.number)}>Remove contact person</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
