import './App.css';
import About from './container/About.js';
import Profile from './container/Profile.js';
import { useState } from 'react';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <button onClick={()=>navigate('/about')} >About Page</button>
      <button onClick={()=>navigate('/profile')} >Profile Page</button>
      <Routes>
        <Route element={<About />} path='/about' />
        <Route element={<Profile />} path='/profile' />
      </Routes>
    </div>
  );
}

export default App;
