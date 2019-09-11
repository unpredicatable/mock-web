import React, {Component} from 'react';
import {Form, Input,Button } from 'antd'
import styles from './index.module.scss'
import APIS from 'ROOT/api/server.js'
const FormItem = Form.Item


class Login extends Component {


    componentWillMount(){
        APIS.test().then(res => {
            console.log(res)
        })
    }

    handleSubmit = () => {
        let {form} = this.props


        form.validateFields((err, values) => {
            if(err){
                return
            }
            // console.log(values)
            APIS.register(
                values
            ).then(res => {
                console.log(res)
            })
        })



    }

    render() {
        let {getFieldDecorator} = this.props.form
        return (
            <div className={styles['login']}>

                <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>

                    <FormItem >
                        {
                            getFieldDecorator('userName', {
                                rules:[
                                    {
                                        required: true,
                                        message: '请输入账号',
                                    }
                                ]
                            })(<Input placeholder={'请输入账号'} prefix={<i className={'iconfont icon-user'}></i>}/>)
                        }
                    </FormItem>

                    <FormItem>
                        {
                            getFieldDecorator('passWord', {
                                rules:[
                                    {
                                        required: true,
                                        message: '请输入密码',
                                    }
                                ]
                            })(<Input
                                type="password"
                                placeholder={'请输入密码'}
                                prefix={<i className={'iconfont icon-password'}></i>}
                            />)
                        }
                    </FormItem>

                    <FormItem  className={styles['login-form-button']} >
                        <Button type="primary" htmlType="submit" block >
                            注册
                        </Button>
                    </FormItem>

                </Form>


            </div>
        );
    }
}

export default Form.create()(Login);
