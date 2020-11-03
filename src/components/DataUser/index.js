import React, { Component } from 'react';
import './style.css'
import { connect } from "react-redux"
import {DetailUser, EditUser} from "../../components"
import {Button} from 'react-bootstrap'

class DataUserList extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    deleteUser= async(email) =>{
        await fetch('http://localhost:3010/delete/'+email, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        window.location.reload()
    }

    render() { 

        const user = this.props.userList
        const who = this.props.whoLoggedIn
        return (
            
            <>
            {user.map((user, idx) => {  
                return <tr key={idx}>
                            <th scope="row" >{idx+1}</th>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td> {who.type===1?
                                    <>  
                                        <DetailUser user={this.props.userList} index={idx}/>
                                        <EditUser user={this.props.userList} index={idx}/>
                                        <Button style={{marginLeft:"20px"}} size="sm" variant="danger" 
                                            onClick={()=> { if (window.confirm('Apakah Data Ingin Dihapus?')) this.deleteUser(user.email) }}>Delete</Button>
                                    </>
                                        :
                                        <>
                                        {who.email===user.email&&
                                            <>
                                                <DetailUser user={this.props.userList} index={idx}/>
                                                <EditUser user={this.props.userList} index={idx}/>
                                            </>
                                        }
                                        </>
                                }                        
                            </td>
                        </tr>
                    })}
                    
            </>
        )
        
                
    }
}
const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    userList: state.auth.userListFromApp,
    whoLoggedIn: state.auth.dataLogin
  })
  
  
  
export default connect(mapStateToProps)(DataUserList)