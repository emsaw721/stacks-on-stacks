import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dasboard from './pages/Dasboard';
import Expense from './pages/Expense';
import Signup from './pages/Signup';
import Nav from './components/Navbar'; 
import Header from './pages/Header'; 


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