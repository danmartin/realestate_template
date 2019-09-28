import React from 'react';


class HeadImage extends React.Component {
    constructor() {
        super();
        this.state = { show: false };
        
    }

    render() {
        return (
            <div className="position-relative overflow-hidden text-center">
                <img src="/images/title-1.jpg" className="title-img" alt={this.props.config_data.display_address} />
                {this.props.config_data.status !== "" ? (
                    <div className="status_overlay pending">
                        <h2>{this.props.config_data.status.toUpperCase()}</h2>
                    </div>
                ) : null}
            </div>
        )
    }
}

export default HeadImage;


