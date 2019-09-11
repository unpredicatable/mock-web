import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Routers from 'ROOT/router/index'

// antd 默认为英文， ConfigProvider，转换为中文
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Routers />
    </ConfigProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
