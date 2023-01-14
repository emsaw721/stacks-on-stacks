const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        transactions: [Transaction]        
    }

    type Transactions {
        _id:ID
        username:String
        amount:	DecimalFunction
        date: String
        firstcategory: String
        secondcategory: String
        categoryNote: Sting
        location: String
        note: String
    }

    type Maincategory {
        _id:ID
        category: String
        secondCategory: [Secondcategory]
    }

    type Auth {
        token:ID!
        user:User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        transactions(username: String!): [Transactions]
        transaction(_id: ID!): Transaction
        firstcategory: [Firstcategory]
        monthtraction(username:String!, mon:Sting!, year: String!):[Transactions]
    }

    type Mutation {
        login (email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTransaction(username: String!, amount:number!, maincategory:String!, secondcategory:String, categoryNote: String, location: String, note:String): Thought
        removeTransaction(_id: ID!)
    }




`

// export the typeDefs
module.exports = typeDefs;