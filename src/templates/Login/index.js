import React, { Component } from 'react';
import imghijab from "../../img/hijab.jpg"
import { LoginForm , Input} from '../../components';
import { Redirect } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email :"",
            password : "",
    }
}
    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
    }

    onLogin = async() => {
        const { email, password } = this.state
        this.props.Login({ email, password })
    }
    
    render() { 
        const {email, password} = this.props
            if (this.props.isLoggedIn) {
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
 
export default Login;