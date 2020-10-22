import React, { Component } from 'react';

class VisiMisi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
              <div className="row">
                  <div className="col-md-6 border-right">
                      <button type="button" className="btn btn-tentang">
                          <h2>Visi</h2>
                          <br/>
                          <h6 id="hidden hidden-tentang">Berjumpa dengan Allah di Surga Firdaus</h6>
                      </button>
                  </div>
                  <hr/>
                  <div className="col-md-6">
                      <button type="button" className="btn btn-tentang">
                          <h2>Misi</h2>
                          <br/>
                          <h6 id="hidden hidden-tentang">Menjadi Perusahaan Kerudung Terbaik dan Terbesar di Dunia</h6>
                      </button>
                  </div>
              </div>
          </div>
         );
    }
}
 
export default VisiMisi;