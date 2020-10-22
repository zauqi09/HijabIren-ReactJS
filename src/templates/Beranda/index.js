import React, { Component } from 'react';
import BodyBeranda from './body'
import HeaderBeranda from './header'

class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <> 
                <HeaderBeranda />
                <BodyBeranda />
            </>
         );
    }
}
 
export default Beranda;