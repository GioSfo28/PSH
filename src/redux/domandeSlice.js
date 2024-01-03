import { createSlice } from "@reduxjs/toolkit"

export const domandeSlice = createSlice({
    name: 'domande',
    initialState: {
        value: [
            {
                id: 0,
                name: "Quanti anni hai?",
            },
            {
                id: 1,
                name: "Qual è la tua altezza?",
            },
        ],
    },
})
