import { createSlice } from "@reduxjs/toolkit"
import { useReducer } from "react"


    const initialState={counter:0}
    const MyReducer=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment:(state)=>{
           state.counter+=1
        },
        decrement:(state)=>{
            state.counter-=1
        }
    }
   })


export default MyReducer.reducer
export const {increment,decrement}=MyReducer.actions