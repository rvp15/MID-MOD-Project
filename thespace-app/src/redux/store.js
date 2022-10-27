import { configureStore } from '@reduxjs/toolkit'
import podReducer from  '../slices/podSlice'
import galleryReducer from '../slices/gallerySlice'

export const store = configureStore({
    reducer:{
        pod:podReducer,
        gallery:galleryReducer
    }
})