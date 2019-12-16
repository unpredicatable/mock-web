
import React, { Component } from 'react'
import {Modal} from 'antd'
import {Form, Input,Button, message, Select } from 'antd'
import APIS from 'ROOT/api/server.js'
import styles from './index.module.scss'
import {dealOptions} from 'ROOT/Util'
import {METHODS, formLayout} from 'ROOT/constant'

const FormItem = Form.Item
const TextArea = Input.TextArea

  class CreateProject extends Component{
       constructor (props) {
            super(props)
       }



       componentWillMount(){

       }

       handleCancel = () => {
           this.props.toggleVisible(false)
       }




       handleConfirmCb = () => {
           let {form} = this.props

           form.validateFields((err, values) => {
               if (err) {
                   return
               }
               this.handleCancel()
               let data = values
               console.log(data, this.props.userinfo)
               // APIS.addProject({
               //     ...data
               // }).then(res => {
               //     console.log(res)
               this.props.handleConfirmCb(data)
               // })
           })

       }

       render () {
           let {getFieldDecorator} = this.props.form
           let {modalParams} = this.props
           let { data = {} } = modalParams

           return (
              <Modal
                title={modalParams.isEditing? '编辑项目' : '添加项目'}
                visible={true}
                maskClosable={false}
                onOk={this.handleConfirmCb}
                onCancel={this.handleCancel}
              >
                  <div className={styles.form}>
                      <Form {...formLayout}>
                          <FormItem label={"项目名"}>
                              {
                                  getFieldDecorator('name', {
                                      rules:[
                                          {
                                              required: true,
                                              message: '请输入项目名',
                                          }
                                      ],
                                      initialValue: data.name || ''
                                  })(<Input
                                      placeholder={'请输入项目名'}
                                      />)
                              }
                          </FormItem>
                          <FormItem label={"请求方法"}>
                              {
                                  getFieldDecorator('method', {
                                      rules:[
                                          {
                                              required: true,
                                              message: '请输入请求方法',
                                          }
                                      ],
                                      initialValue: data.method || 'get'
                                  })(<Select>
                                      {dealOptions(METHODS)}
                                  </Select>)
                              }
                          </FormItem>
                          <FormItem label={"baseUrl"}>
                              {
                                  getFieldDecorator('baseUrl', {
                                      rules:[],
                                      initialValue: data.baseUrl || ''
                                  })(<Input
                                      placeholder={'请输入baseUrl'}
                                  />)
                              }
                          </FormItem>
                          <FormItem label={"项目描述"}>
                              {
                                  getFieldDecorator('desc', {
                                      rules:[
                                          {
                                              required: true,
                                              message: '请输入项目描述',
                                          }
                                      ],
                                      initialValue: data.desc || ''
                                  })(<TextArea
                                      placeholder={'请输入项目描述'}
                                  />)
                              }
                          </FormItem>
                      </Form>
                  </div>

              </Modal>
           )
        }

}

export default Form.create()(CreateProject)
