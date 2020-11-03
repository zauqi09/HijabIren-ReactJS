import React, { Component } from 'react';
import {Modal,Button, FormControl, FormLabel,} from 'react-bootstrap'
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            name: "",
            password: "",
            passwordConfirm : "",
            type: 0,
     }
    }

    componentDidMount = () =>{
        const index = this.props.index
        this.setState({
            email : this.props.user[index].email,
            name : this.props.user[index].name,
            password : this.props.user[index].password,
            type : this.props.user[index].type
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
    editProfil= async(Obj,email) =>{
        await fetch('http://localhost:3010/edit/'+email, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Obj)
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        window.location.reload()
    }
    handleEdit =() =>{
        const {name,email,password,passwordConfirm,type} = this.state
        if (password === passwordConfirm){
            this.editProfil({name,email,password,type},email)
            window.alert("Data telah tersimpan")
        } else {
            window.alert("Password tidak sama")
        }
    }
    render() { 
        const usr = this.props.user
        const index = this.props.index
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
                        <FormControl onChange={this.onChangeInput} name="email" type="text" value={usr[index].email} readOnly></FormControl>
                        <FormLabel>Tipe Akun</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="type" type="text" value={usr[index].type===1?"Admin":"User"} readOnly></FormControl>
                        <FormLabel>Password</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="password" type="password" ></FormControl>
                        <FormLabel>Konfirmasi Password</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="passwordConfirm" type="password" ></FormControl>
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
 
export default EditUser;