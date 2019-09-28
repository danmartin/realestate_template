import React from 'react';



class Google extends React.Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }
    
    render() {
      
      return (
        <div>
            <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
                <iframe
                title={this.props.config_data.display_address}
                src={this.props.config_data.google.maps}
                width="100%"
                height="450"
                allowFullScreen>
                </iframe>
            </div>

            <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
                <iframe width="100%" title={this.props.config_data.display_address} height="685" src={this.props.config_data.google.youtube}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
      );
    }
  }
  
export default Google;


