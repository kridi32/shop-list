import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shops",
    initialState: { value: [] },
    reducers: {
        addShop: (state, action) => {
           state.value.push(action.payload)
        },
        deleteShop: (state, action) => {
            state.value.splice(state.value.indexOf(action.payload))
        }
    }
});
export const { addShop, deleteShop } = shopSlice.actions;
export default shopSlice.reducer;