import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addToFeed:(state,action)=>{
            return action.payload;
        },
        clearFromFeed:(state,action)=>{
            const updatedFeed = state.filter(obj=>obj._id!==action.payload)
            return updatedFeed;
        }
    }
})

export const {addToFeed,clearFromFeed} = feedSlice.actions;
export default feedSlice.reducer;