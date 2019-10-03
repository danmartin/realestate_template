import React from 'react';

var image_maker = function (count) {
    let r_array = [];
        for (let i = 1; i <= count; i++) {
            let t_object =  {};
            t_object.id = i;
            t_object.thumb = '/images/thumbs/image-' + i + '.jpg';
            t_object.image = '/images/image-' + i + '.jpg';
            r_array.push(t_object);
        }
        return r_array;
}


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { 
            images: image_maker(props.config_data.image_count),
            show: false 
        };
    }

    
     
    toggleModal = (id) => {
        this.setState({
            image_id: id,
            show: !this.state.show,
            image: this.state.images[(id -1)]
        });
    }
    previousImage = (id) => {
        if (id > 1) {
            this.setState({
                image_id: id - 1,
                show: true,
                image: this.state.images[(id - 2)]
            });
        }
        
    }

    nextImage = (id) => {
        if (id < this.state.images.length) {
            this.setState({
                image_id: id + 1,
                show: true,
                image: this.state.images[(id)]
            });
        }
        
    }


    render() {
        return (
            <div className="row">
                { image_maker(this.props.config_data.image_count).map(({id, thumb, image}) => 
                    <figure key={id} className="col-6 col-sm-6 col-md-2">
                        <img data-id={id} src={thumb} className="img-fluid" alt={this.props.config_data.display_address} onClick={() => {this.toggleModal(id)}}/>
                    </figure>
                ) } 
                {this.state.show ? (
                    <div className="overlay overlay-effect">
                        {this.state.image_id > 1 ? (<a href="#foo" className="left-arrow" onClick={() => {this.previousImage(this.state.image_id)}}><i class="fas fa-angle-left"></i></a>) :null}
                        {this.state.image_id < this.state.images.length ? (<a href="#foo" className="right-arrow" onClick={() => {this.nextImage(this.state.image_id)}}><i class="fas fa-angle-right"></i></a>) :null}
                        <button type="button" className="close"  onClick={() => {this.toggleModal(0)}}>Close</button>
                        <div className="helper">
                            <img data-id={this.state.image_id} src={this.state.image.image}  alt={this.props.config_data.display_address} />
                        </div>
                    </div>
                ) : null}
            </div> 
        )
    }
}

export default Gallery;
