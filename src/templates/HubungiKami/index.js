import React, { Component } from 'react';
import { FormHubungiKami } from '../../components';
import './style.css'

class HubungiKami extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="hub-kami">
                <div className="v80">
                    <img src="https://vanillahijab.com/media/weltpixel/owlcarouselslider/images/w/e/web_banner_no_clikc_buttom.jpg" className="login" />
                </div>
                <div className="title-hub">
                    <h2>Silakan Hubungi Kami</h2>
                    <p>Kirim Kendalan ataupun Pertanyaan Anda Melalui Form dibawah Ini</p>
                    <FormHubungiKami plcholder1="Nama" plcholder2="Email" plcholder3="Kendala" plcholder4="Ceritakan Kendalamu"/>
                </div>
            </div>
         );
    }
}
 
export default HubungiKami;