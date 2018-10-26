import React, { Component } from 'react';
<<<<<<< HEAD


export default class Navbar extends Component {
    
=======
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
            
        }).catch(function (error) {
            // An error happened.
        });
    }

>>>>>>> React Routes Update
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">Meeting-App</a>
                    <form className="form-inline">
<<<<<<< HEAD
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">SignOut</button>
=======
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.signOut}>SignOut</button>
>>>>>>> React Routes Update
                    </form>
                </nav>
            </div>
        )
    }

}