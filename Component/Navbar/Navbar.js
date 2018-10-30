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
            console.log('User Sign Out');
            
            window.location.href = window.location.origin;
            
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark">
                    <a className="navbar-brand mb-0 text-uppercase h1">Meeting-App</a>
                    <form className="form-inline">
                        <button className="btn btn-light my-2 my-sm-0" type="submit" onClick={this.signOut}>SignOut</button>
                    </form>
                </nav>
            </div>
        )
    }

}