import React, { Component } from 'react';
import firebase from 'firebase';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            window.localStorage.clear();
            console.log('User Sign Out');

        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <div>
                <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="">

                    <a className="navbar-brand text-uppercase font-weight-bold">Meeting-App</a>
                    </div>
                    <div className="">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        
                        <form className="form-inline  my-2 my-lg-0">
                            <div className=" btn-group">
                                <button type="button" className="btn btn-light">User Name</button>
                                <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                    <a className="dropdown-item" href="/dashboard">Dashboard</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={this.signOut}>Sign Out</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }

}