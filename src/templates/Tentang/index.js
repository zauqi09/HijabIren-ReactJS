import React, { Component } from 'react';
import './style.css'
import logo from '../../img/logo.png'
import { VisiMisi,TentangKami } from '../../components';
class Tentang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <>

          <TentangKami/>
          <VisiMisi/>
        </>
         );
    }
}
 
export default Tentang;