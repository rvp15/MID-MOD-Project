import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    pod: {}
}
export const podSlice = createSlice({
    name: 'pod',
    initialState,
    reducers: {
      setpod:(state,action)=>{
        state.pod = action.payload
        }
    }
})

export const {setpod} = podSlice.actions

export default podSlice.reducer