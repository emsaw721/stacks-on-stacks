import React from 'react';
// import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Planner from './pages/Planner';
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

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <>
          <div className='content'>
            <Routes>
              {/* <Route exact path = '/' component={Dashboard} /> 
        <Route exact path = '/expense' component={Expense} />
        <Route exact path = '/income' component={Income} /> */}
            <Route path='/planner' element={<Planner />} />
            {/* <Route exact path = '/signout' component={Signout} />  */}
          </Routes>
        </div>
        <Navbar />
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;