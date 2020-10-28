import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";


class ModalDataUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tittle :"",
            isOpen :true
         }
    }
    modalLoaded = () => {
        this.setState({tittle: "View Detail"})
        }
    hideModal = () => {
        this.setState({isOpen: false})
    }  

    render() { 
        return ( 
            <Modal show={this.props.isOpen} onHide={this.hideModal} onEntered={this.modalLoaded}>
                <Modal.Header>
                <Modal.Title>{this.props.userData}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.userData}</Modal.Body>
                <Modal.Footer>
                    <button onClick={this.hideModal}>Cancel</button>
                    <button>Save</button>
                </Modal.Footer>
            </Modal> 
         );
    }
}
 
export default ModalDataUser;