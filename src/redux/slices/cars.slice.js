import {createAsyncThunk, createSlice, isPending, isRejectedWithValue, isFulfilled, current} from "@reduxjs/toolkit";

import {carsService} from "../../services";

let initialState = {
    cars:[],
    carForUpdate: null,
    trigger: null,
    loading: false,
    error:null
};
const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, thunkAPI)=>{
        try {
            const {data} = await carsService.getAll();
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carsSlice/create',
    async ({car}, thunkAPI)=>{
        try {
            await carsService.create(car)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const update = createAsyncThunk(
    'carsSlice/update',
    async ({car, id}, thunkAPI)=>{
        try {
            await carsService.updateById(id,car)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async ({id}, thunkAPI)=>{
        try {
            await carsService.delete(id)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name:'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
            console.log(current(state.cars));
        }
    },
    //вариант 1
    // extraReducers:{
    //    [getAll.fulfilled]:(state, action) =>{
    //        state.cars = action.payload
    //    },
    //    [create.fulfilled]: state=>{
    //        state.trigger = !state.trigger
    //    }
    // }

  // вариант 2
 //    extraReducers:builder =>
 //        builder
 //            .addCase(getAll.fulfilled, (state, action) => {
 //                state.cars = action.payload
 //                state.loading = false
 //            })
 //            .addCase(getAll.pending, state => {
 //                state.loading = true
 //            })
 //            .addCase(create.fulfilled, state => {
 //                state.trigger = !state.trigger
 //                state.loading = false
 //            })
 //            .addCase(create.pending, state => {
 //                state.loading =true
 //            })
 //            .addCase(create.rejected, (state, action) => {
 //                state.error = action.payload
 //                state.loading = false
 //            })
 // });
      //  вариант 3
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null
            })
            // .addDefaultCase((state, action) => {
            //    console.log(action.type);
            // })
            .addMatcher(isPending(), state => {
                state.loading = true
                state.error = null
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addMatcher(isFulfilled(create, update, deleteCar), state => {
                state.trigger = !state.trigger
            })
});

const {reducer:carReducer, actions} = slice;

const carAction = {...actions, getAll, create, update, deleteCar};

export {
    carReducer,
    carAction
}