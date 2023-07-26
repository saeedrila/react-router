import './App.css';
import About from './container/About.js';
import Profile from './container/Profile.js';
import { useState } from 'react';

function App() {
  const [state, setState] = useState('');
  let component
  if(state === 'about'){
    component=<About />
  }
  if(state ==='profile'){
    component = <Profile />
  }

  return (
    <div className="App">
      <button onClick={()=>setState('about')}>About</button>
      <button onClick={()=>setState('profile')}>Profile</button>
      {component}
    </div>
  );
}

export default App;
