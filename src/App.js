import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import Navigation from './components/navigation/Navigation';
import Notes from './components/notes/Notes';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div>
      {/* <h1>Hii ss App.js</h1> */}
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;