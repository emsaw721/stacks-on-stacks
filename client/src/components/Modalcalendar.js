import React from 'react'
import { format } from 'date-fns'
import {Button} from 'react-bootstrap'





const Modalcalendar = ({ onClose, calDate }) => {
    const todaysDate = format((calDate), 'MMM dd yyy')

    return (
        <div className="modalCBackdrop" id="modal" aria-labelledby="task-form-modal"
            aria-hidden="true">
            <div className="modalCalendar">
                <div className="modal-header">
                    <h5 className="modal-title" id="myModalTitle">{(todaysDate)}</h5>
                </div>
                <div className="modal-body">
                    <div> Total Expenses
                    </div>
                    <div> Total Income
                    </div>
                </div>
                <Button type="button" onClick={onClose}>Close</Button>
            </div>
        </div>
    )
};


export default Modalcalendar;