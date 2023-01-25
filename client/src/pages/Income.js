import React, { useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap'
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../utils/mutations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Income(show) {

    const [startDate, setStartDate] = useState(new Date());

    const [incomeFormState, setIncomeState] = useState({
        firstcategory: 'Income',
        amount: '',
        note: '',
        date: startDate
    });

    const [addIncome] = useMutation(ADD_INCOME);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIncomeState({ ...incomeFormState, [name]: value });
    };

    const handleDateSelect = (event) => {
        setIncomeState({ ...startDate, date: event.value });
    };

    const handleFormSubmit = async (event) => {
        console.log(incomeFormState)
        event.preventDefault();

        try {
            const { data } = await addIncome({
                variables: { ...incomeFormState },
            });
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <section>
            <Modal
                show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Income</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
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
                            id="incomeNote"
                            value={incomeFormState.note}
                            onChange={handleInputChange}
                        />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            onSelect={handleDateSelect}
                            value={incomeFormState.date}                            
                        />                        
                        <Button
                            disabled={!(incomeFormState.firstcategory)}
                            type='submit' variant='success' className='subbtn'>
                            Add
                        </Button>
                        <Button
                            disabled={!(incomeFormState.firstcategory)}
                            type='submit' variant='success' className='subbtn'>
                            Edit
                        </Button>
                        <Button
                            disabled={!(incomeFormState.firstcategory)}
                            type='submit' variant='success' className='subbtn'>
                            Delete
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </section>
    )
}

export default Income