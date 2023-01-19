import React from 'react';
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
import Planner from './pages/Planner';
// import Expense from './pages/Expense';
// import Income from './pages/Income';
import Planner from './pages/Planner';
// import Dashboard from './pages/Dashboard'; 
// import Signout from './pages/Signout'; 

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar'; 
import Planner from './pages/Planner';



function App() {


  return (
<<<<<<< HEAD
    <Header />
    <div>
      <main>
      </main>
    </div>
    <Nav />
=======
    <ApolloProvider client={client}>
      <Router>
      <Header />
        <Routes>
        {/* <Route exact path = '/' component={Dashboard} /> 
        <Route exact path = '/expense' component={Expense} />
        <Route exact path = '/income' component={Income} /> */}
        <Route path = '/planner' element={<Planner />} />
       {/* <Route exact path = '/signout' component={Signout} />  */}
       </Routes> 
      <Navbar />
      <Planner></Planner>
      <Footer />
      </Router>
    </ApolloProvider>
>>>>>>> fa9f569a (added calendar)
  );
}

export default App;