import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import addItems from './addItems';
import ReturnedItems from './ReturnedItems';
import lostItems from './lostItems';
import FoundItems from './FoundItems';
import receivedRewards from './receivedRewards';

function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<addItems/>}/>
        <Route path="/returned" element={<ReturnedItems/>}/>
        <Route path="/lost" element={<lostItems/>}/>
        <Route path="/found" element={<FoundItems/>}/>
        <Route path="/received" element={<receivedRewards/>}/>
      </Routes>
    </BrowserRouter>

    </div>
    </>
  )
}

export default App
