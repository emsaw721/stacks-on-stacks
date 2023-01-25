import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TRANSACTION = gql`
mutation addTransaction($username: String!, $amount: String!, $firstCategory: String!, $secondCategory: String!, $categoryNote: String, $location: String, $note: String, $yearmonth: String! ) {
    addTransaction(username: $username, amount: $amount, firstcategory: $firstCategory, secondcategory: $secondCategory, categoryNote: $categoryNote, location: $location, note: $note, yearmonth: $yearmonth){
      _id
      username
      amount
      date
      yearmonth
      firstcategory 
      secondcategory
      categoryNote
      location
      note
    }
}`;

export const UPDATE_TRANSACTION = gql`
    mutation updateTransaction($id: ID!) {
        updateTransaction(_id: $id) {
            _id
        }
    }
`;

export const REMOVE_TRANSACTION = gql`
    mutation removeTransaction($id: ID!) {
        removeTransaction(_id: $id) {
            _id
        }
    }
`; 
