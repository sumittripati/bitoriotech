import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Service from './pages/Services';
// import Project from './pages/Projects';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/footer/footer';

const App = () => {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= <Home/>/>
        {/* <Route path="/about" element= <About />/> */}
        {/* <Route path="/contact" element=<Contact /> /> */}
        {/* <Route path="/service" element=<Service/> /> */}
        {/* <Route path="/project" element=<Project/> /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
   </BrowserRouter>
  )
}

export default App

