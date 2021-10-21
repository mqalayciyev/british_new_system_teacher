import React, { Component } from 'react'

export default class Attendance extends Component {
    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Attendance</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-group list-group-horizontal py-2" style={{overflow: 'auto', cursor: 'pointer'}}>
                                <li class="list-group-item bg-danger">01/04/21</li>
                                <li class="list-group-item bg-success">02/04/21</li>
                                <li class="list-group-item bg-primary">03/04/21</li>
                                <li class="list-group-item bg-success">04/04/21</li>
                                <li class="list-group-item bg-success">05/04/21</li>
                                <li class="list-group-item bg-success">06/04/21</li>
                                <li class="list-group-item bg-success">07/04/21</li>
                                <li class="list-group-item bg-success">08/04/21</li>
                                <li class="list-group-item bg-success">09/04/21</li>
                                <li class="list-group-item bg-success">10/04/21</li>
                                <li class="list-group-item bg-success">11/04/21</li>
                                <li class="list-group-item bg-success">12/04/21</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
