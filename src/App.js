import React, { Component } from 'react';
import './App.css';
import Login from './Screens/Login/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './Screens/Profile/Profile'
import Navbar from './Component/Navbar/Navbar';
import Map from './Screens/Map/Map'
import Dashboard from './Screens/Dashboard/Dashboard'
import Meeting from './Screens/Meeting/Meeting'
import MeetingPoint from './Screens/Meeting-Point/Meeting-Point'

class App extends Component {
  constructor() {
    super()

    this.state = {
    };
  }

  isUser(isUser) {
    this.setState({ isUser: isUser });
    console.log('app.js***', isUser);
  }

  render() {
    const { isUser } = this.state;

    return (
      <div>

        {/* {!isUser && <Login isUser={isUser}/>} */}
        <Navbar />
        {/* <Profile /> */}
        {/* <Map/> */}
        {/* {<Dashboard/>} */}
        {/* {<Meeting/>} */}
        {<MeetingPoint />}
      </div>
    )
  }

}

export default App;


