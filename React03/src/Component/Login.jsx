// import React, { useState } from 'react'

// const Login = ({onLogin}) => {
//     const [email,setEmail]=useState('');
//     const[password,setPassword] = useState('');

// // creat  function
// const handleSubmit = (e) =>{
//     e.preventDefault();
//     //  save email and password  local storage
// localStorage.setItem('userEmail',email);
// localStorage.setItem('userPassword',password);
// onLogin(); // Call the parent function to set login state
// }

//   return (
//     <form onSubmit={handleSubmit} style={style.from}>
//         <h2>Login</h2>
//         <div style={style.wrapper}>
//                 <div style={style.inputGroup}>
//  <label>Email:</label>
//  <input
//  type='email'
//  value={email}
//  onChange={(e)=> setEmail(e.target.value)}
//  required
//  style={style.input}
// />
// </div>   

//    <div style={style.inputGroup}>
//     <label >Password:</label>
//      <input
//      type='password'
//      value={password}
//      onChange={(e)=>setPassword(e.target.value)}
//      required
//      style={style.input}
//      />
//      </div>
//       {/* Image on the right  */}

//       <div style={style.imageContainer}>
//         <img
//         src='e-commerce.webp'
//         alt='Login illustration'
//         style={style.image}
//         />
//         </div>
//      </div>
//      <button type='submit' style={style.button}>
//         Login
//      </button>
//     </form>
//   )
// }
//  const style ={
    
// form:{

//         maxWidth:'800px',
//         margin:'0 auto',
//         padding:'20px',
//         border:'1px solid #ddd',
//         borderRadius:'5px',
// },
// wrapper:{

//     display:'flex', 
//     alignItems:'flex-start',
// },
//     inputGroup:{
//         display:'flex',
//         flexDirection:'column',
//         marginRigght:'20px',
//     },
//     label:{
// marginBottom:'5px',
//     },
//     input:{
//         padding:'8px',
//         border:'1px solid #ccc',
// borderRadius:'4px',
// width:'200px',
//     },
//     imageContainer:{
//  marginLeft:'20px',
//     },
// image:{
//     width:'450px',
//     height:'auto',
// },
//     button:{
//         backgroundColor:'#28a745',
//         color:'#fff',
//         padding:'10px ',   
//         border:'none',
//         borderRadius:'5px',
//         cursor:'pointer',
//         marginTop:'20px'
//     },
//  };

// export default Login




import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save email and password to local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    onLogin(); // Call the parent function to set login state
  };

  return (
    <form onSubmit={handleSubmit} style={style.form}>

      {/* <h2>Login</h2> */}
      <div style={style.wrapper}>

      <div style={style.imageContainer}>
          <img
            src="e-commerce.webp" // Replace with your image URL
            alt="Login illustration"
            style={style.image}
          />
        </div>
  
        {/* Input Group for Email */}
        
        <div style={style.inputGroup}>
          <label style={style.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={style.input}
          />

        </div>
<br/>

        {/* Input Group for Password */}
        <div style={style.inputGroup}>

          <label style={style.label}>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={style.input}
          />
        </div>

        {/* Image on the right */}
        <button type="submit" style={style.button}>
        Login
      </button>  
      </div>

      
    </form>
  );
};

const style = {
  form: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px',
    marginTop:'40px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    alignItems:'center',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  formContainer:{
flex:'1',
maxWidth:'400px',
marginRight:'200px',
  },
  inputGroup: {
display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
//   label: {
    // marginBottom: '5px',
//   },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  },
  imageContainer: {
    flex:'1',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    display:'flex',
    top:'30px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};
// '@media (max-width:789px'):{
//     wrapper: {
//         flexDirection:'column';
//         alignItems:'center';
//     }
// }
export default Login;
