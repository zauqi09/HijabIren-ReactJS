import React, { Component } from 'react';
import img2 from '../../../img/img2.jpg'
import './style.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header>
                <img className="header-container" src={img2}></img>
            </header>
         );
    }
}
 
export default Header ;