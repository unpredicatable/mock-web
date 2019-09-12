import React from 'react'
import { Route, HashRouter , Redirect} from 'react-router-dom'

// TODO  懒加载
import  Login from '../pages/Login'
import Home from '../pages/Home'

const Routers = () => {
    return <HashRouter>
            <Route exact path='/' component={()=> <Redirect to={'/login'}></Redirect> } ></Route>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/home' component={Home}/>
        </HashRouter>
}


export default  Routers
