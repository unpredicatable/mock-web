


import {combineReducers} from 'redux'
import {Login} from './login'


const Reducers =  combineReducers(
    {
        Login
    }
)


export default (state, action) => {
    return Reducers(state, action)
}

