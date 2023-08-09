import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* footer section */}
    </div>
  );
};

export default App;