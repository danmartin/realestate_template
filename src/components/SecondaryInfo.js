import React from 'react';



class SecondaryInfo extends React.Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    render() {
      
      return (
        <div className="row">
            <div className="col-6 col-md-6  text-center overflow-hidden mb-3npm">
              <div className="mx-auto py-3 bg-light rounded">
              <div className="icon-holder">
                <i className="fas fa-hammer"></i>
              </div>
              <div className="my-0">
                  <p className="lead">Built in {this.props.config_data.property.built_in}</p>
              </div>
              </div>
            </div>

            <div className="col-6 col-md-6   px-3 text-center overflow-hidden mb-3">
              <div className="mx-auto py-3 bg-light rounded">
              <div className="icon-holder">
              <i className="fas fa-home"></i>
              </div>
              <div className="my-0">
                  <p className="lead">RMLS# {this.props.config_data.property.rmls}</p>
              </div>
              </div>
            </div>
          </div>
      );
    }
  }
  
export default SecondaryInfo;


