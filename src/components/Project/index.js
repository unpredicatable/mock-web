
import React, { Component } from 'react'
import styles from './index.module.scss'
import CreateProject from 'ROOT/components/CreateProject'
import APIS from 'ROOT/api/server.js'
import listData from 'ROOT/mock/getProjectList'
import ProjectList from "./ProjectList";

class Project extends Component{
       constructor (props) {
            super(props)
            this.state = {
                visible: false,
                modalParams: {},
                projectList: []
            }
       }

       getProjects = (data) => {
            console.log('list',listData)
           // APIS.getProjectList({
           //
           // }).then(res => {
           //
           this.setState({
               projectList: [{
                   ...data,
                   id:1
               }]
           })
           // })
       }

       addProject = () => {
            this.setModalParams({
                isEditing: false
            })
            this.toggleVisible(true)
       }

        toggleVisible = (show) => {
            this.setState({visible: show})
        }


        setModalParams = (modalParams) => {
           console.log(modalParams, '')
            this.setState({modalParams: modalParams})
        }

       handleConfirmCb = (data) => {
           this.getProjects(data)
       }

       render () {
           let {projectList} = this.state
           return (
              <div>

                  <div>
                      <span className={`${styles.myproject} ${styles.active}`}>我的项目</span>
                      <i className={`iconfont icon-add ${styles.addBtn}`} onClick={this.addProject} title={'添加项目'}></i>
                  </div>

                  <div>
                      <ProjectList
                          list={projectList}
                          getProjects={this.getProjects}
                          toggleVisible={this.toggleVisible}
                          setModalParams={this.setModalParams}
                      />
                  </div>

                  {
                      this.state.visible
                      ? <CreateProject
                              modalParams={this.state.modalParams}
                              toggleVisible={this.toggleVisible}
                              handleConfirmCb={this.handleConfirmCb}
                          />
                      : null
                  }

              </div>
           )
        }

}

export default Project
