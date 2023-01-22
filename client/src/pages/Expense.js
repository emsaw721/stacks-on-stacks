import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_TRANSACTION } from '../utils/mutations';
;

function Expense(props) {
    const [ExpenseFormData, setExpenseFormData] = useState({ firstcategory: '', secondcategory: '', amount: '' });
    const [expense, { error }] = useMutation(ADD_TRANSACTION);
  
    const handleInputChange = (event) => {
        const { firstcategory, secondcategory, value } = event.target;
        setExpenseFormData({ ...ExpenseFormData, [firstcategory]: [secondcategory], value });
      };
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await expense({
          variables: { ...ExpenseformData },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        firstcategory: '',
        secondcategory: '',
        amount: '',
      });
    };

    return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-md-6">
            <div className="card">
              <h4 className="card-header">Add Your Expenses</h4>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Housing"
                    name="Housing"
                    type="expense"
                    id="Housing"
                    value={formState.Housing}
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Utilities"
                    name="Utilities"
                    type="expense"
                    id="Utilities"
                    value={formState.Utilities}
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Food/Grocery"
                    name="Food/Grocery"
                    type="expense"
                    id="Food/grocery"
                    value={formState.Food}
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Transportation"
                    name="Transportation"
                    type="expense"
                    id="Transportation"
                    value={formState.Transportation}
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Insurance"
                    name="Insurance"
                    type="expense"
                    id="Insurance"
                    value={formState.Insurance}
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Education"
                    name="Education"
                    type="expense"
                    id="Education"
                    value={formState.Education}
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Medical"
                    name="Medical"
                    type="expense"
                    id="Medical"
                    value={formState.Medical}
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Personal Spending"
                    name="Personal"
                    type="expense"
                    id="Personal"
                    value={formState.Personal}
                    onChange={handleInputChange}
                  />
                   <input
                    className="form-input"
                    placeholder="Other/etc."
                    name="Other"
                    type="expense"
                    id="Other"
                    value={formState.Other}
                    onChange={handleInputChange}
                  />
                  <button className="btn d-block w-100" type="submit">
                    Submit
                  </button>
                </form>
    
              </div>
            </div>
          </div>
        </main>
      );
};


export default Expense;