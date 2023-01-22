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
import { useMutation } from '@apollo/client';
import {Form, Button, Alert, FormControl} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import { ADD_TRANSACTION } from '../utils/mutations';
import Auth from '../utils/auth';
;

function Expense(props) {
    const [ExpenseFormData, setExpenseFormData] = useState({ firstcategory: '', secondcategory: '', amount: '' });
    const [expense] = useMutation(ADD_TRANSACTION);
  
    const handleInputChange = (event) => {
        const { firstcategory, secondcategory, value } = event.target;
        setExpenseFormData({ ...ExpenseFormData, [firstcategory]: [secondcategory], value });
      };
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await expense({
          variables: { ...ExpenseFormData },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setExpenseFormData({
        firstcategory: '',
        secondcategory: '',
        amount: '',
      });
    };
  
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(!open)
  // };

    return (
      <main className="flex-row justify-center mb-4">
        
        {/* <div className='dropdow'>
          <button onClick={handleOpen}>Category</button>
          {open ? (
            <ul>
              <li>Rent</li>
              <li>Medical</li>
              <li>Utilities</li>
            </ul>
          ):null}
</div> */}





          <div className="col-12 col-md-6">
            <div className="card">
              <h4 className="card-header">Add Your Expenses</h4>
              <div className="card-body">
                <Form onSubmit={handleFormSubmit}>
                  <Form.Control
                    className="form-input"
                    placeholder="Housing"
                    name="Housing"
                    type="expense"
                    id="Housing"
                    value={ExpenseFormData.firstcategory}
                    onChange={handleInputChange}
                  />
                  <Form.Control
                    className="form-input"
                    placeholder="Utilities"
                    name="Utilities"
                    type="expense"
                    id="Utilities"
                    value={ExpenseFormData.Utilities}
                    onChange={handleInputChange}
                  />
                  <Form.Control
                    className="form-input"
                    placeholder="Food/Grocery"
                    name="Food/Grocery"
                    type="expense"
                    id="Food/grocery"
                    value={ExpenseFormData.Food}
                    onChange={handleInputChange}
                  />
                  <Form.Control
                    className="form-input"
                    placeholder="Transportation"
                    name="Transportation"
                    type="expense"
                    id="Transportation"
                    value={ExpenseFormData.Transportation}
                    onChange={handleInputChange}
                  />
                  <Form.Control
                    className="form-input"
                    placeholder="Insurance"
                    name="Insurance"
                    type="expense"
                    id="Insurance"
                    value={ExpenseFormData.Insurance}
                    onChange={handleInputChange}
                  />
                  <Form.Control
                    className="form-input"
                    placeholder="Education"
                    name="Education"
                    type="expense"
                    id="Education"
                    value={ExpenseFormData.Education}
                    onChange={handleInputChange}
                  />
                  <Form.Control
                    className="form-input"
                    placeholder="Medical"
                    name="Medical"
                    type="expense"
                    id="Medical"
                    value={ExpenseFormData.Medical}
                    onChange={handleInputChange}
                  />
                  <Form.Control
                    className="form-input"
                    placeholder="Personal Spending"
                    name="Personal"
                    type="expense"
                    id="Personal"
                    value={ExpenseFormData.Personal}
                    onChange={handleInputChange}
                  />
                   <Form.Control
                    className="form-input"
                    placeholder="Other/etc."
                    name="Other"
                    type="expense"
                    id="Other"
                    value={ExpenseFormData.Other}
                    onChange={handleInputChange}
                  />
                <Button
                  disabled={!(ExpenseFormData.firstcategory && ExpenseFormData.secondcategory)}
                  type='submit' variant='success' className='subbtn'>
                    Submit
                  </Button>
                </Form>
    

export default Expense;
              </div>
            </div>
          </div>
        </main>
      );
};


export default Expense;