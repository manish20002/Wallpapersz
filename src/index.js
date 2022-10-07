import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Wallpapers from './components/wallpapers/Wallpapers';
import Navbar from './components/navbar/Navbar';
import Error from './components/error/Error';


ReactDOM.render(
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/wallpapers' element={<Wallpapers />} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </Router>,

    document.getElementById("root"));

reportWebVitals();
