import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context';
import { Private } from './features/components/Private';
import { Public } from './features/components/Public';
// import { NotFound } from './features/components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Public />} />
          <Route path='/private' element={<Private />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
