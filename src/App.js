import React from 'react';
// import { Flex, Center, Box } from '@chakra-ui/react';
// import ColorModeSwitcher from './ColorModeSwitcher';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({
      // duration: 1000, // Animation duration in milliseconds
      // easing: 'ease-in', // Easing function
      once: true,
    });
  }, []);
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
