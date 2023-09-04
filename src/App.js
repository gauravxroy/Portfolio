import React from 'react';
import { Flex, Center, Box } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
