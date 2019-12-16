import React, { Component } from 'react'

import {Form, Input,Button, message, Select } from 'antd'
const Option = Select.Option


export const dealOptions = (originData, isPlain = true) => {

    return originData.map(item => {
        let value, text
        if(isPlain){
            value = item
            text = item
        }else{
            value = item.value
            text = item.text
        }
        return (
            <Option value={value} key={value}>{text}</Option>
        )
    })
}
