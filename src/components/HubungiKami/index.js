import React, { Component } from 'react';

class FormHubungiKami extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form action="#" className="contactForm">
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group contact-block1">
                            <input type="text" name="name" className="form-control" id="name" placeholder={this.props.plcholder1} />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder={this.props.plcholder2} />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder={this.props.plcholder3} />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                            <textarea className="form-control" name="message" rows="4" placeholder={this.props.plcholder4}></textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button className="btn btn-primary btn-block">Kirim</button>
                        </div>

                        </div>
                    </form>
         );
    }
}
 
export default FormHubungiKami;