import React, { Component } from 'react';
import {Modal,Button, FormControl, FormLabel,} from 'react-bootstrap'
import { connect } from "react-redux"
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            name: "",
     }
    }

    componentDidMount = () =>{
        this.setState({
            email : this.props.user.email,
            name : this.props.user.name,
            type : this.props.user.type
        })
    }

    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
        console.log(e.target.name);
    }
    handleClose = () => {
        this.setState({
            setShow : false,
            show : false
        })
    }

    handleShow = () => {
        this.setState({
            setShow : true,
            show : true
        })
    }   
    editProfil= async(name,email) =>{
        await fetch('http://localhost:3010/users/edit/'+email, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            },
            body: JSON.stringify({name,email})
        })
        .then(response => response.json())
        .then(result => {
            window.alert(result.message)
        })
        .catch(error => console.log('error', error))
        this.props.fetchdata()
    }
    handleEdit =() =>{
        const {name,email} = this.state
        this.editProfil(name,email)
    }
    render() { 
        const usr = this.props.user
        return(
            <>
            <Button style={{marginLeft:"20px"}} size="sm" variant="primary" onClick={this.handleShow}>
                Edit
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Produk</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormLabel>Nama</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="name" type="text" value={this.state.name}></FormControl>
                        <FormLabel>Email</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="email" type="text" value={usr.email} readOnly></FormControl>
                        <FormLabel>Tipe Akun</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="type" type="text" value={usr.typename} readOnly></FormControl>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleEdit}>
                            Save
                        </Button>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>        
                </Modal.Footer>
            </Modal>
        </>
        ) 
    }
}
 
const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    dataLogin: state.auth.dataLogin
  })
  const mapDispatchToProps = (dispatch) => ({
    SaveToRedux: (userList) => dispatch({ type: "SAVETOREDUX", payload: userList })
  })  
  
  
export default connect(mapStateToProps,mapDispatchToProps)(EditUser)