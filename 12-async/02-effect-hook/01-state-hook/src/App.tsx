import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Home from 'containers/pages/Home';
import Members from 'containers/pages/Members';

import './App.css';

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:orgCode/members" element={<Members />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default App;
