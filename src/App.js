import React, {Component }from 'react';
import {Register,Login,Beranda,Tentang,HubungiKami,Navigation,Footer,DataUser} from "./templates"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
class App  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      defaultPass : "123",
      defaultType : 2,
      userList : [{
          email : "admin@admin.com",
          name : "admin",
          password : "123",
          type : 1
      }],
      userListAPI : [],
      isLoggedIn : false,
      redirect : false,
      AdminLoggedIn : false,
      whoLogin : ""
     }
  }

  componentDidMount= async() =>{
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({ userListAPI: json }))
        const APIUser = this.state.userList
        this.state.userListAPI.forEach(usr => {
          let obj = {
            name: usr.name,
            email: usr.email,
            password : this.state.defaultPass,
            type : this.state.defaultType
          }
          APIUser.push(obj)
        })        
        this.setState({
          userList:APIUser
        })
        console.log(APIUser)
        
        
  }

  
  StatusLogin = ()=>{
      this.setState((oldState) => (
        {isLoggedIn: !oldState.isLoggedIn}))
      }
  BacktoFalseAdminLogin = ()=>{
    this.setState({
      AdminLoggedIn:false
    })
  }
  ChangeDirect = ()=>{
    this.setState((oldState) => (
      {redirect: !oldState.redirect}))
      
  }

  ReturnTypeAccountAdmin = (type,who)=>{
    if(type===1){
      this.setState({
        AdminLoggedIn:true,
        whoLogin:who
      })
    }else {
      this.setState({
        whoLogin:who
      })
    }
  }

  onLogin = async obj => {
    const {email, password } = obj
    if (email && password){    
      let statusLogin = this.state.userList.find(user => (user.email === email && user.password === password))
      if (statusLogin){
          window.alert('Berhasil Login!')
          await this.StatusLogin()
          await this.ChangeDirect()
          this.ReturnTypeAccountAdmin(statusLogin.type,statusLogin.email)
          console.log("Updated Status Login : ",this.state.isLoggedIn)
          console.log("Status Redirect : ",this.state.redirect)
          console.log("Apakah Admin Login? : ",this.state.AdminLoggedIn)
          console.log("Siapa Bro yang Login? : ",this.state.whoLogin)
          
      }else {
          window.alert('Password atau Email Tidak Sesuai')
      }
    }
    else {
        window.alert("Email dan Password tidak boleh kosong!")
    }
    
  }

  onRegist = async obj => {
    const { name, email, password,type,passwordConfirm } = obj
    const UserList = this.state.userList.find(user => (user.email === email))
    let OldUser = this.state.userList
    OldUser.push({
      name, 
      email,
      password,
      type
    })
    if (email && password){   
        if (UserList){
            window.alert('Email sudah digunakan!');
        }else{
            if (password === passwordConfirm){ 
                await this.setState({
                  userList:OldUser
                })
                await this.ChangeDirect()
                window.alert('Berhasil Daftar!');
                console.log("Updated List : ",this.state.userList)
                console.log("Updated Status Login : ",this.state.isLoggedIn)
                console.log("Status Redirect : ",this.state.redirect)
                this.ChangeDirect()
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
            <>
            <Router>
              <Navigation backtofalse={this.BacktoFalseAdminLogin} isLoggedIn={this.state.isLoggedIn} redir={this.ChangeDirect} statUs={this.StatusLogin}/>
              <Switch>
                <Route path="/" exact component={() => <Beranda />} />
                <Route path="/data-user" exact component={() => <DataUser whoLoggedIn={this.state.whoLogin} isAdminLoggedIn={this.state.AdminLoggedIn} dataUser={this.state.userList} isLoggedIn={this.state.isLoggedIn}/>} />
                <Route path="/tentang" exact component={() => <Tentang />} />
                <Route path="/hubungi-kami" exact component={() => <HubungiKami isLoggedIn={this.state.isLoggedIn}/>} />
                <Route path="/masuk" exact component={() => <Login userList={this.state.userList} isLoggedIn={this.state.isLoggedIn} Login={this.onLogin} statusredirect={this.state.redirect}/>} />
                <Route path="/daftar" exact component={() => <Register userList={this.state.userList} Regist={this.onRegist} statusredirect={this.state.redirect}/>} />
              </Switch>
              <Footer />
            </Router>
            </>
        );
    }
}   
export default App;