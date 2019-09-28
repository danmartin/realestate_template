import React from 'react';



class PropertyDetail extends React.Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    render() {
      
      return (
        <div>
            <div className="position-relative overflow-hidden p-md-3 m-md-1 text-center">
                <div className="col-md-8 p-lg-8 mx-auto my-5"> 
                <h5 className="display-4 font-weight-bold">{this.props.config_data.display_address}</h5>
                <h4 className="display-5 font-weight-light text-muted">{this.props.config_data.full_address.city}, {this.props.config_data.full_address.state} {this.props.config_data.full_address.zipcode}</h4>
                <h6 className="display-4 text-secondary">{this.props.config_data.property.listing_price}</h6>
                </div>
            </div>

            { this.props.config_data.opens.length > 0 ?(
                <div className="container open-hold text-center">
                <div className="opens">
                    <h3>Open House</h3>
                    { this.props.config_data.opens.map(({item, id}) =>
                        <div className="p-2 font-weight-bold text-primary" role="alert" key={id}>{item}</div>
                    ) }
                </div>
                </div>
            ) : null }

          
          
            <div className="position-relative overflow-hidden text-center">
                <div className="col-md-8 mx-auto my-5 blurb"> 
                <p className="pb-5">{this.props.config_data.property.blurb}</p>
                <ul>
                    { this.props.config_data.property.ammenities.map(({item, id}) =>
                        <li key={id}>{item}</li>
                    ) }
                </ul>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default PropertyDetail;


