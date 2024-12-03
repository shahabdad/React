
import React from 'react'
import { useSelector } from 'react-redux'; 
const Home = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  //  Sample product data (You can replace this  with data from an API later)

  const products =[
    {Id:1, name:'Run',price:'$20',imageUrl:'she-2.jpg'},
    { Id :2,name:'Beautiful Runner',price:'$30',imageUrl:'shoes2.webp' },
    { Id:3,name:'Elegent Gold Ring',price:'$40',imageUrl:'she-1.jpg' },
    { Id: 4, name: 'Casual Sneakers', price: '$50', imageUrl: 'big-3.jpg' },
    { Id: 5, name: 'Casual Sneakers', price: '$50', imageUrl: 'b-showes-2.jpg' },
    { Id: 6, name: 'Luxury Handbag', price: '$60', imageUrl: 'big-2.avif' },
    { Id: 7, name: 'Classic Watch', price: '$70', imageUrl: 'Classic Watch.jpg' }
  ]
  return (
<div style={styles.container}>
<h1 style={styles.heading}>Welcome to Our Store
  <br/>

</h1>
{email && <p>Welcome  {email}!</p>}
{password && <p>Welcome  {password}!</p>}
<div  style={styles.productd}>
  {products.map((product)=>(
    <div className='row'>
    <div key={product.Id} style={styles.productCard}>
      <img src ={product.imageUrl}  alt={product.name} style={styles.productImage}/>
      <h2 style={styles.productName}>{product.name}</h2>
      <p style= {styles.productPrice}>{product.price}</p>
      </div>
      </div>
  ))}
</div>
</div>  

  )
}
// Simple  Css  styling  in JSX 
const   styles ={
  container:{
    paddding:'20px',
    textAlign:'center',
  },
  heading:{
      fontSize:'2.5rem',
      marginBottom:'50px',
      marginTop:'30px',
      color:'#333',
     
  },
  productd:{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))',
    gap:'20px',
  },
productCard:{
  border:'1px solid #ddd',
  borderRadius:'5px',
  padding:'10px',
  textAlign:'center',
  
},
productImage:{
  width:'100%',
  height:'auto',
  borderRedius:'5px',
},
  productName:{
    fontSize:'1.5rem',
    margin:'10px 0',
    padding:'12px',
    color:'#555'
  },
  productPrice:{
    fontSize:'1.2rem',
    color:'#888',
  },
  
}

export default Home