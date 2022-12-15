import { AddShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const WebBar = () => {
  const value = useSelector((state) => state.counterReducer.counter)
  console.log(value)
  return (
    <Box bgcolor='grey' sx={{ width: '100vw', height: '10vh' }}>

      <AppBar elevation={5} sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
        <Toolbar variant="regular" sx={{ width: '95%', height: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }} >
          <Box sx={{ width: '20%', height: '90%', backgroundColor: 'green' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMnri2y5-lKCZg7PZb_egXMbJp16TS8fYqmA&usqp=CAU" width='100%' height='100%'></img></Box>
          <Box sx={{ width: '40%', height: '90%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: 'grey', }}>
            <Link style={{ textDecoration: 'none', color: 'grey' }} to={'/'} > <Typography sx={{ fontWeight: 'bold' }}>Home</Typography></Link>
            <Typography sx={{ fontWeight: 'bold' }}>Features</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Support</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Blog</Typography>
          </Box >
          <Box sx={{ width: '20%', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Link style={{ textDecoration: 'none' }} to={'/logIn'}>  <Button variant="contained" sx={{ fontWeight: 'bold', color: 'white' }}>Login</Button></Link>

            <Link style={{ textDecoration: 'none' }} to={'/Cart'}>
              <Badge badgeContent={value}><AddShoppingCart /></Badge>
            </Link>


          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  )

}

export default WebBar