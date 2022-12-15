import { Box, Button, Card, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../Redux/MyReducer'

const Products = () => {

  const [data, setdata] = useState([])
  const dispatch=useDispatch()
  const getApiData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/Product')
      setdata(res.data)
    } catch (error) {

    }

  }
  useEffect(() => {
    getApiData()
  }, [])
 const addCart=async(props)=>{
  try {
  
    const cartRes=await axios.post('http://localhost:5000/api/CartProduct',props)
    dispatch(increment())

  } catch (error) {
    
  }
  
 }




  return (

    <Box width='100vw' height='92vh' display='flex' flexDirection='column' alignItems='center'>
      <Typography height='5%' width='90%' sx={{ fontWeight: '800', fontSize: '30px', mt: '10px' }} >Available Products</Typography>
      <Grid container spacing={2} sx={{ mt: '50px', backgroundColor: '	red', }}>
        {
          data.map((val, ind) =>
            <Grid key={ind} item lg={3} >

              <Card elevation={10} sx={{ height: '50vh', backgroundColor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: '50%' ,backgroundImage:`url(${val.productImage})`,backgroundSize:'cover'}}></Box>
                <Box sx={{ width: '100%', height: '40%', display: 'flex', flexDirection: 'column' }}>
                  <Typography fontSize='large' sx={{ mt: '5px', ml: '5px' }}>{val.productName}</Typography>
                  <Typography fontSize='small' sx={{ ml: '5px' }}>{val.productPrice}</Typography>
                </Box>
                <Button onClick={()=>addCart(val)} variant='contained' size='small' sx={{ mb: '5px', backgroundColor: 'orange', width: '120px', ml: '5px', borderRadius: '10px' }}>Add to Cart</Button>

              </Card>
            </Grid>


          )
        }
      </Grid>
    </Box>
  )
}

export default Products
