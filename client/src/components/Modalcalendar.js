import React, {useEffect, useState} from 'react'
import { format } from 'date-fns'
import {Button} from 'react-bootstrap'
import {useQuery} from "@apollo/client";
import {QUERY_TRANSACTIONS} from "../utils/queries";

const Modalcalendar = ({ onClose, calDate }) => {
    const todaysDate = format((calDate), 'MMM dd yyy')
    const { data } = useQuery(QUERY_TRANSACTIONS);
    const [todaysTransactions, setTodaysTransactions] = useState([]);

    useEffect(() => {
        let today = format(calDate, 'yyyy-MM-dd');
        if (!data) return;
        let tr = data.transactions.filter(t => t.firstcategory === 'Expense' && format(new Date(t.date), 'yyyy-MM-dd') === today);
        setTodaysTransactions(tr)
    }, [data]);

    return (
        <div className="modalCBackdrop" id="modal" aria-labelledby="task-form-modal"
            aria-hidden="true">
            <div className="modalCalendar">
                <div className="modal-header">
                    <h5 className="modal-title" id="myModalTitle">{(todaysDate)}</h5>
                </div>
                <div className="modal-body">
                    <div>
                        Total Expenses
                    </div>
                    <ul>
                        {
                            todaysTransactions.map(t => {
                                return (
                                    <li>{`${t.secondcategory} ${t.amount}`}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Button type="button" onClick={onClose}>Close</Button>
            </div>
        </div>
    )
};


export default Modalcalendar;