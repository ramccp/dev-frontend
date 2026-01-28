import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addToConnection:(state,action)=>{
            return action.payload;
        }
    }
})

export const {addToConnection} = connectionSlice.actions;
export default connectionSlice.reducer;