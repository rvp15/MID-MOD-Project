import { configureStore } from '@reduxjs/toolkit'
import podReducer from  '../slices/podSlice'

export const store = configureStore({
    reducer:{
        pod:podReducer
    }
})