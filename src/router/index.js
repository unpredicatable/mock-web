import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

// TODO  懒加载
import  Login from '../pages/Login'

const Routers = () => {
    return <HashRouter>
        <Route exact path='/login' component={Login}/>
    </HashRouter>
}


export default  Routers
