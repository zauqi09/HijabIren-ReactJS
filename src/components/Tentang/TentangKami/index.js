import React, { Component } from 'react';
import logo from '../../../img/logo.png'

class TentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="jumbotron" style={{'backgroundColor' : "#c3aed6"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src={logo} width="100%"/>
                        <h6 className="align-cont"><i>Sumber: clipartkey</i></h6>
                    </div>
                    <div className="col-md-10">
                        <h1 className="display-3">Tentang Kami</h1>
                        <p>HijabIrene merupakan perusahaan garment yang bergerak dalam bidang retail busana muslim dengan tagline Maju Bersama Allah. HijabIrene merupakan salah satu perusahaan kerudung instan pertama dan terbesar di Indonesia dengan mengeluarkan produk andalan berupa kerudung instan dan produk lain yang juga telah dikembangkan yaitu busana muslim diantaranya kemko, tunik, kastun, kemko,tunik serta perlengkapan lain seperti ciput/inner kerudung dan aksesoris.</p>
                    </div>
                </div>
              </div>
          </div>
         );
    }
}
 
export default TentangKami;