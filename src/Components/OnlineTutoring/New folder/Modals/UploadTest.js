import React, { Component } from 'react'
import Questions from './Questions';
export default class AddDemoLessons extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numChildren: 0,
            children: [],
        }
    }


    addChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });

        const child = [];

        for (var i = 0; i <= this.state.numChildren; i++) {
            child.push(<Questions key={i} number={i} removeChild={this.removeChild} />);
        };
        this.setState({ children: child })
    }
    removeChild = (number) => {
        const child = this.state.children
        child.splice(number, 1);
        this.setState({
            numChildren: child.length
        });
        this.setState({ children: child })
    }
    render() {
        return (
            <div class="modal fade bd-example-modal-lg" id="uploadTestModal" data-edit={this.props.edit} tabindex="-1" role="dialog" aria-labelledby="uploadTestModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="uploadTestModalLabel">{(this.props.edit) ? 'Edit' : 'Upload'} test</h5>
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
                                                Title *:
                                            </label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" />
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
                                    <div className="col-sm-6">
                                        <div className="row form-group ">
                                            <label className="col-sm-4 col-form-label">
                                                Exam:
                                            </label>
                                            <div className="col-sm-8">
                                                <select className="form-control">
                                                    <option value="">-- Exam --</option>
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
                                <div class="form-group row">
                                    <div className="col-6 offset-6">
                                        <a href="javascript-void:0" onClick={this.addChild}>Add question</a>
                                    </div>
                                </div>

                                <div id="AddQuestion">
                                    {this.state.children}
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
