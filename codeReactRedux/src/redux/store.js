import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice' 

export const store = configureStore({
    reducer:{
            counter: counterReducer
    },
})

//Steps
//Create Store
//Wrap app container under Provider
//create Slice
//register reducer in store