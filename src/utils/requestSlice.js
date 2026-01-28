import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addToRequests:(state,action)=>{
            return action.payload;
        },
        clearFromRequests:(state,action)=>{
            const updatedRequests = state.filter(obj=>obj._id!==action.payload)
            return updatedRequests;
        }
    }
})

export const {addToRequests,clearFromRequests} = requestSlice.actions;
export default requestSlice.reducer;