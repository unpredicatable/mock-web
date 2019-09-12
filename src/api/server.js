import request from './request'

export default {
    test (){
        return  request.get('http://127.0.0.1:8888/get', {})
    },
    register (param){
        return  request.post('http://127.0.0.1:8888/register', param)
    },
    login (param){
        return  request.post('http://127.0.0.1:8888/login', param)
    }
}

