import React, { Component } from 'react';
import './App.css';
import Login from './Screens/Login/Login';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './Screens/Profile/Profile'
import Navbar from './Component/Navbar/Navbar';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './Screens/Profile/Profile'
>>>>>>> React Routes Update
import Map from './Screens/Map/Map'
import Dashboard from './Screens/Dashboard/Dashboard'
import Meeting from './Screens/Meeting/Meeting'
import MeetingPoint from './Screens/Meeting-Point/Meeting-Point'
<<<<<<< HEAD
=======
import Error from './Screens/Error/Error'
import firebase from 'firebase';
>>>>>>> React Routes Update

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

<<<<<<< HEAD
=======
  

>>>>>>> React Routes Update
  render() {
    const { isUser } = this.state;

    return (
<<<<<<< HEAD
      <div>

        {/* {!isUser && <Login isUser={isUser}/>} */}
        <Navbar />
        {/* <Profile /> */}
        {/* <Map/> */}
        {/* {<Dashboard/>} */}
        {/* {<Meeting/>} */}
        {<MeetingPoint />}
      </div>
=======
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/map' component={Map} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/meeting' exact component={Meeting} />
          <Route path='/meetingpoint' exact component={MeetingPoint} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
>>>>>>> React Routes Update
    )
  }

}

export default App;
<<<<<<< HEAD


=======
>>>>>>> React Routes Update
