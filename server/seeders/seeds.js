const db = require('../config/connection');
const {  User, Transactions, FirstCategory } = require('../models');
const { SecondCategory } = require('../models/SecondCategory');


db.once('open', async () => {
    await User.deleteMany({});
    await FirstCategory.deleteMany({});
    await Transactions.deleteMany({});
    
    console.log('old data deleted and new data will be seeded.')
    // create user data
    await Transactions.create (
        {
            username:"user1",
            amount:"1000.00",
            firstcategory:"Cash",
            secondcategory:"Saving account",
            date:"2023-01-12",
            yearmonth:"2023-01"
        },
        {
            username:"user1",
            amount:"3000.00",
            firstcategory:"Income",
            secondcategroy:"Full time job income",
            date:"2023-01-12",
            yearmonth:"2023-01"
        },
        {
            username:"user1",
            amount:"83.32",
            firstcategory:"Expense",
            secondcategroy:"Food",
            categoryNote:"Grocery",
            location:"HEB",
            note:"Food for long weekend",
            date:"2023-01-14",
            yearmonth:"2023-01"
        },
        {
            username:"user1",
            amount:"18.99",
            firstcategory:"Expense",
            secondcategroy:"Recreation & Entertainment",
            categoryNote:"Movie",
            location:"AMC, Houton",
            note:"Avatar II, The Way of Water",
            date:"2023-01-16",
            yearmonth:"2023-01"
        },
        {
            username:"user2",
            amount:"7.88",
            firstcategory:"Expense",
            secondcategroy:"Education",
            categoryNote:"Book",
            location:"Barnes and noble",
            note:"Harry Potter and the Sorcerer's Stone",
            date:"2023-01-12",
            yearmonth:"2023-01"
        },
    );

    await User.create (
        {
            username:"user1",
            email:"user1@gmail.com",
            password:"test1234",
            // transactions:[...transactionsdata]
        },
        {
            username:"user2",
            email:"user2@gmail.com",
            password:"test1234"
        }
    );
  
    

    const categorydata = [
        {
            firstCategory:"Cash",
            secondCategory:[
                {secondCategory:"Saving account"},
                {secondCategory:"Checking account"},
                {secondCategory:"Investment"},
                {secondCategory:"Cash"},
                {secondCategory:"Others"}
            ]
        },
        {
            firstCategory: "Income",
            secondCategory:[
                {secondCategory:"Full time job income"},
                {secondCategory:"Part time job income"},
                {secondCategory:"Others"}
            ]
        },
        {
            firstCategory:"Expense",
            secondCategory:[
                {secondCategory:"Housing"},
                {secondCategory:"Utility"},
                {secondCategory:"Food"},
                {secondCategory:"Transportation"},
                {secondCategory:"Insurance"},
                {secondCategory:"Education"},
                {secondCategory:"Medical & Healthcare"},
                {secondCategory:"saving & investing"},
                {secondCategory:"Personal Spending"},
                {secondCategory:"Others"}
            ]
        },
        {
            firstCategory:"Budget",
            secondCategory:[
                {secondCategory:"Housing"},
                {secondCategory:"Utility"},
                {secondCategory:"Food"},
                {secondCategory:"Transportation"},
                {secondCategory:"Insurance"},
                {secondCategory:"Education"},
                {secondCategory:"Medical & Healthcare"},
                {secondCategory:"saving & investing"},
                {secondCategory:"Personal Spending"},
                {secondCategory:"Others"}
            ]
        }
    ]
    await FirstCategory.collection.insertMany(categorydata);
   
    console.log("...........");
    console.log('all done!');
    process.exit(0);
  });