import React, { Component } from "react";
import cardimage1 from "../../img/header.jpg";
import cardimage2 from "../../img/header1.jpeg";
import cardimage3 from "../../img/header2.jpg";
// import Swing from 'react-swing'
import Cards, { Card } from "react-swipe-deck";
import Navbar from "../../Component/Navbar/Navbar";
import firebase from 'firebase'
import { MapsLocalDining } from "material-ui/svg-icons";


var FIREBASE_USER_DATA;


class Meeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMeeting: false
    };

    this.Loading = this.Loading.bind(this);
  }

componentDidMount= ()=>{
 
firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    // User is signed in.
    var dataRef = firebase.database().ref("users/");
    dataRef.on('value', (snapshot) =>{
      if (snapshot.val()) {
        FIREBASE_USER_DATA = snapshot.val();
        console.log("fb Data***", FIREBASE_USER_DATA);
           this.Loading();  
      }
    });
  }
});
}

Loading = () =>{
  const {isMeeting} = this.state;  
  this.setState({isMeeting:true});
  console.log("true hogaya");
}


  render() {
    const { isMeeting } = this.state;
    const data = [cardimage1, cardimage2, cardimage3];


    return (
      <div>
      
        <Navbar />
        <br />
        {!isMeeting && (<div className="d-flex align-content-center justify-content-center">
        <div className="loader"></div></div>)}
{isMeeting && (
        <div className="contianer">
          <div className="text-center">
            <h2>Request Meeting!</h2>
            <p>Swipe Left To Cancel Or Swipe Right To Set Up Your Meeting.</p>
          </div>
          <br />
          <div className="row container">
            {Object.keys(FIREBASE_USER_DATA).map((item, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item m-2" key={i}>
            <div className="card h-100 shadow-sm">
              <a ><img className="card-img-top" width="20%"
                      height="auto" src= {FIREBASE_USER_DATA[item].profile_picture} alt="" /></a>
              <div className="card-body">
                <h5 className="card-title">
                  <a>{FIREBASE_USER_DATA[item].username}</a>
                </h5>
                <p className="card-text">{FIREBASE_USER_DATA[item].nickname}</p>
              </div>
            </div>
          </div>
          ))}
          </div>
          
          <div>
          <center>
            <div className="card mt-5" style={{ width: "300px" }}>
              <div className="card-header bg-primary text-white">
                <p>Choose The Person For Meeting</p>
              </div>
              <Cards onEnd={() => console.log("end")} className="master-root">
                {data.map((item, index) => (
                  <Card
                    onSwipeLeft={() => console.log("swipe left")}
                    onSwipeRight={() => console.log("swipe right")}
                    className="d-flex justify-content-center"
                  >
                    <img
                      src={item}
                      width="100%"
                      height="auto"
                      style={{ marginLeft: "-80px", marginTop: "-45px" }}
                      
                    />
                    <div
                      style={{
                        marginLeft: "-50px",
                        position: "absolute",
                        top: 0,
                        width: "200%",
                        height: "auto"
                      }}
                    >
                    </div>
                    <hr />
              <div className="card-body row">
                <div className=" col-md-3">
                  <p className="card-text text-center">X</p>
                </div>
                <div className="col-md-6">
                  <p className="card-text text-center">name</p>
                  <p className="card-text text-center">nickName</p>
                </div>
                <div className=" col-md-3">
                  <p className="card-text text-center">Y</p>
                </div>
              </div>
                  </Card>
                ))}
              </Cards>
              <br/>
            </div>
          </center>
        </div>
        </div>)}
      </div>
    );
  }
}
export default Meeting;
