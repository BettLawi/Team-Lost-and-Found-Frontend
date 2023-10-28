import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddItems from './addItems';
import ReturnedItems from './ReturnedItems';
import LostItems from './lostItems';
import FoundItems from './FoundItems';
import ReceivedRewards from './receivedRewards';
import  ApplicationForm from './foundApplication'
import ApplicationFormLost from './lostAplication';

function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddItems/>}/>
        <Route path="/returned" element={<ReturnedItems/>}/>
        <Route path="/lost" element={<LostItems/>}/>
        <Route path="/found" element={<FoundItems/>}/>
        <Route path="/received" element={<ReceivedRewards/>}/>
        <Route path="/foundApplication" element={<ApplicationForm/>}/>
        <Route path="/lostApplication" element={<ApplicationFormLost/>}/>
        
      </Routes>
    </BrowserRouter>

    </div>
    </>
  )
}

export default App
