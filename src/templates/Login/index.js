import React, { Component } from 'react';
import imghijab from "../../img/hijab.jpg"
import { LoginForm , Input} from '../../components';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email :"",
            password : "",
            dataLogin :{}
    }
}

    // componentDidMount = () =>{
    //     fetch('127.0.0.1:3010/user', {mode:'cors'})
    //     .then(response => response.json())
    //     .then(json => json.map(user =>this.props.SaveToRedux(user)))
    // }
    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
    }
    postData= async(dataLogin)=>{
        await fetch('http://localhost:3010/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataLogin)
        })
        .then(response => response.json())
        .then(result => {
            window.alert(result.message)
            console.log(result);
            let dataUser = result.data[0].dataUser
            let token = result.data[0].token
            this.props.doLogin({dataUser,token})
        })
        .catch(error => console.log("User tidak terdaftar"));
    }
    onLogin = () => {
        const { email, password } = this.state
        if (email && password){    
            this.postData({email,password})
        }
        else {
              window.alert("Email dan Password tidak boleh kosong!")
        }
    }
        
        
    render() { 
        const {email, password} = this.props
            if (this.props.statusLogin) {
                return <Redirect to="/" />;
            }
        return ( 
            <>
                <div style={{height: "80%"}}>
                    <img src={imghijab} className="login" alt=""/>
                </div>
                <div className="container skip-nav-login" style={{marginTop:"120px"}}>
                    <div className="row justify-content-center mt-5">
                    <div className="col-md-4 skip-nav-login">
                        <div className="card">  
                        <div className="card-header bg-alice mb-0">
                            <h5 className="text-center">
                                Silahkan 
                                <span className="font-weight-bold text-primary">Masuk</span>
                            </h5>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <LoginForm value={email} className="form-control" type="text" name="email" placeholder="Email" onChange={this.onChangeInput} />
                                <LoginForm value={password} className="form-control" type="password" name="password" placeholder="Password" onChange={this.onChangeInput} />
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"/>
                                    <label className="custom-control-label">Remember me</label>
                                </div>
                                <Input classInput="btn btn-primary btn-block"  typeInput="button" nameInput="buttonLogin" valueInput="Masuk" onClickInput={this.onLogin}/>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </>  
         );
        }
    
}
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: (dataLogin) => dispatch({ type: "LOGIN", payload: dataLogin}),
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)