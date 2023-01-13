import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dasboard from './pages/Dasboard';
import Expense from './pages/Expense';
import Signup from './pages/Signup';
import Nav from './components/Navbar'; 
import Header from './pages/Header'; 


function App() {


  return (
    <Header />
    <div>
      <main>
      </main>
    </div>
    <Nav />
  );
}

export default App;