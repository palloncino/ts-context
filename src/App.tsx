import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context';
import { Entities } from './features/components/Entities';
import { MyPortal } from './features/components/MyPortal';
import { NotFound } from './features/components/NotFound';
import { Public } from './features/components/Public';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Public />} />
          <Route path='/entities' element={<Entities />}>
            <Route path=":id" element={<MyPortal />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
