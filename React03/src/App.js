// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setEmail, clearEmail } from './userSlice';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Table from './Component/Table';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Login from './Login';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     const email = localStorage.getItem('userEmail');
//     if (email) {
//       dispatch(setEmail(email)); // Store email in Redux
//       setIsLoggedIn(true);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('userEmail');
//     localStorage.removeItem('userPassword');
//     dispatch(clearEmail());
//     setIsLoggedIn(false);
//   };

//   return (
//     <div style={styles.appContainer}>
//       {isLoggedIn && <Sidebar />}

//       <div style={styles.mainContent}>
//         <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/table' element={<Table />} />
          // {!isLoggedIn && <Route path='/login' element={<Login onLogin={handleLogin} />} />}
//         </Routes>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   appContainer: {
//     display: 'flex',
//   },
//   mainContent: {
//     marginLeft: '250px',
//     padding: '20px',
//     flex: 1,
//   },
// };

// export default App;


// <
// {!isLoggedIn ? (
//     <Route path="/login" element={<Login onLogin={handleLogin} />} />
//   ) : (
//     <Route path="/login" element={<Navigate to="/" />} />
//   )}>