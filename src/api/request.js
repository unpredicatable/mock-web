// 使用axios

import { message } from "antd";
import axios from "axios";


// axios.defaults.withCredentials = true

// 公用请求拦截
axios.interceptors.response.use(function (response) {
    var data = response.data;

    if (data.code === 0 ) {  //返回成功
        return data;
    } else {
        message.error(data.msg);
        return Promise.reject(data);
    }
}, function (error) {
    message.error("网络错误");
    return Promise.reject(error);
});


export default {
    get: function get(url, param) {
        var extraParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return axios.get(url, Object.assign({}, { params: param }, extraParam ));
    },
    post: function post(url, param) {
        var extraParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return axios.post(url, param, extraParam);
    }
};
