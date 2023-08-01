import './App.css';
import About from './container/About.js';
import Profile from './container/Profile.js';
import { useState } from 'react';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

function App() {
  const [state, setState] = useState('10')
  const navigate = useNavigate()

  return (
    <div className="App">
      <button onClick={()=>navigate('/about')} >About Page</button>
      <button onClick={()=>navigate('/profile')} >Profile Page</button>
      <AppContext.Provider value={{data:state}}>
        <Routes>
        <Route element={<About />} path='/about' />
        <Route element={<Profile />} path='/profile' />
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
