
import { createAction } from 'redux-actions'


const SET_USERINFO = 'SET_USERINFO'


export const setUserinfo = createAction(SET_USERINFO)




export const Login = (
    state = { userinfo: {}},
    action
) => {
    switch (action.type) {
        case 'SET_USERINFO' :
            return {userinfo: action.payload.userInfo}
        default:
            return state
    }
}



