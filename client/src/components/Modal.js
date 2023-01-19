import React from "react";



const Modal = ({onClose, currentDay}) => {
    return (
        <div class="modal fade" id="task-form-modal" tabindex="-1" role="dialog" aria-labelledby="task-form-modal"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myModalTitle">Add New Expense</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="modalTaskDescription">Expense type</label>
                                <textarea class="form-control" id="modalTaskDescription" rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="modalDueDate">Due date</label>
                                <input type="text" class="form-control" placeholder="mm/dd/yyyy" id="modalDueDate" autocomplete="off"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-close" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-save">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Modal;