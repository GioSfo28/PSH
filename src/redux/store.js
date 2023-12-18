import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { citiesReducer } from './citiesSlice'
import { usersReducer } from './usersSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        cities: citiesReducer,
        users: usersReducer,
    },
})