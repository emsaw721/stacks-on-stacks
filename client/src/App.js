import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



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
        {/* <Header></Header>
        <Navbar></Navbar> */}
        <Planner></Planner>
        {/* <Footer></Footer> */}
      </Router>
    </ApolloProvider>
>>>>>>> fa9f569a (added calendar)
  );
}

export default App;