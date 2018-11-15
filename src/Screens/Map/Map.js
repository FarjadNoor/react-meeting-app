import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coords: null
    };

    this.updateCoords = this.updateCoords.bind(this);
  }

  componentDidMount() {
    this.setPosition();
  }


  setPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ coords: position.coords })
    });
  }

  updateCoords({ latitude, longitude }) {
    const { coords } = this.state;
    this.setState({ coords: { latitude, longitude } })
    console.log(coords);
    this.props.mapLocation(coords);
  }

  render() {
    const { coords } = this.state;
    const {maplocation, submitbtn} = this.props;

    return (
      <div className="container rounded">
        <h3 className="text-center">
          Drag The Marker To Set Your Location.
        </h3>
        {coords && <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coords={coords}
          updateCoords={this.updateCoords}
        />}
        <button className="btn btn-primary" onClick={this.props.submitData}>
          Submit
              </button>
      </div>
    )
  }

}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
    {props.isMarkerShown &&
      <Marker
        position={{ lat: props.coords.latitude, lng: props.coords.longitude }}
        draggable={true}
        onDragEnd={position => {
          props.updateCoords({ latitude: position.latLng.lat(), longitude: position.latLng.lng() })
        }}
      />}
  </GoogleMap>
))

export default Map;