import React from 'react'
import * as Yup from 'yup'
const LoginSchema = () => {
    return Yup.object({
        email:Yup.string().required().email(),
        password:Yup.string().required().min(7,'too short password').max(15,'too long password'),
       
      })
}

export default LoginSchema