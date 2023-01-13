import React from 'react';
// import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Expense from './pages/Expense';
// import Income from './pages/Income';
import Planner from './pages/Planner';
// import Dashboard from './pages/Dashboard'; 
// import Signout from './pages/Signout'; 

<<<<<<< HEAD
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar'; 
import Planner from './pages/Planner';


=======
>>>>>>> 75cfa646 (i'm exaustion typing and its not helping)

function App() {


  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Header />
    <div>
      <main>
      </main>
    </div>
    <Nav />
=======
=======
>>>>>>> 75cfa646 (i'm exaustion typing and its not helping)
    <ApolloProvider client={client}>
      <Header />
      <Router>
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
        <Planner></Planner>
        <Footer />
      </Router>
    </ApolloProvider>
<<<<<<< HEAD
>>>>>>> fa9f569a (added calendar)
=======
=======
    <Header />
    <div>
      <main>
      </main>
    </div>
    <Nav />
>>>>>>> cefb9227 (i'm exaustion typing and its not helping)
>>>>>>> 75cfa646 (i'm exaustion typing and its not helping)
  );
}

export default App;