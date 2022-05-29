import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shops",
    initialState: { value: [] },
    reducers: {
        addShop: (state, action) => {
           state.value.push(action.payload)
        }
    }
});
export const { addShop } = shopSlice.actions;
export default shopSlice.reducer;