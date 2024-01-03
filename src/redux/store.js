import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { citiesReducer } from './citiesSlice'
import { usersReducer } from './usersSlice'
import { utentiReducer } from './utentiSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        cities: citiesReducer,
        users: usersReducer,
        utenti: utentiReducer,
    },
})