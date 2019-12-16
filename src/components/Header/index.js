import React, { Component } from 'react'
import styles from './index.module.scss'


  class Header extends Component{
       constructor (props) {
            super(props)
       }

       render () {
           let {userinfo} = this.props
           return (
              <div className={styles.header}>



                  <div className={styles.menu}>
                     <span className={styles.menuitem}>项目</span>
                     {/*<span className={styles.menuitem}>Github</span>*/}
                  </div>


                  <div className={styles.userinfo}>
                      <p>{userinfo.name || 'zyp'}</p>
                      <span className={styles.logout}>退出</span>
                  </div>



              </div>
           )
        }

}

export default Header
