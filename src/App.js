import './App.css';
import React from 'react';

import Navbar from './Navbar';
import Post from './Post';

function App() {
  return (
    <div className="instagram">
      <Navbar/>
      <Post alifallah='hahai' />
    </div>

  );
}

export default App;
