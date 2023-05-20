import {createSlice} from "@reduxjs/toolkit";

const initialState={
    comments:[]
};

const slice = createSlice({
    name:'commentsSlice',
    initialState,
    reducers:{
        setAll:(state, action)=>{
            state.comments = action.payload
        },
        create:(state, action) =>{
            state.comments.push(action.payload)
        }
    }
});

const {reducer:commentReducer, actions} = slice;

const commentAction = {...actions};
 export {
     commentAction,
     commentReducer
 }