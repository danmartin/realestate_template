import React from 'react';



class Footer extends React.Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    render() {
      
      return (
        <footer className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
            <div className="row justify-content-md-center mb-5">
                <div className=" col col-12 col-lg-2">
                    <img src="/images/face.jpg" className="img-fluid" alt="Aubrey Martin Real Estate Agent Portland Oregon" />
                </div>
                <div className=" col text-center col-md-7 display-5 font-weight-bold pt-4">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-9">
                            <img src="/images/Aubrey_logo.png" className="img-fluid" alt="Aubrey Martin Real Estate Agent Portland Oregon" />
                        </div>
                    </div>
                    <h3><a href={"mailto:"+this.props.config_data.agent.email}>{this.props.config_data.agent.email}</a> | <span className="d-none d-sm-inline"><i className="fas fa-phone"></i> {this.props.config_data.agent.phone}</span><span className="d-sm-block d-md-none"><a href={"tel:"+this.props.config_data.agent.phone}><i className="fas fa-phone"></i> {this.props.config_data.agent.phone}</a></span></h3>
                </div>
            </div>
        </footer>
      );
    }
  }
  
export default Footer;


