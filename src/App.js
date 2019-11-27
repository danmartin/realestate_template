import React from 'react';
import './App.css';
import './styles.scss'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Google from './components/Google';
import HeadImage from './components/HeadImage';
import PrimaryInfo from './components/PrimaryInfo';
import SecondaryInfo from './components/SecondaryInfo';
import PropertyDetail from './components/PropertyDetail';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        data : null,
        loading: true
    }
  }
  componentDidMount() {
    fetch(`/config.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(response => response.json())
      .then(data => this.setState({ 
        data : data,
        loading: false 
      }));
  }

  

  render() {
    if(this.state.loading){
      return (<header><h1>Loading...</h1></header>)
    } else {
      return (
        <div className="App">

          <nav className="site-header sticky-top py-1  font-weight-bold shadow-sm">
            <div className="container text-center display-5">
              <div className="">
                <div className="display-5 text-uppercase"><img src="/images/address.png" alt={this.state.data.display_address} /></div>
                <div className="display-6"><a href={"mailto:"+this.state.data.agent.email}><i className="far fa-envelope"></i> {this.state.data.agent.email}</a> <span className="d-none d-sm-inline"> |</span> <span className="d-none d-sm-inline"><i className="fas fa-phone"></i> {this.state.data.agent.phone}</span><span className="d-sm-block d-md-none"><br /><a href={"tel:"+this.state.data.agent.phone}><i className="fas fa-phone"></i> {this.state.data.agent.phone}</a></span></div>
              </div>
            </div>
          </nav>

          <HeadImage config_data={this.state.data} />
          <PropertyDetail config_data={this.state.data} />
          <PrimaryInfo config_data={this.state.data} />
          
          
          <div className="container">
            <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
              <Gallery config_data={this.state.data} />
            </div>
            <SecondaryInfo config_data={this.state.data} />
          </div>
          <Google config_data={this.state.data} />
          <Footer config_data={this.state.data} />
  
        </div>
      );
    }
  }
}

export default App;
