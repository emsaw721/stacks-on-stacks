import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero'; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Expense from './pages/Expense';
import Planner from './pages/Planner';
//import Dashboard from './pages/Dashboard'; 


const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div>
    <Header />
    <div>
      <main>
        <Dasboard />
      </main>
    </div>
    <Nav />
    </div>
  );
}

export default App;
