import React, { Component } from 'react';
import './style.css'
import { Redirect } from 'react-router-dom'
import { VisiMisi,TentangKami } from '../../components';
class Tentang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if (this.props.isLoggedIn) {
            return <Redirect to='/masuk'/>;
        }
        return ( 
        <>
        
          <TentangKami/>
          <VisiMisi/>
        </>
         );
    }
}
 
export default Tentang;