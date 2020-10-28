import React, { Component } from 'react';
import './style.css'
import { connect } from "react-redux"
class DataUserList extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    componentDidMount= () =>{
        console.log("userList : ",this.props.userList);
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
                                        <button className='btn btn sizefix'>Detail</button>
                                        <button className='btn btn-warning sizefix'> Edit</button>
                                        <button className='btn btn-danger sizefix'>Delete</button>
                                    </>
                                        :   
                                        <>
                                        {who.email===user.email&&
                                            <>
                                                <button className='btn btn sizefix'>Detail</button>
                                                <button className='btn btn-warning sizefix'> Edit</button>
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