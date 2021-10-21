import React, { Component } from 'react'

export default class Questions extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 border p-3">
                    <div class="form-group row">
                        <div className="col-12">
                            <div className="row">
                                <label className="col-4 col-sm-3 col-form-label">
                                    Question:
                                </label>
                                <div className="col-8 col-sm-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className="col-12 bg-success p-3">
                            <div className="row">
                                <label className="col-4 col-sm-3 col-form-label">
                                    Correct Answer:
                                </label>
                                <div className="col-8 col-sm-7">
                                    <textarea className="form-control"></textarea>
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
                                            Answer1:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                        Answer2:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <textarea className="form-control"></textarea>
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
                                            Answer3:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                        Answer4:
                                                            </label>
                                        <div className="col-8 col-sm-6">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div className="col-6 offset-6">
                            <a href="javascript-void:0" onClick={this.props.removeChild.bind(this, this.props.number)}>Remove question</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
