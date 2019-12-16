import React, {Component} from 'react';
import {Form, Input,Button, message } from 'antd'
import styles from './index.module.scss'
import APIS from 'ROOT/api/server.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setUserinfo} from 'ROOT/store/reducer/login'

const md5 = require('md5')

const FormItem = Form.Item




class Login extends Component {


    constructor(props){
        super(props)
        this.state = {
            isRegister: false
        }
    }


    componentWillMount(){
        console.log(this.props)
        // APIS.test().then(res => {
        //     console.log(res)
        // })
    }

    handleSubmit = () => {
        let {form} = this.props
        let {isRegister} = this.state

        form.validateFields((err, values) => {
            if(err){
                return
            }


            if(isRegister){
                APIS.register(
                    {
                        ...values,
                        passWord: md5(values.passWord)
                    }
                ).then(res => {
                    message.success('注册成功,请登录')
                    this.setState({
                        isRegister: false
                    })
                })
            }else{
                APIS.login(
                    {
                        ...values,
                        passWord: md5(values.passWord)
                    }
                ).then(res => {
                    message.success('登录成功')
                    // userInfo 存入store
                    this.props.setUserinfo({userInfo: res.userInfo})
                     this.props.history.push('/home')
                },err => {
                    // message.error('账号或密码错误，请重试')
                })
            }
            // console.log(values)

        })



    }


    toRegister = () => {
        this.setState({
            isRegister: true
        })
    }

    toLogin = () => {
        this.setState({
            isRegister: false
        })
    }

    render() {
        let {isRegister} = this.state
        let {getFieldDecorator} = this.props.form
        return (
            <div className={styles['wrap']} >
                <div className={styles['login']} >

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
                                })(<Input
                                    placeholder={'请输入账号'}
                                    prefix={<i className={'iconfont icon-user'}
                                    ></i>}/>)
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

                        {
                            isRegister
                            ?   <>
                                    <FormItem>
                                        {
                                            getFieldDecorator('tel', {
                                                rules:[
                                                    {
                                                        required: true,
                                                        message: '请输入手机号',
                                                    }
                                                ]
                                            })(<Input
                                                placeholder={'请输入手机号'}
                                                prefix={<i className={'iconfont icon-mobile'}></i>}
                                            />)
                                        }
                                    </FormItem>
                                    <FormItem>
                                        {
                                            getFieldDecorator('email', {
                                                rules:[

                                                ]
                                            })(<Input
                                                placeholder={'请输入邮箱'}
                                                prefix={<i className={'iconfont icon-email'}></i>}
                                            />)
                                        }
                                    </FormItem>
                                </>
                            :   null
                        }

                        <FormItem  className={styles['login-form-button']} >
                            <Button type="primary" htmlType="submit" block >
                                {
                                    isRegister
                                    ? '注册'
                                    : '登陆'
                                }
                            </Button>
                        </FormItem>

                        {
                            isRegister
                            ?   <FormItem  >
                                    <span className={styles['to-register']} onClick={this.toLogin}>已账号， 去登录～</span>
                                </FormItem>
                            :   <FormItem  >
                                    <span className={styles['to-register']} onClick={this.toRegister}>尚未有账号， 去注册～</span>
                                </FormItem>
                        }



                    </Form>

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
    }
  }


const mapActions = ()=> {
    return {
        setUserinfo
    }
}


export default connect(mapStateToProps, mapActions())(Form.create()( withRouter(Login)));
