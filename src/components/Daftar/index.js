import React, { Component } from 'react';
import {Input} from "../../components"
class DaftarForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            passwordConfirm : "",
            email :"",
            password : "",
            name :"",
         }
    }
    
    
    render() { 
        const { type, name, value, onChange, placeholder, className } = this.props
        return ( 
            <>
                <div className="form-group">
                    <Input typeInput={type} valueInput={value} classInput={className} placeHolder={placeholder} nameInput={name} onChangeInput={onChange}/>
                    </div>                
            </>
         );
    }
}
 
export default DaftarForm;