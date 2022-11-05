import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import HomePage from './components/homePage/HomePage';

const App = () => {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>

        </div>
  );
}

export default App;

