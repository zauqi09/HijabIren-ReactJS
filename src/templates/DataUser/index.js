import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { DataUserList } from '../../components';
class DataUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    
    render() { 
        if (!this.props.isLoggedIn) {
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
                            <DataUserList who={this.props.whoLoggedIn} adminloginsue={this.props.isAdminLoggedIn} user={this.props.dataUser}/>              
                        </tbody>
                    </table>
                    </div>
                </div>
             );
        
    }
}
 
export default DataUser;