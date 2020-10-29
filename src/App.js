import './App.css';
import React from 'react';

import Navbar from './Navbar';
import Post from './Post';

function App() {
  return (
    <div className="instagram">
      <Navbar/>
      <Post alifallah='hiali' />
    </div>

  );
}

export default App;
