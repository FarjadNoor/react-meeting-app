import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import firebase from 'firebase'

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      nickName: '',
      phoneNumber: '',
      pictures: [],
      beverages: [],
      duration: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.next = this.next.bind(this);

  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log("events** ", evt.target.name, evt.target.value);
  }

  next() {
    const { nickName, phoneNumber } = this.state;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var uid = user.uid;
        firebase.database().ref("users/" + uid).update({
          nickname: nickName,
          phonenumber: phoneNumber
        });
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
  }


  render() {
    const { nickName, picture } = this.state;
    return (
      <div>
        <Navbar />
        <br />
        <br />
        {(
          <div className="container">
            <div className="">
              <label>Nick Name</label>
              <input
                type="text"
                className="form-control"
                id="nickName"
                name='nickName'
                placeholder="Enter Your Nick Name"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div className="">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone number"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={this.next}>
              Next
            </button>
          </div>
        )}

        {
          !picture && (
            <div className="container">
              Upload Your 3 Images
              <div className="text-center">
                <label htmlFor="image">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    style={{ display: "none" }}
                  />
                  <img src="./Placeholder.jpeg" alt="placeholder1" />
                </label>
                <label htmlFor="image">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    style={{ display: "none" }}
                  />
                  <img src="./Placeholder.jpeg" alt="placeholder2" />
                </label>
                <label htmlFor="image">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    style={{ display: "none" }}
                  />
                  <img src="./Placeholder.jpeg" alt="placeholder3" />
                </label>
              </div>
              <br />
              <button className="btn btn-primary" onClick={this.picture}>
                Next
              </button>
            </div>
          )}
        {nickName &&
          picture && (
            <div className="container">
              Select Beverages
              <div className="">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="checkbox" />
                    <label className="pt-2 pl-2">Coffee</label>
                  </div>
                  <div class="input-group-text">
                    <input type="checkbox" />
                    <label className="pt-2 pl-2">Juice</label>
                  </div>
                  <div class="input-group-text">
                    <input type="checkbox" />
                    <label className="pt-2 pl-2">Cocktail</label>
                  </div>
                </div>
              </div>
              <br />
              Duration of Meeting
              <div className="">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="checkbox" />
                    <label className="pt-2 pl-2">20 min</label>
                  </div>
                  <div class="input-group-text">
                    <input type="checkbox" />
                    <label className="pt-2 pl-2">60 min</label>
                  </div>
                  <div class="input-group-text">
                    <input type="checkbox" />
                    <label className="pt-2 pl-2">120 min</label>
                  </div>
                </div>
              </div>
              <br />
              <button className="btn btn-primary" onClick={this.mapLocation}>
                Next
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default Profile;
