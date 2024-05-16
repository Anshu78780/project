import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import statement
import Header from './components/Header';
import Footer from './components/Footer';
import Pfund from './components/Pfund';
import Operformance from './components/Operformance';
import Mfund from './components/Mfund';
import RegistrationForm from './components/RegistrationForm'; // Import your RegistrationForm component
import LoginForm from './components/LoginForm'; // Import your LoginForm component

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          {/* Add more routes for other components */}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Operformance />
      <Pfund />
      <Mfund />
    </>
  );
}

export default App;
