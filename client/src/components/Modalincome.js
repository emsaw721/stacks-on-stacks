import React, { useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap'
import { useMutation } from "@apollo/client";
import { ADD_TRANSACTION} from "../utils/mutations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'
import { QUERY_TRANSACTIONS } from "../utils/queries";


const Modalincome = ({ show, onClose }) => {

    // Logic to add income
    const [incomeFormState, setIncomeState] = useState({
        firstcategory: 'Income',
        amount: '',
        note: '',
        yearmonth: new Date(),
    });

    const [addTransaction] = useMutation(ADD_TRANSACTION, {
        refetchQueries:[QUERY_TRANSACTIONS]
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIncomeState({ ...incomeFormState, [name]: value });
    };

    const handleDateSelect = (date) => {
        setIncomeState({ ...incomeFormState, yearmonth: date });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addTransaction({
                variables: {
                    ...incomeFormState,
                    date: incomeFormState.yearmonth.toJSON(),
                    yearmonth: format(incomeFormState.yearmonth, 'yyyyMM')
                },
            });
            onClose(false);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };    

    return (
        <section>
            <Modal
                show={show}
                onHide={() => onClose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Income</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            className="form-input"
                            placeholder="Total"
                            name="amount"
                            type="number"
                            id="incomeamount"
                            value={incomeFormState.amount}
                            onChange={handleInputChange}
                        />
                        <Form.Control
                            className="form-input"
                            placeholder="Notes"
                            name="note"
                            type="text"
                            id="incomenote"
                            value={incomeFormState.note}
                            onChange={handleInputChange}
                        />
                        <DatePicker
                            selected={incomeFormState.yearmonth}
                            onChange={(date) => handleDateSelect(date)}
                            value={incomeFormState.yearmonth}
                        />
                        <Button
                            disabled={!(incomeFormState.firstcategory)}
                            type='button' variant='success' className='subbtn' onClick={handleFormSubmit}>
                            Add
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal> 
        </section>
    )
}

export default Modalincome;