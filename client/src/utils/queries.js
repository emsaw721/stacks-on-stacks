import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        username 
        email
        transactions
    }
}`;

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        transactions {
            _id
            amount
            date
            firstcategory
            secondcategory
            location
            note
        }
    }
}
`; 

export const QUERY_TRANSACTIONS = gql`
query transactions($username: String!) {
    transactions(username: $username) {
        _id
        username
        amount
        date
        yearmonth
        firstcategory {
          _id
          firstCategory
          secondCategory {
            secondCategory
          }
        }
        categoryNote
        location
        note
}
`;

export const QUERY_TRANSACTION = gql`
query transaction($id: ID!) {
    transaction(_id: $id) {
        _id
        amount
        date
        firstcategory
        secondcategory
        categoryNote
        location
        note
    }
}`;

export const QUERY_BUDGET = gql`
query budget($username: username) {
    budget(username: $username){

    }
}`