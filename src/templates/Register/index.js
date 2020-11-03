import React, { Component } from 'react';
import { DaftarForm } from '../../components';
import './style.css'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
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

    postData= (dataRegist)=>{
        fetch('http://localhost:3010/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataRegist)
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    onRegist =  ()=> {
        const {email,password,name,passwordConfirm,type} = this.state
        const UserList = this.props.userList.find(user => (user.email === email))
        if (email && password){   
            if (UserList){
                window.alert('Email sudah digunakan!');
            }else{
                if (password === passwordConfirm){ 
                    window.alert('Berhasil Daftar!')
                    this.postData({email,name,password,type})
                    this.props.doLogin({email,password,type})
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
                        <Link to="/" className="btn btn-primary btn-block" name="buttonDaftar" type="button" value="Daftar" onClick={this.onRegist} >Daftar</Link>
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
    doLogin: (dataLogin) => dispatch({ type: "LOGIN", payload: dataLogin}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Register)