import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {charactersReducer} from "./slices";

const rootReducer = combineReducers({
    characters: charactersReducer
});

const setupStore=() => configureStore({
    reducer:rootReducer
});

export {
    setupStore
}