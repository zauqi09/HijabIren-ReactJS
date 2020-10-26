import React, { Component } from 'react';
import './style.css'
class DataUserList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { user } = this.props
        return (
            <>
            {user.map((user, idx) => {  
                return <tr key={idx}>
                            <th scope="row" >{idx+1}</th>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td> {this.props.adminloginsue?
                                    <>
                                        <button className='btn btn sizefix'>Detail</button>
                                        <button className='btn btn-warning sizefix'> Edit</button>
                                        <button className='btn btn-danger sizefix'>Delete</button>
                                    </>
                                        :   
                                        <>
                                        {this.props.who===user.email?
                                            <>
                                                <button className='btn btn sizefix'>Detail</button>
                                                <button className='btn btn-warning sizefix'> Edit</button>
                                            </>
                                        :
                                            <>
                                            -
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
 
export default DataUserList;