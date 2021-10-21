import React, { Component } from 'react'
export default class AddAnnouncements extends Component {
    
      onChange = (content) => {
        this.setState({
          text: content
        })
      }
    render() {
        return (
            <div class="modal fade bd-example-modal-lg" id="exampleModal" data-edit={this.props.edi} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{(this.props.edit) ? 'Edit' : 'Add'} announcements</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group row">
                                    <div className="col-12">
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
