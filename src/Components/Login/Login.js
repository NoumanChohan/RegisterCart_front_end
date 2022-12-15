import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginSchema from './LoginSchema'

const Login = () => {
    const navigate=useNavigate()
const initialValues={
    email:"",
    password:''
}

      const{handleBlur,handleChange,handleSubmit,values,errors}=useFormik({
        initialValues:initialValues,
        validationSchema:LoginSchema,
        onSubmit:async(values,action)=>{
            try {
                const res=await axios.post('http://localhost:5000/api/LoginUser',values)
                if (res.status===200) {
                console.log(values)
                action.resetForm()
                navigate('/Products')
                }
            } catch (error) {
                console.log(error.message)
            }
             
        }
      })
 
    

    
    return (
        <form onSubmit={handleSubmit}>
        <Box height='90vh' width='100vw' display='flex' justifyContent='center' alignItems='center'>
            <Box height='90%' width='90%' display='flex' justifyContent='space-around' alignItems='center'>
                <Box height='90%' width='45%' sx={{ backgroundImage: 'url(data:image/jpeg;base64,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)', backgroundSize: 'cover' }}>
                </Box>
                <Box height='90%' width='45%' display='flex' flexDirection='column' justifyContent='space-around' alignItems='center'>
                    <Typography fontWeight='bold' fontSize='30px'>LogIn</Typography>
                    <TextField variant='filled' label='Email' size='small' name='email' value={values.email} helperText={errors.email} onChange={handleChange} sx={{ width: '70%' }}></TextField>
                    <TextField variant='filled' label='Password' size='small' name='password' type='password' value={values.password} helperText={errors.password} onChange={handleChange} sx={{ width: '70%' }}></TextField>
                    <Box height='8%' width='50%' display='flex' justifyContent='space-around' mb='15%'>
                      <Button type='submit' variant='contained' sx={{fontWeight:'bold',color:'white'}}>LogIn</Button>
                      <Link style={{textDecoration:'none'}} to={'/SignUp'}> <Button variant="contained" sx={{fontWeight:'bold',color:'white'}}>Sign Up</Button> </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
        </form>
    )
}

export default Login