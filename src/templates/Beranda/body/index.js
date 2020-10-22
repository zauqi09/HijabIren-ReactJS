import React, { Component } from 'react';
import img2 from '../../../img/img2.jpg'
import img3 from '../../../img/img3.jpg'
import "./style.css"
import {Beranda} from "../../../components"

class BodyBeranda extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let textBody1 = "HijabIrene merupakan perusahaan garment yang bergerak dalam bidang retail busana muslim dengan tagline Maju Bersama Allah. HijabIrene merupakan salah satu perusahaan kerudung instan pertama dan terbesar di Indonesia dengan mengeluarkan produk andalan berupa kerudung instan dan produk lain yang juga telah dikembangkan yaitu busana muslim diantaranya kemko, tunik, kastun, kemko,tunik serta perlengkapan lain seperti ciput/inner kerudung dan aksesoris.",
            Quotes = "A wowan is unstoppable after she realizes she deserves better",
            Quotes2 = "Siapapun yang menggunakan mukena ini akan menjadikan wanita yang memakainyabagaikan bidadari syurga cantik!",
            titleQuotes = "Mukena Suci Bidadari"

        
        return ( 
            <div>
                <section className="py-5">
                    <div className="container">
                    <h1 className="font-weight-light">HijabIrene</h1>
                        <p className="lead">{textBody1}</p>
                        <blockquote className="blockquote text-right">
                            <p className="mb-2">{Quotes}</p>
                            <footer className="blockquote-footer"><b>Irene N</b> <i>Founder of HijabIrene</i>
                            </footer>
                        </blockquote>
                    </div>
                    <div className="container">
                        <Beranda kelas1="col-xl-8 col-lg-7" 
                            image={img2}
                                kelas2="col-xl-4 col-lg-5"
                                    Quote={Quotes2}
                                        align="left">
                            {titleQuotes}
                        </Beranda>
                        <Beranda kelas1="col-xl-8 col-lg-5"
                            image={img3}
                                kelas2="col-xl-4 col-lg-7"
                                    Quote={Quotes2}>
                            {titleQuotes}
                        </Beranda>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default BodyBeranda;