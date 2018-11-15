import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import firebase from 'firebase'
import Map from '../../Screens/Map/Map';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickName: '',
            phoneNumber: '',
            pictures: 'w',
            beverages: '',
            duration: '',
            maplocation: '',
            allsubmit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.npNext = this.npNext.bind(this);
        this.conso = this.conso.bind(this);
        this.bdNext = this.bdNext.bind(this);
        this.next = this.next.bind(this);
        this.submit = this.submit.bind(this);
        this.maplocation = this.maplocation.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        console.log("events** ", evt.target.name, evt.target.value);
    }


    npNext() {
        const { nickName, phoneNumber } = this.state;
        var nName = document.getElementById('nickName').value;
        var pNumber = document.getElementById('phoneNumber').value;
        this.setState({ nickName: nName, phoneNumber: pNumber });
        console.log("setstate***", nickName, phoneNumber);
    }

    bdNext() {
        const { beverages, duration } = this.state;
        var beveragecheckboxes = document.getElementsByName('beverage');
        var durationcheckboxes = document.getElementsByName('duration');
        var bchecked = false;
        var dchecked = false;
        var bboxesChecked = [];
        var dboxesChecked = [];
        for (var i = 0; i < beveragecheckboxes.length; i++) {
            // And stick the checked ones onto an array...
            if (beveragecheckboxes[i].checked) {
                bboxesChecked.push(beveragecheckboxes[i].value);
            }
            bchecked = true;
        }
        for (var i = 0; i < durationcheckboxes.length; i++) {
            // And stick the checked ones onto an array...
            if (durationcheckboxes[i].checked) {
                dboxesChecked.push(durationcheckboxes[i].value);
            }
            dchecked = true;
        }

        if (bchecked && dchecked === true) {
            this.setState({
                beverages: bboxesChecked,
                duration: dboxesChecked
            })
        }
    }

    conso() {
        const { nickName, phoneNumber, beverages, duration, maplocation } = this.state;
        console.log("current State**", " nickname", nickName, "phone", phoneNumber, "beverage", beverages, "duration", duration, "map", maplocation);
    }

    next() {

    }

    submit() {
        const { nickName, phoneNumber, beverages, duration, maplocation } = this.state;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var uid = user.uid;
                firebase.database().ref("users/" + uid).update({
                    nickname: nickName,
                    phonenumber: phoneNumber,
                    beverages: beverages,
                    duration: duration,
                    maplocation: maplocation
                },
                    function (error) {
                        if (error) {
                            // The write failed...
                        } else {
                            // Data saved successfully!
                        }
                    });
                // ...
                var dataRef = firebase.database().ref("users/" + uid);
                dataRef.on('value', function (snapshot) {
                    if (snapshot.val()) {
                        window.location.href = "/dashboard";

                    }
                });

            } else {
                // User is signed out.
                // ...
            }
        });

    }

    maplocation(maploc) {
        // this.setState({ maplocation: maplocation });
        const {maplocation} = this.state;
        var latlng = {latitude: maploc.latitude,
            longitude: maploc.longitude};
        this.setState({maplocation: latlng})
    }

    render() {
        const { nickName, phoneNumber, pictures, beverages, duration, allsubmit , maplocation} = this.state;
        return (
            <div>
                <Navbar />
                <br />
                <br />
                {!nickName && !phoneNumber && (
                    <div className="container">
                        <div className="">
                            <label>Nick Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nickName"
                                name='nickName'
                                placeholder="Enter Your Nick Name"
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
                            />
                        </div>

                        <br />
                        <button className="btn btn-primary" onClick={this.npNext}>
                            Next
            </button>
                    </div>
                )}
                {nickName && phoneNumber && !beverages && !duration && (
                    <div className="container">
                        Select Beverages
                        <div className="">
                            <div className="input-group-prepend">
                                <div className="beverage">
                                    <input type="checkbox" name="beverage" value="Coffee" />
                                    <label className="pt-2 pl-2">Coffee</label>
                                </div>
                                <div className="beverage">
                                    <input type="checkbox" name="beverage" value="Juice" />
                                    <label className="pt-2 pl-2">Juice</label>
                                </div>
                                <div className="beverage">
                                    <input type="checkbox" name="beverage" value="Cocktail" />
                                    <label className="pt-2 pl-2">Cocktail</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        Duration of Meeting
                         <div className="">
                            <div className="input-group-prepend">
                                <div className="duration">
                                    <input type="checkbox" name="duration" value="20" />
                                    <label className="pt-2 pl-2">20 min</label>
                                </div>
                                <div className="duration">
                                    <input type="checkbox" name="duration" value="60" />
                                    <label className="pt-2 pl-2">60 min</label>
                                </div>
                                <div className="duration">
                                    <input type="checkbox" name="duration" value="120" />
                                    <label className="pt-2 pl-2">120 min</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <button className="btn btn-primary" onClick={this.bdNext}>
                            Next
              </button>
                    </div>
                )}
                {nickName && phoneNumber && beverages && duration && !pictures &&
                    (
                        <div className="container">

                            <div className="text-center">
                                <h3>Upload Your 3 Images</h3>
                                <br />
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 portfolio-item">
                                        <div className="card h-60">
                                            <img className="card-img-top" src="http://placehold.it/700x400" alt="placeholder2" />
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    <a href="">Upload Image 1</a>
                                                </h4>
                                                {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 portfolio-item">
                                        <div className="card h-60">
                                            <img className="card-img-top" src="http://placehold.it/700x400" alt="placeholder2" />
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    <a href="">Upload Image 2</a>
                                                </h4>
                                                {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 portfolio-item">
                                        <div className="card h-60">
                                            <img className="card-img-top" src="http://placehold.it/700x400" alt="placeholder2" />
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    <a href="">Upload Image 3</a>
                                                </h4>
                                                {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />
                            <button className="btn btn-primary" onClick={this.next}>
                                Next
              </button>
                        </div>
                    )}

                {nickName && phoneNumber && beverages && duration && pictures && !allsubmit &&
                    (
                        <Map mapLocation={this.maplocation} submitData={this.submit}/>
                    )}

                <button onClick={this.conso}> console</button>

            </div>
        );
    }
}

export default Profile;
