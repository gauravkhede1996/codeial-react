import { createSlice } from "@reduxjs/toolkit";
import e from "cors";
export const userSlice=createSlice({
    name:"user",
    initialState:{
        username:null
    },
    reducers:{
        login:(state,action)=>{
            state.username=action.payload
        },
        logout:(state)=>{
            state.username=null
        },
    },
});

export const {login,logout} =userSlice.actions;

export const selectUser=(state)=>{ return state.user.user};

export default userSlice.reducer;