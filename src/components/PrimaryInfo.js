import React from 'react';



class PrimaryInfo extends React.Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    render() {
      
      return (
        <div className="container">
            <div className="row">
                <div className="col-6 col-md-3  text-center overflow-hidden mb-3npm">
                    <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-bed"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">{this.props.config_data.property.bedrooms} Bedrooms</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3   px-3 text-center overflow-hidden mb-3">
                    <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-bath"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">{this.props.config_data.property.baths} bath</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 text-center overflow-hidden mb-3">
                    <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-ruler-combined"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">{this.props.config_data.property.sq_feet} Sq Ft</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 text-center overflow-hidden mb-3">
                    <div className="mx-auto py-3 bg-light rounded">
                        <div className="icon-holder">
                            <i className="fas fa-tree"></i>
                        </div>
                        <div className="my-0">
                            <p className="lead">{this.props.config_data.property.lot_size} sq ft lot</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      );
    }
  }
  
export default PrimaryInfo;


