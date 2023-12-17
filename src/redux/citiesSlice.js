import { createSlice } from "@reduxjs/toolkit"

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                name: "Tokyo",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reprehenderit.",
                imgURL: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRva3lvfGVufDB8fDB8fHww",
                isVisited: false,
            },
            {
                id: 1,
                name: "New York",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reprehenderit.",
                imgURL: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
                isVisited: false,
            },
            {
                id: 2,
                name: "Rome",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reprehenderit.",
                imgURL: "https://plus.unsplash.com/premium_photo-1661962551246-49ffac5cff8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJvbWV8ZW58MHx8MHx8fDA%3D",
                isVisited: true,
            },
            {
                id: 3,
                name: "Paris",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, reprehenderit.",
                imgURL: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyaXN8ZW58MHx8MHx8fDA%3D",
                isVisited: true,
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})


export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer