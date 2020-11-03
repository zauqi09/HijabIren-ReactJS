import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { DataUserList } from '../../components';

import { connect } from "react-redux"
class DataUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    componentDidMount = async() =>{
        await fetch('http://localhost:3010/users', {
            mode:'cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            }
        })
           .then(response => response.json())
           .then(result => {
                //const jsondecoded = jwt(result.token)
                //console.log(result.data[0].token)
                const token = result.data[0].token
                this.props.SaveToRedux(token)
                
            })
     }
    
    render() { 
        if (!this.props.statusLogin) {
            return <Redirect to="/masuk" />;
        }
            return ( 
                <div id="list-user">
                    <div className="container-fluid" style={{marginTop: "140px"}}>
                        <h4>List Data User</h4>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th style={{width : "20px"}} scope="col">No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Aksi</th>
                        </tr>
                        </thead>
                        <tbody>
                            <DataUserList/>              
                        </tbody>
                    </table>
                    </div>
                </div>
             );
        
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    dataLogin: state.auth.dataLogin
  })
  const mapDispatchToProps = (dispatch) => ({
    SaveToRedux: (userList) => dispatch({ type: "SAVETOREDUX", payload: userList })
  })
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(DataUser)