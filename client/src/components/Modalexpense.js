import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Modal } from 'react-bootstrap'
import { ADD_TRANSACTION } from '../utils/mutations';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { QUERY_TRANSACTIONS } from "../utils/queries";

const Modalexpense = ({ show, onClose }) => {

  const [validated] = useState(false);

  const [expenseFormState, setExpenseState] = useState({
    firstcategory: 'Expense',
    secondcategory: '',
    amount: '',
    categoryNote: '',
    yearmonth: new Date()
  });

  const [addExpense] = useMutation(ADD_TRANSACTION, {
    refetchQueries: [QUERY_TRANSACTIONS]
  });

  const handleDropdownChange = (event) => {
    setExpenseState({ ...expenseFormState, secondcategory: event.value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseState({ ...expenseFormState, [name]: value });
  };

  const handleDateSelect = (date) => {
    setExpenseState({ ...expenseFormState, yearmonth: date });
  }

  const handleFormSubmit = async (event) => {
    console.log(expenseFormState)
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: {
          ...expenseFormState,
          date: expenseFormState.yearmonth.toJSON(),
          yearmonth: format(expenseFormState.yearmonth, 'yyyyMM')
        },
      });
      console.log(data);
      onClose(false)
    } catch (e) {
      console.error(e);
    }
  };

  const secondCategoryDropdown = ['Housing', 'Utility', 'Food', 'Transportation', 'Insurance', 'Education', 'Healthcare', 'Savings & Investiment', 'Personal spending', 'Others'];

  return (
    <Modal
      show={show}
      onHide={() => onClose(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Your Expenses</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated}>
          <Dropdown options={secondCategoryDropdown} onChange={handleDropdownChange} value={expenseFormState.secondCategory} placeholder="Select an option" className='form-input'></Dropdown>
          <Form.Control
            className="form-input"
            placeholder="Total"
            name="amount"
            type="number"
            id="amount"
            value={expenseFormState.amount}
            onChange={handleInputChange}
          />
          <Form.Control
            className="form-input"
            placeholder="Notes"
            name="categoryNote"
            type="text"
            id="categoryNote"
            value={expenseFormState.categoryNote}
            onChange={handleInputChange}
          />
          <DatePicker
              selected={expenseFormState.yearmonth}
              onChange={(date) => handleDateSelect(date)}
              value={expenseFormState.yearmonth}
          />
          <Button
            disabled={!(expenseFormState.firstcategory && expenseFormState.secondcategory)}
            type='button' variant='success' className='subbtn' onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Modalexpense;