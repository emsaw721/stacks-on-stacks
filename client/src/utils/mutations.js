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
mutation addTransaction( $amount: String!, $firstcategory: String!, $secondcategory: String, $yearmonth: String!, $categoryNote: String, $location: String, $note: String, $date: String ) {
    addTransaction(amount: $amount, firstcategory: $firstcategory, secondcategory: $secondcategory, yearmonth: $yearmonth, categoryNote: $categoryNote, location: $location, note: $note, date: $date){
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


