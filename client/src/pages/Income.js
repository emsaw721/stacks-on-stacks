import React, { useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap'
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../utils/mutations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Income() {

    const [incomeFormState, setIncomeState] = useState({
        firstcategory: 'Income',
        amount: '',
        note: '',
        date: ''
    });

    const [addIncome] = useMutation(ADD_INCOME);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIncomeState({ ...incomeFormState, [name]: value });
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
        <Modal
            show={show}
            onHide={() => onClose(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Income List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleFormSubmit} noValidate validated={validated}>
                    <Form.Control
                        className="form-input"
                        placeholder="Total"
                        name="amount"
                        type="amount"
                        id="incomeamount"
                        value={incomeFormState.amount}
                        onChange={handleInputChange}
                    />
                    <Form.Control
                        className="form-input"
                        placeholder="Notes"
                        name="incomeNote"
                        type="incomeNote"
                        id="incomeNote"
                        value={incomeFormState.note}
                        onChange={handleInputChange}
                    />
                    <Button
                        disabled={!(incomeFormState.firstcategory)}
                        type='submit' variant='success' className='subbtn'>
                        addExpense
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Income