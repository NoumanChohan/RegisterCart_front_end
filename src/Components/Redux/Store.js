import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import MyReducer from './MyReducer'

export const Store = configureStore({
    reducer:{
        counterReducer:MyReducer
    }
})
