import React from 'react'
import { format } from 'date-fns'





const Modal = ({ onClose, calDate }) => {
    const todaysDate = format((calDate), 'MMM dd yyy')

    return (
        <div className="modalBackdrop" id="modal" aria-labelledby="task-form-modal"
            aria-hidden="true">
            <div className="modalContainer">
                <div className="modal-header">
                    <h5 className="modal-title" id="myModalTitle">{(todaysDate)}</h5>
                </div>
                <div className="modal-body">
                    <div> Total Expenses
                    </div>
                    <div> Total Income
                    </div>
                </div>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </div>
    )
};


export default Modal;