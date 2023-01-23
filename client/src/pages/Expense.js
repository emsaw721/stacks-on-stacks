import React, { useState } from 'react';
import './pages.css';
import { Button } from 'react-bootstrap'
import Modalexpense from '../components/Modalexpense';



const Expense = (data) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openLink = () => {        
        setIsModalOpen(!isModalOpen);
    }

    return (
        <section className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Expense List</h4>
                    <div className="card-body">
                        <Modalexpense show={isModalOpen} onClose={setIsModalOpen}></Modalexpense>
                        <Button type='button' variant='success' className='subbtn' onClick={openLink}>
                            Add new expense
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};


import React, { useState } from 'react';
import './pages.css';
import { Form, Button } from 'react-bootstrap'
import Auth from '../utils/auth';



const Expense = (props) => {



  const secondCategoryDropdown = ['Housing', 'Utility', 'Food', 'Transportation', 'Insurance', 'Education', 'Healthcare', 'Savings & Investiment', 'Personal spending', 'Others'];

  return (
    <section className="flex-row justify-center mb-4">    
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Expense List</h4>
          <div className="card-body">
            <Form onSubmit={handleFormSubmit} noValidate validated={validated}>            
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
                Add new expense
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Expense;