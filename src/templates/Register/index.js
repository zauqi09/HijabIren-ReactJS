import React, { Component } from 'react';
import { DaftarForm , Input} from '../../components';
import './style.css'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            passwordConfirm : "",
            email :"",
            password : "",
            name :"",
            type :2,
            path : ""
         }
    }
    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
    }
    onRegist =  ()=> {
        const {email,password,name,passwordConfirm,type} = this.state
        const UserList = this.props.userList.find(user => (user.email === email))
        if (email && password){   
            if (UserList){
                window.alert('Email sudah digunakan!');
            }else{
                if (password === passwordConfirm){ 
                    this.props.changedir()
                    window.alert('Berhasil Daftar!')
                    this.props.doRegist({email,password,name,type},this.props.userList)
                    this.props.changedir()
                }   
                else {
                    window.alert('Password tidak sama!'); 
                }
            }
        }
        else {
            window.alert("Email dan Password tidak boleh kosong!")
        }
      }

    render() { 
            if (this.props.statusredirect) {
                return <Redirect to='/masuk'/>;
            }
        return ( 
            <div className="container-fluid skip-nav">  
            <div className="row">
            <div className="col-sm-6 overlay">
                    <h2 className="title">Apakah kamu siap menjadi bagian dari kami?</h2>
            </div>
            <div className="col-sm-6 signup-form">
                <h1 className="font-weight-light" style={{marginTop : "30px"}}>Daftar</h1>
                <form className="formdaftar" action="#" style={{marginTop : "20px"}}>
                <DaftarForm 
                    value={this.state.email} 
                    className="form-control" 
                    type="text" name="email" 
                    placeholder="Email" 
                    onChange={this.onChangeInput} />
                <DaftarForm 
                    value={this.state.name} 
                    className="form-control" 
                    type="text" name="name" 
                    placeholder="Nama"
                    onChange={this.onChangeInput} />

                <DaftarForm 
                    value={this.state.password} 
                    className="form-control" 
                    type="password" name="password" 
                    placeholder="Password"
                    onChange={this.onChangeInput} />

                <DaftarForm 
                    value={this.state.passwordConfirm} 
                    className="form-control" 
                    type="password" name="passwordConfirm" 
                    placeholder="Konfirmasi Password"
                    onChange={this.onChangeInput} />
                
                
                    <div className="m-t-lg">
                    <ul className="list-inline text-center">
                        <li>
                        <Input dataInput={this.state.objDaftar} classInput="btn btn-primary btn-block" nameInput="buttonDaftar" typeInput="button" valueInput="Daftar" onClickInput={this.onRegist} />
                        </li>
                        
                    </ul>
                    </div>
                </form>
            </div>  
        </div>
      </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        userList : state.auth.userListFromApp,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: (dataLogin,userlist) => dispatch({ type: "LOGIN", payload: {dataLogin,userlist}}),
    doRegist: (dataRegister,userlist) => dispatch({ type: "REGISTER", payload: {dataRegister,userlist}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Register)