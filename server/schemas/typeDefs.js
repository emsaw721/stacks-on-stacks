const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        transactions: [Transaction]        
    }

    type Transaction {
        _id:ID
        username:String
        amount:	Float
        date: String
        yearmonth: String
        firstcategory: String
        secondcategory: String
        categoryNote: String
        location: String
        note: String
    }
    type Secondcategory {
        secondCategory: String
    }
    type Firstcategory {
        _id:ID
        firstCategory: String
        secondCategory: [Secondcategory]
    }

    type Auth {
        token:ID!
        user:User
    }

    type Query {
        me: User
        users: [User]
        transactions: [Transaction]
        budget(username: String!): [Transaction]
        transaction(_id: ID!): Transaction
        category: [Firstcategory]
        monthlyexpense(yearmonth: String!):[Transaction]
        monthlyexpensecat(yearmonth: String!,secondcategory:String!):[Transaction]
        monthlybudget(yearmonth: String!):[Transaction]
        monthlybudgetcat(yearmonth: String!,secondcategory:String!):[Transaction]
        monthlyincome(yearmonth: String!):[Transaction]
    }

    type Mutation {
        login (email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTransaction(username: String!, amount:String!, date: String, yearmonth:String!,firstcategory:String!, secondcategory:String, categoryNote: String, location: String, note:String): Transaction
        removeTransaction(_id: ID!): Transaction
        updateTransaction(_id: ID!,username: String! amount:String, firstcategory:String, secondcategory:String, categoryNote: String, location: String, note:String):Transaction
    }

`

// export the typeDefs
module.exports = typeDefs;