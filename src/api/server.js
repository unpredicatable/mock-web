import request from './request'


const baseUrl = 'http://10.1.68.50:8888'

export default {
    test (){
        return  request.get(baseUrl + '/user/get', {})
    },
    register (param){
        return  request.post(baseUrl + '/user/register', param)
    },
    login (param){
        return  request.post(baseUrl + '/user/login', param)
    },
    addProject(param){
        return request.post(baseUrl + '/project/add', param)
    },
    getProjectList(param){
        return request.get(baseUrl + '/project/list', param)
    },
    deleteProject(param){
        return request.post(baseUrl + '/project/delete', param)
    },
    getProjectDetail(param){
        return request.get(baseUrl + '/project/detail', param)
    }

}

