import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query getUser($username: String!) {
    user(username: $username) {
        _id
        username 
        email
        transactions
    }
}`;

export const QUERY_ME = gql`
query Me{
    me {
        _id
        username
        email
        transactions  
    }
}
`; 

export const QUERY_TRANSACTIONS = gql`
query transactions {
    transactions {
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
        _id
        amount
        date
        secondcategory
    }
}`

export const QUERY_CATEGORY = gql`
query category($id: ID!) {
    category(_id: $id){
        _id
        firstCategory
        secondCategory
    }
}`

export const QUERY_MONTHEXPENSECAT = gql`
query monthexpensecat($id: ID!) {
    monthexpensecat(_id: $id) {
        yearmonth
        secondCategory
    }
}`

export const QUERY_MONTHEXPENSE = gql`
query monthexpense($id: ID!) {
    monthexpense(_id: $id) {
        yearmonth
        secondCategory
        amount
    }
}`