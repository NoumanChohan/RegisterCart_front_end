import React from 'react'
import * as Yup from 'yup'
const SignUpSchema = () => {
  return Yup.object({
    name:Yup.string().required().min(2,'to short name').max(15,'to long name'),
    email:Yup.string().required().email(),
    password:Yup.string().required().min(7,'too short password').max(15,'too long password'),
    confirmPassword:Yup.string().required().oneOf([Yup.ref('password'),null],'password must be match')
  }
    
  )
}

export default SignUpSchema