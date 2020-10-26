import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    
    render() { 
            
            const { dataInput, classInput, placeHolder, typeInput, nameInput, valueInput, onClickInput, onChangeInput} = this.props
                return (
                    <input 
                        placeholder={placeHolder}
                        type={typeInput}
                        name={nameInput}
                        value={valueInput}
                        onClick={onClickInput}
                        onChange={onChangeInput}
                        className={classInput}
                        data={dataInput}
                    />
                 );
            
            
    }
}
 
export default Input;