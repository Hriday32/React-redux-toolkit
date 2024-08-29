import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  color : "",
}

export const themeslice = createSlice({
  name:"theme",
  initialState:initialStateValue,
  reducers:{
    changeTextColor: (state, action)=>{
      state.color = action.payload 
    },
  }
})
export const {changeTextColor}=themeslice.actions

export default themeslice.reducer