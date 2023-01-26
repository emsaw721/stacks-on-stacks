import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Modal } from 'react-bootstrap'
import { ADD_TRANSACTION } from '../utils/mutations';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import AuthService from '../utils/auth';

const Modalexpense = ({ show, onClose }) => {

  const [validated] = useState(false);

  const [expenseFormState, setExpenseState] = useState({
    firstCategory: 'Expense',
    secondCategory: '',
    amount: '',
    categoryNote: '',
    yearmonth: '',
    username: ''
  });

  const [addExpense] = useMutation(ADD_TRANSACTION);

  const handleDropdownChange = (event) => {
    setExpenseState({ ...expenseFormState, secondCategory: event.value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseState({ ...expenseFormState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
   
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: { ...expenseFormState },
      });
      console.log(JSON.stringify(data)); 
      AuthService.loggedIn(JSON.stringify(data.addTransaction._id));
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
        <Form onSubmit={handleFormSubmit} noValidate validated={validated}>
          <Dropdown options={secondCategoryDropdown} onChange={handleDropdownChange} value={expenseFormState.secondCategory} placeholder="Select an option" className='form-input'></Dropdown>
          <Form.Control
            className="form-input"
            placeholder="Total"
            name="amount"
            type="amount"
            id="amount"
            value={expenseFormState.amount}
            onChange={handleInputChange}
          />
          <Form.Control
            className="form-input"
            placeholder="Notes"
            name="categoryNote"
            type="categoryNote"
            id="categoryNote"
            value={expenseFormState.categoryNote}
            onChange={handleInputChange}
          />
          <Button
            disabled={!(expenseFormState.firstCategory && expenseFormState.secondCategory)}
            type='submit' variant='success' className='subbtn'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Modalexpense;