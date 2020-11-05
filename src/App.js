import React, {Component }from 'react';
import {Register,Login,Beranda,Tentang,HubungiKami,Navigation,Footer,DataUser} from "./templates"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import { connect } from "react-redux"
class App  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      defaultPass : "123",
      defaultType : 2,
      redirect : false,
      whoLogin : "",
     }
  }

  

  
  
  ChangeDirect = ()=>{
    this.setState((oldState) => (
      {redirect: !oldState.redirect}))
      
  }

    render() { 
        return (  
            <>
            <Router>
              <Navigation
                          
                          />
              <Switch>
                <Route path="/" exact component={() => <Beranda />} />
                <Route path="/data-user" exact component={() => <DataUser/>} />
                <Route path="/tentang" exact component={() => <Tentang />} />
                <Route path="/hubungi-kami" exact component={() => <HubungiKami/>} />
                <Route path="/masuk" exact component={() => <Login statusredirect={this.state.redirect} changedir={this.ChangeDirect}/>}/>
                <Route path="/daftar" exact component={() => <Register changedir={this.ChangeDirect} statusredirect={this.state.redirect}/>} />
              </Switch>
              <Footer />
            </Router>
            </>
        );
    }
}   
const mapStateToProps = (state) => ({
  statusLogin: state.auth.isLoggedIn,
  userLogin: state.auth.dataLogin
})




export default connect(mapStateToProps)(App)