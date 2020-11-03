import React, { Component } from 'react';
import './style.css'
import { connect } from "react-redux"
import {DetailUser, EditUser} from "../../components"
import {Button} from 'react-bootstrap'
import jwt from 'jwt-decode'

class DataUserList extends Component {
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
                'Authorization' : 'Bearer '+this.props.whoLoggedIn.token
            }
        })
           .then(response => response.json())
           .then(result => {
                //const jsondecoded = jwt(result.token)
                const token = result.data[0].token
                this.props.SaveToRedux(token)
                
            })
     }
    deleteUser= async(email) =>{
        await fetch('http://localhost:3010/users/delete/'+email, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.whoLoggedIn.token
            },
        })
        .then(response => response.json())
        .then(result => {
            window.alert(result.message)
        })
        .catch(error => console.log('error', error));
        window.location.reload()
    }

    render() { 

        const user = jwt(this.props.userList)
        const who = this.props.whoLoggedIn.dataUser
        return (
            
            <>
            {user.user.map((user, idx) => {  
                return <tr key={idx}>
                            <th scope="row" >{idx+1}</th>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td> {who.type===1?
                                    <>  
                                        <DetailUser user={user} index={idx}/>
                                        <EditUser user={user} index={idx}/>
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
const mapDispatchToProps = (dispatch) => ({
    SaveToRedux: (userList) => dispatch({ type: "SAVETOREDUX", payload: userList })
})  
  
  
export default connect(mapStateToProps,mapDispatchToProps)(DataUserList)