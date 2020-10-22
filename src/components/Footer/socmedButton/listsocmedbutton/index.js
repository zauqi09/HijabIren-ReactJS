import React, { Component } from 'react';

class Listsocmedbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                    <a href="facebook.com/bingle09">
                        <i className={this.props.facebookicon}></i>
                    </a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="">
                        <i className={this.props.twittericon}></i>
                    </a>
                </li>
                <li className="list-inline-item mr-3">
                    <a href="instagram.com/fuadzqnr">
                        <i className={this.props.instagramicon}></i>
                    </a>
                </li>
            </ul>
         );
    }
}
 
export default Listsocmedbutton;