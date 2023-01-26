import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Modal } from 'react-bootstrap'
import { ADD_TRANSACTION } from '../utils/mutations';
import Dropdown from 'react-dropdown';
import decode from 'jwt-decode'; 
import 'react-dropdown/style.css';


const Modalexpense = ({ show, onClose }) => {
  const [validated] = useState(false);

  const [expenseFormState, setExpenseState] = useState({
    username: '',
    amount: '',
    yearmonth: '',
    firstcategory: 'Expense',
    secondcategory: '',
    categoryNote: ''
  });


  const [addExpense] = useMutation(ADD_TRANSACTION);

 const allExpensesArr = []; 

function addDate() {
  const idtoken = localStorage.getItem('id_token');

  const decoded = decode(idtoken);

  const expenseDate = new Date(); 

  const yearStamp = expenseDate.getFullYear(); 
  const monthStamp = expenseDate.getMonth(); 

  const dateArr = [yearStamp, monthStamp]; 

  const yearMonthStamp = dateArr.join("-0"); 
  console.log(yearMonthStamp); 

  setExpenseState({ ...expenseFormState, yearmonth: yearMonthStamp, username: decoded.data.username })
  console.log('adding yearMonthStamp'); 
};

  const handleDropdownChange = (event) => {
    setExpenseState({ ...expenseFormState, secondcategory: event.value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseState({ ...expenseFormState, [name]: value }); 
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    addDate(); 

      const { data } = await addExpense({
        variables: { ...expenseFormState },
      });

      const categoryStr = JSON.stringify(data); 
      // const amountStr = JSON.stringify(data.addTransaction.amount); 
      console.log( categoryStr); 
      allExpensesArr.push(categoryStr); 
      localStorage.setItem('expenses', allExpensesArr); 
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
          <Dropdown options={secondCategoryDropdown} onChange={handleDropdownChange} value={expenseFormState.secondcategory} placeholder="Select an option" className='form-input'></Dropdown>
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
            disabled={!(expenseFormState.firstcategory && expenseFormState.secondcategory)}
            type='submit' variant='success' className='subbtn' onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Modalexpense;