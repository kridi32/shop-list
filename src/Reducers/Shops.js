import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shops",
    initialState: { value: [] },
    //creating reducers to do CRUD task in the list
    reducers: {
        addShop: (state, action) => {
           state.value.push(action.payload)
        },
        deleteShop: (state, action) => {
             state.value.splice(action.payload, 1)
        }
    }
});
export const { addShop, deleteShop } = shopSlice.actions;
export default shopSlice.reducer;