import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import './pages.css';
import { Form, Button } from 'react-bootstrap'
import { ADD_TRANSACTION } from '../utils/mutations';
import Auth from '../utils/auth';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Modalexpense = ({ onClose }) => {

  const [validated] = useState(false);

  const [expenseFormState, setExpenseState] = useState({
    firstCategory: 'Expense',
    secondCategory: '',
    amount: '',
    categoryNote: ''
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
    console.log(expenseFormState)
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: { ...expenseFormState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const secondCategoryDropdown = ['Housing', 'Utility', 'Food', 'Transportation', 'Insurance', 'Education', 'Healthcare', 'Savings & Investiment', 'Personal spending', 'Others'];

  return (
    <section className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Add Your Expenses</h4>
          <div className="card-body">
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
          </div>
        </div>
      </div>
    </section>
  );
};



export default Modalexpense;