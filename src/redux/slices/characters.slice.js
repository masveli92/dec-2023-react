import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    characters: [],
    nextPage:null,
    prevPage:null,
};

const slice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers:{
        setCharacters:(state, action)=>{
          const{results, info: {next, prev}} =  action.payload
          state.characters = results
          state.nextPage = next
          state.prevPage = prev
        }
    }
});

const {reducer:charactersReducer, actions} = slice;

const charactersActions = {...actions};

export {
    charactersActions,
    charactersReducer
}