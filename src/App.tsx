import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Header from './components/Header/Header';
import Exams from './components/Exams';
import Syllabus from './components/Syllabus';
import ContactUs from './components/ContactUs';

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/aboutus" element={<AboutUs/>} />
              <Route path="/exams" element={<Exams/>} />
              <Route path="/syllabus" element={<Syllabus/>} />
              <Route path="/contactus" element={<ContactUs/>} />
          </Routes>
      </Router>
  );
}

export default App;
