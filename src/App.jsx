import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PendingClaims from './PendingClaims';
import ReturnedItems from './ReturnedItems';
import LostItems from './lostItems';
import FoundItems from './FoundItems';
import ReceivedRewards from './receivedRewards';
import ApplicationForm from './foundApplication';
import ApplicationFormLost from './lostAplication';
import SignUp from './SignUp';
import AdminLogIn from './AdminLogIn';
import LogIn from './LogIn';

function App() {
  const [role, setRole] = useState('');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {role === 'Admin' && (
            <Route path="/pending" element={<PendingClaims />} />
          )}

          <Route
            path="/"
            element={<SignUp setRole={setRole} role={role} />}
          />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/adminLogIn" element={<AdminLogIn />} />
          <Route path="/HomePage" element={<Home role={role}/>} />
          <Route path="/returned" element={<ReturnedItems />} />
          <Route path="/lost" element={<LostItems role={role} />} />
          <Route path="/found" element={<FoundItems />} />
          <Route path="/received" element={<ReceivedRewards />} />
          <Route path="/foundApplication" element={<ApplicationForm />} />
          <Route path="/lostApplication" element={<ApplicationFormLost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
