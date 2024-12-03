// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // const Sidebar = () => {
// // //     const [isOpen, setIsOpen] = useState(true);
// // //  const toggleSiderbar =()=>{
// // //     setIsOpen
// // //  }
// // //   return (
// // //     <div style={  isOpen? style.sidebarOpen:style.sidebarOpen}>
// // //         <button style={style.toogleButton} onclick= {toggleSiderbar}>
// // //             Sidebar
// // //         </button>
// // //       <h2 style={style.heading}>Categories</h2>
// // //       <ul style={style.list}>
// // //         <li style={style.listItem}>
// // //           <Link to="/electronics" style={style.link}>
// // //             Electronics
// // //           </Link>
// // //         </li>
// // //         <li style={style.listItem}>
// // //           <Link to="/clothing" style={style.link}>
// // //             Clothing
// // //           </Link>
// // //         </li>
// // //         <li style={style.listItem}>
// // //           <Link to="/home-kitchen" style={style.link}>
// // //             Home & Kitchen
// // //           </Link>
// // //         </li>
// // //         <li style={style.listItem}>
// // //           <Link to="/books" style={style.link}>
// // //             Books
// // //           </Link>
// // //         </li>
// // //         <li style={style.listItem}>
// // //           <Link to="/sports" style={style.link}>
// // //             Sports
// // //           </Link>
// // //         </li>
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // const style = {
// // //     sidebarOpen:{
// // //         width: '250px',
// // //             backgroundColor: '#343a40',
// // //             color: '#ffff',
// // //             padding: '15px',
// // //             height: '100vh',
// // //             position: 'fixed',
// // //             transition:'transform 0.3s ease'
// // //     },
// // //     sidebarClosed:{
// // //         with:'0',
// // //         backgroundColor:'#343a40',
// // //         color :'#ffff',
// // //         height:100vh,
// // //     position:'fixed',   
// // //     transition:'transform 0.3s ease'
// // //  },
// // //   heading: {
// // //     fontSize: '1.5rem',
// // //     marginBottom: '15px',
// // //     color: '#ffcc00',
// // //   },
// // //   list: {
// // //     listStyle: 'none',
// // //     padding: 0,
// // //   },
// // //   listItem: {
// // //     padding: '10px 0',
// // //   },
// // //   link: {
// // //     textDecoration: 'none',
// // //     color: '#ffffff',
// // //     transition: 'color 0.3s',
// // //   },
// // //   toogleButton:{
// // //     display:'none',
// // //     padding:'10px';
// // //     backgroundColor:'#ffcc00',
// // //     color:'#343a40',
// // //      border:'none',
// // //      cursor:'pinter',
// // //      marginBottom:'10px',

// // //   },

// // //   @media(max-width:760px):{
// // //     sidebarOpen:{
// // //         width:'25px',
// // //         backgroundColor:'#343a40',
// // //         color: '#ffff',
// // //               padding: '15px',
// // //               height: '100vh',
// // //               position: 'fixed',
// // //                           transition: 'transform 0.3s ease',
// // //     },
// // //     sidebarClosed:{
// // //                width: '0',
// // //       backgroundColor: '#343a40',
// // //       color: '#ffff',
// // //       height: '100vh',
// // //       position: 'fixed',
// // //       overflow: 'hidden',
// // //       transition: 'transform 0.3s ease',
// // //     },
// // //     toggleSiderbar:{
// // //         // Visuvke  on smaller screens  
// // //         display:'block',
// // //     },
// // // },

// // // };

// // // export default Sidebar;










// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(true);

// //   const toggleSidebar = () => {
// //     setIsOpen(!isOpen);  // Toggle sidebar state
// //   };

// //   return (
// //     <div style={isOpen ? style.sidebarOpen : style.sidebarClosed}>
// //       <button
// //         style={style.toogleButton}
// //         onClick={toggleSidebar}  // Corrected to onClick
// //       >
// //         {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
// //       </button>
// //       <h2 style={style.heading}>Categories</h2>
// //       <ul style={style.list}>
// //         <li style={style.listItem}>
// //           <Link to="/electronics" style={style.link}>
// //             Electronics
// //           </Link>
// //         </li>
// //         <li style={style.listItem}>
// //           <Link to="/clothing" style={style.link}>
// //             Clothing
// //           </Link>
// //         </li>
// //         <li style={style.listItem}>
// //           <Link to="/home-kitchen" style={style.link}>
// //             Home & Kitchen
// //           </Link>
// //         </li>
// //         <li style={style.listItem}>
// //           <Link to="/books" style={style.link}>
// //             Books
// //           </Link>
// //         </li>
// //         <li style={style.listItem}>
// //           <Link to="/sports" style={style.link}>
// //             Sports
// //           </Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // const style = {
// //   sidebarOpen: {
// //     width: '250px',
// //     backgroundColor: '#343a40',
// //     color: '#ffff',
// //     padding: '15px',
// //     height: '100vh',
// //     position: 'fixed',
// //     transition: 'transform 0.3s ease',
// //   },
// //   sidebarClosed: {
// //     width: '0', // Corrected 'with' to 'width'
// //     backgroundColor: '#343a40',
// //     color: '#ffff',
// //     height: '100vh',
// //     position: 'fixed',
// //     overflow: 'hidden',
// //     transition: 'transform 0.3s ease',
// //   },
// //   heading: {
// //     fontSize: '1.5rem',
// //     marginBottom: '15px',
// //     color: '#ffcc00',
// //   },
// //   list: {
// //     listStyle: 'none',
// //     padding: 0,
// //   },
// //   listItem: {
// //     padding: '10px 0',
// //   },
// //   link: {
// //     textDecoration: 'none',
// //     color: '#ffffff',
// //     transition: 'color 0.3s',
// //   },
// //   toogleButton: {
// //     display: 'none', // Hidden by default, shown on smaller screens
// //     padding: '10px',
// //     backgroundColor: '#ffcc00',
// //     color: '#343a40',
// //     border: 'none',
// //     cursor: 'pointer',
// //     marginBottom: '10px',
// //   },

// //   // Media Queries: Move these styles to a CSS file or use a library for handling them in JS
// //   // Example using plain CSS (in an external file or using CSS-in-JS solution):

// // };

// // export default Sidebar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css'; // Import the CSS file

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen); // Toggle the sidebar open/closed
//   };

//   return (
//     <div className={isOpen ? 'sidebar' : 'sidebarClosed'}> {/* Apply the class conditionally */}
//       <button
//         className="toggleButton" // Button to toggle the sidebar on mobile
//         onClick={toggleSidebar}
//       >
//         {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
//       </button>
//       <h2 className="heading">Categories</h2>
//       <ul className="list">
//         <li className="listItem">
//           <Link to="/electronics" className="link">
//             Electronics
//           </Link>
//         </li>
//         <li className="listItem">
//           <Link to="/clothing" className="link">
//             Clothing
//           </Link>
//         </li>
//         <li className="listItem">
//           <Link to="/home-kitchen" className="link">
//             Home & Kitchen
//           </Link>
//         </li>
//         <li className="listItem">
//           <Link to="/books" className="link">
//             Books
//           </Link>
//         </li>
//         <li className="listItem">
//           <Link to="/sports" className="link">
//             Sports
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;









import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #343a40;
  color: #ffff;
  padding: 15px;
  height: 100vh;
  position: fixed;
  transition: transform 0.3s ease;

  @media (max-width: 760px) {
    width: ${props => (props.isOpen ? '250px' : '0')};
  }
`;

const Button = styled.button`
  display: none;
  padding: 10px;
  background-color: #ffcc00;
  color: #343a40;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;

  @media (max-width: 760px) {
    display: block;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffcc00;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  transition: color 0.3s;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarWrapper isOpen={isOpen}>
      <Button onClick={toggleSidebar}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </Button>
      <Heading>Categories</Heading>
      <List>
        <ListItem>
          <LinkItem to="/electronics">Electronics</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem to="/clothing">Clothing</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem to="/home-kitchen">Home & Kitchen</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem to="/books">Books</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem to="/sports">Sports</LinkItem>
        </ListItem>
      </List>
    </SidebarWrapper>
  );
};

export default Sidebar;
