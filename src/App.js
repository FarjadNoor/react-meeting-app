import React, { Component } from 'react';
import './App.css';
import firebase from './Config/firebase'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Login from './Screens/Login/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './Screens/Profile/Profile'
import Navbar from './Component/Navbar/Navbar';


const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
  constructor() {
    super()

    this.state = {
      coords: null
    };

    this.login = this.login.bind(this);
    this.updateCoords = this.updateCoords.bind(this);
  }

  componentDidMount() {
    this.setPosition();
  }

  login() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var user = result.user;

    }).catch(function (error) {

    });
  }

  setPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ coords: position.coords })
    });
  }

  updateCoords({ latitude, longitude }) {
    this.setState({ coords: { latitude, longitude } })
  }

  render() {
    const { coords } = this.state;

    return (
      <div>
        
        {/* {<Login/>} */}
        <Navbar />
        <Profile />
        {/* {coords && <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coords={coords}
          updateCoords={this.updateCoords}
        />} */}
      </div>
    )
  }

}

export default App;


