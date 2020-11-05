import React, { Component } from 'react';
import {Navigation } from "../../components"
import { connect } from "react-redux"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }

    change = () =>{
        // this.props.statUs()
        this.props.doLogout()
    }

    render() { 
            return  ( 
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm p-3 mb-5 bg-white">
                        <div className="container">
                            <a className="navbar-brand" href="index.html">HijabIrene</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul id="navBar" className="navbar-nav ml-auto navActive" >
                                    <Navigation link="/">Beranda</Navigation>
                                    <Navigation link="/tentang">Tentang</Navigation>
                                    <Navigation link="/hubungi-kami">Hubungi Kami</Navigation>
                                    { this.props.statusLogin ?
                                    <>
                                        <Navigation link="/data-user">Data User</Navigation>
                                        <li className="nav-item">
                                            <div className="nav-link" onClick={this.change}>Keluar</div>
                                        </li >
                                    </>
                                    :
                                    <>
                                        <Navigation link="/masuk">Masuk</Navigation>
                                        <Navigation link="/daftar">Daftar</Navigation>
                                    </>
                                    }
                                </ul>
                            </div>
                        </div>
                        
                    </nav>  
                    
                );
        } 

    
}
const mapStateToProps = (state)  =>  ({
    statusLogin: state.auth.isLoggedIn,
    userList : state.auth.userListFromApp,
    })


const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch({ type: "LOGOUT"}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)