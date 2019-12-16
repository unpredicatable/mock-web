import React, {Component} from 'react';
import styles from './index.module.scss'
import {Modal} from 'antd'
import APIS from 'ROOT/api/server.js'
import {withRouter} from 'react-router-dom'

class ProjectList extends Component {



    toProjectdetail = (item) => {
        this.props.history.push('/project' + item.id)
    }

    // 复制项目
    copyProject = (item, e) => {
        e.stopPropagation()
        Modal.confirm({
            title: '提示',
            content: '确定复制项目',
            onOk: () => {
                console.log(item, 'copyitems')
                // APIS.addProject({
                //     ...data
                // }).then(res => {
                //     console.log(res)
                this.props.getProjects()
                // })
            }
        })

    }
    edit = (item,e) => {
        e.stopPropagation()
        this.props.setModalParams({data:item, isEditing: true})
        this.props.toggleVisible(true)
    }

    delete = (item,e) => {
        e.stopPropagation()
        Modal.confirm({
            title: '提示',
            content: '确定删除',
            onOk: () => {
                // APIS.deleteProject({
                //
                // }).then(res => {
                //
                // 调用接口
                console.log(item)
                this.props.getProjects()
                // })

            }
        })
    }

    renderItem = (item) => {
        return (
            <div className={styles.projectitem} key={item.id} onClick={() => this.toProjectdetail(item)} >
                <h3>{item.name}</h3>
                <div key={'desc'}>{item.desc}</div>

                <span className={styles.copy} onClick={(e) => this.copyProject(item,e)}>复制</span>

                <div className={styles.operate} key={'ope'}>
                    <span onClick={(e) => this.edit(item,e)} key={'edit'}>
                        <i className={'iconfont icon-bianji'}></i>
                    </span>
                    <span onClick={(e) => this.delete(item,e)} key={'delete'}>
                        <i className={'iconfont icon-shanchu'}></i>
                    </span>
                </div>
            </div>
        )
    }


    render() {
        let {list} = this.props
        return (
            <div className={styles.projects}>
                {
                    list.map(item => {
                        return this.renderItem(item)
                    })
                }
            </div>
        );
    }
}

export default withRouter(ProjectList);
