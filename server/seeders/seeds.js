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
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"3000.00",
            firstcategory:"Income",
            secondcategory:"Full time job income",
            date:"2023-01-12",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"2000.00",
            firstcategory:"Income",
            secondcategory:"Part time job income",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"600",
            firstcategory:"Budget",
            secondcategory:"Food",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"2000",
            firstcategory:"Budget",
            secondcategory:"Housing",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"200",
            firstcategory:"Budget",
            secondcategory:"Utility",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"200",
            firstcategory:"Budget",
            secondcategory:"Transportation",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"200",
            firstcategory:"Budget",
            secondcategory:"Insurance",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"100",
            firstcategory:"Budget",
            secondcategory:"Education",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"100",
            firstcategory:"Budget",
            secondcategory:"Medical & Healthcare",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"500",
            firstcategory:"Budget",
            secondcategory:"Saving & Investing",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"500",
            firstcategory:"Budget",
            secondcategory:"Personal Spending",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"500",
            firstcategory:"Budget",
            secondcategory:"Others",
            yearmonth:"202301"
        },        
        {
            username:"user1",
            amount:"112.45",
            firstcategory:"Expense",
            secondcategory:"Food",
            categoryNote:"Grocery",
            location:"HEB",
            date:"2023-01-21",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"83.32",
            firstcategory:"Expense",
            secondcategory:"Food",
            categoryNote:"Grocery",
            location:"HEB",
            note:"Food for long weekend",
            date:"2023-01-14",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"1899",
            firstcategory:"Expense",
            secondcategory:"Housing",
            categoryNote:"Mortgage",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"65.79",
            firstcategory:"Expense",
            secondcategory:"Utility",
            categoryNote:"Water",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"48.99",
            firstcategory:"Expense",
            secondcategory:"Utility",
            categoryNote:"Electricity",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"54.34",
            firstcategory:"Expense",
            secondcategory:"Transportation",
            categoryNote:"gas",
            location:"Shell",
            date:"2023-01-17",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"128.78",
            firstcategory:"Expense",
            secondcategory:"Insurance",
            categoryNote:"Car insurance",
            note:"Tesla",
            date:"2023-01-13",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"18.99",
            firstcategory:"Expense",
            secondcategory:"Medical & Healthcare",
            categoryNote:"OTC",
            location:"Walgreen",
            note:"Tylano",
            date:"2023-01-16",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"18.99",
            firstcategory:"Expense",
            secondcategory:"Saving & Investing",
            categoryNote:"Saving deposit",
            location:"Chase",
            date:"2023-01-16",
            yearmonth:"202301"
        },
        {
            username:"user1",
            amount:"18.99",
            firstcategory:"Expense",
            secondcategory:"Recreation & Entertainment",
            categoryNote:"Movie",
            location:"AMC, Houton",
            note:"Avatar II, The Way of Water",
            date:"2023-01-16",
            yearmonth:"202301"
        },
        {
            username:"user2",
            amount:"7.88",
            firstcategory:"Expense",
            secondcategory:"Education",
            categoryNote:"Book",
            location:"Barnes and noble",
            note:"Harry Potter and the Sorcerer's Stone",
            date:"2023-01-12",
            yearmonth:"202301"
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
                {secondCategory:"Saving & Investing"},
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
