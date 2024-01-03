import { createSlice } from "@reduxjs/toolkit"

export const utentiSlice = createSlice({
    name: 'utenti',
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
        reset: (state, action) => {
            // Azzera completamente la slice
            return {
                value: [],
            };
        },
    },
})


export const { add, reset } = utentiSlice.actions

export const selectUtenti = state => state.utenti;

export const utentiReducer = utentiSlice.reducer



