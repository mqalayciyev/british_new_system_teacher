import React, { Component } from 'react'
import AddUserContacts from './AddUserContacts';

export default class AddCorparate extends Component {
      
      constructor(props) {
        super(props)
        this.state = {
            numChildren: 0,
            children: [],
        }
      }
    
      onChange = (content) => {
        this.setState({
          text: content
        })
      }

      addChild = () => {
        this.setState({
          numChildren: this.state.numChildren + 1
        });

        const child = [];

        for (var i = 0; i <= this.state.numChildren; i++) {
            child.push(<AddUserContacts key={i} number={i} removeChild={this.removeChild}/>);
        };
        this.setState({children: child})
      }
      removeChild = (number) => {
        const child = this.state.children
        child.splice(number, 1);
        this.setState({
            numChildren: child.length
        });
        this.setState({children: child})
      }
      
    render() {
        return (
            <div class="modal fade bd-example-modal-lg" id="exampleModal" data-edit={this.props.edit} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{(this.props.edit) ? 'Edit' : 'Create new'} corparate clienst</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <label className="col-4 col-sm-6 col-form-label">
                                                        Title *:
                                                </label>
                                                    <div className="col-8 col-sm-6">
                                                        <input type="tel" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                                        Address:
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
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <label className="col-4 col-sm-6 col-form-label">
                                                        Mobile:
                                                </label>
                                                    <div className="col-8 col-sm-6">
                                                        <input type="tel" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                                        Phone:
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
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <label className="col-4 col-sm-6 col-form-label">
                                                        Email:
                                                </label>
                                                    <div className="col-8 col-sm-6">
                                                        <input type="tel" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <label className="col-4 col-sm-6 col-form-label text-sm-center">
                                                        Website:
                                                </label>
                                                    <div className="col-8 col-sm-6">
                                                        <input type="url" placeholder="http://" className="form-control" />
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
                                <div class="form-group row">
                                    <div className="col-6 offset-6">
                                        <a href="javascript-void:0" onClick={this.addChild}>Add user's contacts</a>
                                    </div>
                                </div>

                                <div id="AddUser">
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
