import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => <h1>Home Page</h1>;
const Services = () => <h1>Services Page</h1>;
const Schedule = () => <h1>Schedule Call Page</h1>;

export default App;
