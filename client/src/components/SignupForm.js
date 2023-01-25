import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks'
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state  
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: ''}); 
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [createUser] = useMutation(ADD_USER)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const {data} = await createUser({
        variables: { ...userFormData },
      }); 

      console.log(data)

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
      setShowAlert(true);
    }; 
    
    setUserFormData({
      username: '',
      email: '',
      password: '',
    });

  };

  return (
    <>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@100;300;400&family=IBM+Plex+Sans:wght@100&display=swap');
</style>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label className='formlabel' htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='formlabel' htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='formlabel' htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button className='formbtn'
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
          >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm; 


// const SignupForm = () => {
//   const [formState, setFormState] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [addUser, { error }] = useMutation(ADD_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });

//       Auth.login(JSON.stringify(data.addUser));
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//             <form className='signupform' onSubmit={handleFormSubmit}>
//               <h3 className='formlabel'>Username</h3>
//               <input
//                 className="form-input"
//                 placeholder="Your username"
//                 name="username"
//                 type="username"
//                 id="username"
//                 value={formState.username}
//                 onChange={handleChange}
//               />
//               <h3>Email</h3>
//               <input
//                 className="form-input"
//                 placeholder="Your email"
//                 name="email"
//                 type="email"
//                 id="email"
//                 value={formState.email}
//                 onChange={handleChange}
//               />
//               <h3>Password</h3>
//               <input
//                 className="form-input"
//                 placeholder="******"
//                 name="password"
//                 type="password"
//                 id="password"
//                 value={formState.password}
//                 onChange={handleChange}
//               />
//               <button className="btn d-block w-100" type="submit">
//           Submit
//               </button>
//             </form>
//   );
// };

// export default SignupForm;