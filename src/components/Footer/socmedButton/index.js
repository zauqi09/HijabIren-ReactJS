import React, { Component } from 'react';
import Listsocmedbutton from './listsocmedbutton'
class SocmedButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <Listsocmedbutton facebookicon="fa fa-facebook fa-2x fa-fw"
                        twittericon="fa fa-twitter-square fa-2x fa-fw"
                        instagramicon="fa fa-instagram fa-2x fa-fw"/>
            </div>
         );
    }
}
 
export default SocmedButton;