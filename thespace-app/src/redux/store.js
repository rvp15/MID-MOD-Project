import { configureStore } from '@reduxjs/toolkit'
import podReducer from  '../slices/podSlice'
import galleryReducer from '../slices/gallerySlice'
import likedReducer from    '../slices/likedSlice'

export const store = configureStore({
    reducer:{
        pod:podReducer,
        gallery:galleryReducer,
        liked:likedReducer
    }
})