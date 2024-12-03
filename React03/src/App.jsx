import React, { useEffect, useState } from 'react';
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail, clearEmail } from './Component/userSlice';
import Table from './Component/Table';
import Home from './Home';
import About from './About';
import Login from './Component/Login';
import Contact from './Contact';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Electronics from './Component/sidebar/Electronics';
import Clothing from './Component/sidebar/Clothing';
import HomeKitchen from './Component/sidebar/HomeKitchen';
import Books from './Component/sidebar/Books';
import Sports from './Component/sidebar/Sports';
import './App.css';

function App() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      dispatch(setEmail(email));
      setIsLoggedIn(true);
    }
  }, [dispatch]);

  const handleLogin = () => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      dispatch(setEmail(email)); // store email in Redux
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    dispatch(clearEmail());
    setIsLoggedIn(false);
  };

  return (
    // <Router>
      <div style={styles.appContainer}>
        {/* Sidebar is always visible */}
        <Sidebar />
        <div style={styles.mainContent}>
          <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {isLoggedIn ? (
              <Route path="/table" element={<Table />} />
            ) : (
              <Route path="/table" element={<Navigate to="/login" />} />
            )}

            {!isLoggedIn ? (
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            ) : (
              <Route path="/login" element={<Navigate to="/" />} />
            )}

            {/* Sidebar Category Routes */}
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/home-kitchen" element={<HomeKitchen />} />
            <Route path="/books" element={<Books />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </div>
      </div>
    // </Router>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
  },
  mainContent: {
    marginLeft: '250px',
    padding: '20px',
    flex: 1,
  },
};

export default App;
