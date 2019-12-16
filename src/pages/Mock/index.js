import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header/index'
import Project from '../../components/Project/index'
import styles from './index.module.scss'
import {Switch, Route} from 'react-router-dom'

  class Mock extends Component{
       constructor (props) {
            super(props)
            this.state = {

            }
       }

       componentWillMount(){
          console.log('userinfo', this.props.userinfo)
       }

       render () {
           return (
              <div className={styles.mock}>
                  <Header userinfo={this.props.userinfo}></Header>
                  <div className={styles.content}>

                      <Switch>
                          <Route
                                path={'/mock/home'}
                                // component={}
                          />
                      </Switch>
                     <Project ></Project>

                  </div>
              </div>
           )
        }

}

const mapStateToProps = state => {
   return {
       userinfo: state.Login.userinfo
   }
 }


export default connect(mapStateToProps)( Mock);

