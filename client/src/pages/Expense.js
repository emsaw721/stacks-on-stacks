import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import './pages.css';
import { Form, Button, Alert, FormControl } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import { ADD_TRANSACTION } from '../utils/mutations';
import Auth from '../utils/auth';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Expense = (props) => {

  const [expenseFormState, setExpenseState] = useState({
    firstCategory: 'Expense',
    secondCategory: '',
    amount: '',
    categoryNote: ''
  });

  const [addExpense] = useMutation(ADD_TRANSACTION);

  const handleInputChange = (event) => {
    const { firstCategory, secondCategory, amount, categoryNote, value } = event.target;
    setExpenseState({ ...expenseFormState, [firstCategory]: value, [secondCategory]: value, [amount]: value, [categoryNote]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: { ...expenseFormState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  const secondCategoryDropdown = ['Housing', 'Utility', 'Food', 'Transportation'];

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Add Your Expenses</h4>
          <div className="card-body">
            <Form onSubmit={handleFormSubmit}>              
              <Dropdown options={secondCategoryDropdown} onChange={handleInputChange} value={expenseFormState.secondCategory} placeholder="Select an option" className='form-input'></Dropdown>
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
                name="categorynote"
                type="categorynote"
                id="categorynote"
                value={expenseFormState.categoryNote}
                onChange={handleInputChange}
              />
              <Button
                disabled={!(expenseFormState.firstcategory && expenseFormState.secondcategory)}
                type='submit' variant='success' className='subbtn'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};



export default Expense;