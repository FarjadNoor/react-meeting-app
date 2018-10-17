import React, { Component } from 'react';
import './App.css';
import firebase from './Config/firebase'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Login from './Screens/Login/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './Screens/Profile/Profile'


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
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      
    }).catch(function(error) {
      
    });
  }

  setPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({coords: position.coords})
    });
  }

  updateCoords({latitude, longitude}) {
    this.setState({coords: {latitude, longitude}})
  }

  render() {
    const {coords} = this.state;
    
    return(
      <div>

        {/* {<Login/>} */}
        <Dashboard/>
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


// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={14}
//     center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
//   >
//     {props.isMarkerShown && 
//     <Marker 
//       position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
//       draggable={true}
//       onDragEnd={position => {
//           props.updateCoords({latitude: position.latLng.lat(), longitude: position.latLng.lng()})
//       }}
//       />}
//   </GoogleMap>
// ))

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );
// export default BasicExample;