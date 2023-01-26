const { AuthenticationError } = require('apollo-server-express');
const { User,FirstCategory, Transactions} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers ={

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('transactions')
                return userData;
            }
            throw new AuthenticationError("You are not logged in!");
        
        },
        users: async ()=>{
            return User.find()
            .select('-__v -password')
            .select('email')
            .select('username');
        },
        category: async () =>{
            return FirstCategory.find()
            .select('firstCategory')
            .populate('secondCategory');
        },
        transactions: async (parent, args, context) => {
            if (context.user) {
                // Find the transactions by the username of the logged-in user
                const transactions = await Transactions.find({ username: context.user.username });
                return transactions;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        budget: async(parent,args, context)=>{
            if (context.user) {
                // Find the transactions by the username of the logged-in user
                const transactions = await Transactions.find({ username: context.user.username });
                const budgetdata=[];
                // add method to extract the budget data from transactions
                return budgetdata;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        transaction: async (parent, { _id }, context) => {
            if (context.user) {
                // Find the transaction by its _id
                const transaction = await Transactions.findOne({ _id });
                if (!transaction) {
                    throw new Error('Transaction not found');
                }
                // check if the transaction belongs to the logged-in user
                if (transaction.username !== context.user.username) {
                    throw new AuthenticationError('You are not authorized to view this transaction');
                }
                return transaction;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        monthexpense: async (parent, args, context) =>{
            if (context.user) {
                // Find the transaction by its _id
                const transactions = await Transactions.find({username: context.user.username, firstcategory:"Expense", yearmonth:args.yearmonth});
                if (!transactions) {
                    throw new Error('Transaction not found');
                }
                return transactions;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        monthexpensecat:async (parent, args, context) =>{
            if (context.user) {
                // Find the transaction by its _id
                const transactions = await Transactions.find({username: context.user.username, firstcategory:"Expense", yearmonth:args.yearmonth, secondcategory:args.secondcategory});
                if (!transactions) {
                    throw new Error('Transaction not found');
                }
                return transactions;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        monthbudget: async (parent, args, context) =>{
            if (context.user) {
                // Find the transaction by its _id
                const transactions = await Transactions.find({username: context.user.username, firstcategory:"Budget", yearmonth:args.yearmonth});
                if (!transactions) {
                    throw new Error('Transaction not found');
                }
                return transactions;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        monthbudgetcat:async (parent, args, context) =>{
            if (context.user) {
                // Find the transaction by its _id
                const transactions = await Transactions.find({username: context.user.username, firstcategory:"Budget", yearmonth:args.yearmonth, secondcategory:args.secondcategory});
                if (!transactions) {
                    throw new Error('Transaction not found');
                }
                return transactions;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        monthincome: async (parent, args, context) =>{
            if (context.user) {
                // Find the transaction by its _id
                const transactions = await Transactions.find({username: context.user.username, firstcategory:"Income", yearmonth:args.yearmonth});
                if (!transactions) {
                    throw new Error('Transaction not found');
                }
                return transactions;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            // Check if the email or username already exist
            const emailExist = await User.findOne({ email: args.email });
            if (emailExist) {
                throw new Error('Email already exists');
            }
            const usernameExist = await User.findOne({ username: args.username });
            if (usernameExist) {
                throw new Error('Username already exists');
            }
        
            // Create the new user object with the provided arguments
            const user = await User.create(args);
            // Sign a token
            const token = signToken(user);
            return { token, user };
        },
        addUser: async(partent, args)=>{
            const user=await User.create(args);
            const token = signToken(user);
            return {token, user};
        },
        login: async (parent, {email, password})=>{
            const user =await User.findOne({email});
            // check if user exist
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            // check password
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
            const token = signToken(user);
            return { token, user };
        },
        addTransaction: async(parent, args, context) =>{
            if (context.user) {
                // Create the new transaction object with the provided arguments
                const transaction = await Transactions.create ({...args, username: context.user.username });
                // Update the user object's transactions array
                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    { $push: { transactions: transaction._id}},
                    { new: true}
                );
                return transaction;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeTransaction: async (parent, args, context) => {
            if (context.user) {
                // Find the transaction by its ID
                const transaction = await Transactions.findById(args._id);
                if (!transaction) {
                    throw new Error('Transaction not found');
                }
                // Check if the user who created the transaction is the one trying to delete it
                if (transaction.username !== context.user.username) {
                    throw new AuthenticationError('You are not authorized to delete this transaction');
                }
                // Remove the transaction
                await Transactions.deleteOne(transaction);
                // Update the user object's transactions array
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { transactions: args._id } },
                    { new: true }
                );
                return transaction;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateTransaction: async (parent, args, context) => {
            if (context.user) {
                // Find the transaction by its ID
                const transaction = await Transactions.findById(args.id);
                if (!transaction) {
                    throw new Error('Transaction not found');
                }
                // Check if the user who created the transaction is the one trying to update it
                if (transaction.username !== context.user.username) {
                    throw new AuthenticationError('You are not authorized to update this transaction');
                }
                // Update the transaction properties with the provided arguments
                transaction.username = args.username;
                transaction.amount = args.amount;
                transaction.firstcategory = args.firstcategory;
                transaction.secondcategory = args.secondcategory;
                transaction.categoryNote = args.categoryNote;
                transaction.location = args.location;
                transaction.note = args.note;
                // Save the updated transaction
                await transaction.save();
                return transaction;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
    
}

module.exports = resolvers;