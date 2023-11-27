import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage';

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={Homepage}/>
    </Routes>
  );
}

export default AllRoutes;