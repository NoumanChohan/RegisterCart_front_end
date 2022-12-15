import { Box, Divider, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {



  const[cartData,setCartData]=useState([])
  const getApiCartData=async()=>{
    try {
      const getCartValue=await axios.get('http://localhost:5000/api/CartProduct')
      setCartData(getCartValue.data)
    } catch (error) {
      
    }
          
  }
  useEffect(()=>{
    getApiCartData()
  },[])


  return (
    <Box width='100vw' height='100vh' bgcolor='green' display='flex' flexDirection='column'>
    <Box width='20%' height='10%' mx='auto'  mt='50px'><Typography fontSize='30px' fontWeight='bold'>Shopping Cart</Typography></Box>
    {

     cartData.map((val)=>
    <Box width='80%' height='60%'  mx='auto' bgcolor='yellowgreen' mt='50px' display='flex' flexDirection='column' alignItems='center'>
      <Box display='flex'  width='90%' height='10%' justifyContent='space-evenly' alignItems='center'>
        <Box height='100%' width="15%" textAlign='center'><Typography fontWeight='bold'>Products</Typography></Box>
        <Box height='100%' width="15%" textAlign='center'><Typography fontWeight='bold'>Type</Typography></Box>
        <Box height='100%' width="15%" textAlign='center'><Typography fontWeight='bold'>Price</Typography></Box>
        <Box height='100%' width="15%" textAlign='center'><Typography fontWeight='bold'>Quantity</Typography></Box>
        <Box height='100%' width="15%" textAlign='center'><Typography fontWeight='bold'>Subtotal</Typography></Box>
      </Box>
      <Divider/>
      <Box display='flex' width='90%' height='28%' justifyContent='space-evenly' alignItems='center'>
        <Box height='100%' width="15%" textAlign='center' sx={{backgroundImage:`url(${val.productImage})`,backgroundSize:'cover'}}></Box>
        <Box height='100%' width="15%" textAlign='center' ><Typography mt='30%'>{val.productName}</Typography></Box>
        <Box height='100%' width="15%" textAlign='center'><Typography mt='30%'>{val.productPrice}</Typography></Box>
        <Box height='100%' width="15%" textAlign='center'><TextField onChange={(e)=>e.target.value} sx={{mt:'20%'}}></TextField></Box>
        <Box height='100%' width="15%" textAlign='center'><TextField sx={{mt:'20%'}}></TextField></Box>
      </Box>
      <Divider/>
     
    </Box>
  )}

  </Box>
)
  
}

export default Cart