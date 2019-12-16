
import React, { Component } from 'react'


const CreateModal = (ModalCom) => {
    return (Comp) => {

        return class extends Component {
            constructor(props, context){
                super(props, context)
                this.state = {
                    visible: false,
                    modalParams: {}
                }
            }

            toggleVisible = (show) => {
                this.setState({visible: show})
            }


            setModalParams = (modalParams) => {
                this.setState({modalParams: modalParams})
            }


            render(){
                return (
                        <Comp
                            toggleVisible={this.toggleVisible}
                            setModalParams={this.setModalParams}
                            renderModal={this.renderModal}
                            {...this.props}
                        />
                )
            }
        }

    }

}

export default CreateModal
