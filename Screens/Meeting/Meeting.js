import React, { Component } from "react";
import cardimage1 from "../../img/header.jpg";
import cardimage2 from "../../img/header1.jpeg";
import cardimage3 from "../../img/header2.jpg";
// import Swing from 'react-swing'
import Cards, { Card } from "react-swipe-deck";
import Navbar from "../../Component/Navbar/Navbar";

class Meeting extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { isMeeting } = this.state;
    const data = [cardimage1, cardimage2, cardimage3];

    return (
      <div className="">
        <Navbar />
        <br />
        <h2 className="text-center">You Haven't done any meeting yet!</h2>
        <br />
        <br />

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
                  >
                    <img
                      src={item}
                      width="175%"
                      height="300"
                      style={{ marginLeft: "-80px", marginTop: "-45px" }}
                    />
                    <div
                      style={{
                        marginLeft: "-50px",
                        position: "absolute",
                        top: 0,
                        width: "150%",
                        height: "200px"
                      }}
                    />
                  </Card>
                ))}
              </Cards>
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
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default Meeting;
