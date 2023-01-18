import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 
// import Expense from './pages/Expense';
// import Income from './pages/Income';
// import Planner from './pages/Planner';
// import Dashboard from './pages/Dashboard'; 
// import Signout from './pages/Signout'; 

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
    <ApolloProvider client={client}>
      {/* <Router> */}
      <Header />

    
        {/* 
        <Switch>
        <Route exact path = '/' component={Dashboard} /> 
        <Route exact path = '/expense' component={Expense} />
        <Route exact path = '/income' component={Income} />
        <Route exact path = '/planner' component={Planner} />
       <Route exact path = '/signout' component={Signout} /> 
       </Switch> */}
      <Navbar />
      <Footer />
      {/* </Router> */}
    </ApolloProvider>
  );
}

export default App;
