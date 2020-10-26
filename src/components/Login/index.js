import React, { Component } from 'react';
import {Input} from "../../components"

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    
    
    render() { 
        const { type, name, value, onChange, placeholder, className, onClick } = this.props
        return ( 
            <>
                <div className="form-group">
                    <Input typeInput={type} valueInput={value} classInput={className} placeHolder={placeholder} nameInput={name} onChangeInput={onChange} onClickInput={onClick} />
                    </div>                
            </>
         );
    }
}
 
export default LoginForm;