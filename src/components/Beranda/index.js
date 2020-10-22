import React, { Component } from 'react';

class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if (this.props.align=="left") {
            return ( 
                <div className="row align-items-center no-gutters mb-4 mb-lg-5" >
                    <div className={this.props.kelas1}>
                        <img className="img-fluid mb-3 mb-lg-0 my-gallery" src={this.props.image} alt="" />
                    </div>
                    <div className={this.props.kelas2}>
                        <div className="featured-text text-center text-lg-left">
                            <h4>{this.props.children}</h4>
                            <p className="text-black-50 mb-0">{this.props.Quote}</p>
                        </div>
                    </div>
                </div>)
        } else {
            return (
                <div className="row align-items-center no-gutters mb-4 mb-lg-5" >
                    <div className={this.props.kelas2}>
                        <div className="featured-text text-center text-lg-left">
                            <h4>{this.props.children}</h4>
                            <p className="text-black-50 mb-0">{this.props.Quote}</p>
                        </div>
                    </div>
                    <div className={this.props.kelas1}>
                        <img className="img-fluid mb-3 mb-lg-0 my-gallery" src={this.props.image} alt="" />
                    </div>
                </div>
            )
        }
    }
}
 
export default Beranda;