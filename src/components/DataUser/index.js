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
            userList :[]
         }
    }
    componentDidMount =()=>{
        this.fetchData()
    }

    fetchData = async() =>{
        try {
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
                //const token = result.data[0].token
                //this.props.SaveToRedux(token)
                this.setState({
                    userList : result.data[0].data
                })
                
            })
        } catch (error) {
            console.log("Anda telah logout")
        }
    }

    deleteUser= async(email) =>{
        await fetch('http://localhost:3010/users/delete/'+email, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            },
        })
        .then(response => response.json())
        .then(result => {
            window.alert(result.message)
            
        })
        .catch(error => console.log('error', error));
        this.fetchData()
        
    }

    render() { 
        const dataLogin = this.props.dataLogin
        const who = jwt(dataLogin.token)
        try {
            const user = this.state.userList
            //const who = this.props.whoLoggedIn.dataUser
            return (
                
                <>
                {user.map((user, idx) => {  
                    return <tr key={idx}>
                                <th scope="row" >{idx+1}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td> {who.type==="admin"?
                                        <>  
                                            <DetailUser user={user} index={idx}/>
                                            <EditUser fetchdata={this.fetchData} user={user} index={idx}/>
                                            <Button style={{marginLeft:"20px"}} size="sm" variant="danger" 
                                                onClick={()=> { if (window.confirm('Apakah Data Ingin Dihapus?')) this.deleteUser(user.email) }}>Delete</Button>
                                        </>
                                            :
                                            <>
                                            {who.email===user.email&&
                                                <>
                                                    <DetailUser fetchdata={this.fetchData} user={user} index={idx}/>
                                                    <EditUser user={user} index={idx}/>
                                                </>
                                            }
                                            </>
                                    }                        
                                </td>
                            </tr>
                        })}
                        
                </>
            )
          } catch(error) {
            //console.log(error);
            return false
          }
        
        
                
    }
}
const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    userList: state.auth.userListFromApp,
    dataLogin: state.auth.dataLogin
  })
// const mapDispatchToProps = (dispatch) => ({
//     SaveToRedux: (userList) => dispatch({ type: "SAVETOREDUX", payload: userList })
// })  
  
  
export default connect(mapStateToProps)(DataUserList)