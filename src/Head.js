import React from 'react';

class Head extends React.Component {
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
      return (
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
        crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet">

            <script src="https://kit.fontawesome.com/2fee02ec4e.js"></script>
            <meta property="og:url"                content="https://711ne61stct.com/" />
            <meta property="og:type"               content="website" />
            <meta property="og:title"              content="711 NE 61st Ct., Hillsboro, OR 97124" />
            <meta property="og:description"        content="Delightful home on a corner lot in the coveted Orenco Gardens neighborhood! Home features 4bedrooms/2.5 bath with a covered patio and landscaped fenced yard, large living room with fireplace, kitchen with a cooking island with gas stove, and built-in cabinetry in the dining room." />
            <meta property="og:image"              content="/images/fb.jpg" />
            
            <title>711 NE 61st Ct</title>
      )
  }
}

export default Head;
