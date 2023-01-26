import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Expense from './pages/Expense';
import Planner from './pages/Planner';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income'; 



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
            <Hero />
            <Router>
                <div className='content'>
                    <Routes>
                        <Route path='/dash' element={<Dashboard />} />
                        <Route path='/income' element={<Income />} />
                        <Route path='/expense' element={<Expense />} />
                        <Route path='/planner' element={<Planner />} />
                        <Route path='/income' element={<Income />} />
                    </Routes>
                </div>
                <Navbar />
                <Footer />
            </Router>
        </ApolloProvider>
    );
}

export default App;
