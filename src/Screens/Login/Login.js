import React, { Component } from 'react';
import firebase from '../../Config/firebase';
import './grayscale.css';
import Navbar from '../../Component/Navbar/Navbar';

var provider = new firebase.auth.FacebookAuthProvider();

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.login = this.login.bind(this);
    }

    login() {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('user**', user);
            console.log('user**', user);
            console.log('prop**',this.props);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    }

    render() {
        return (
            <div >
                <header className="masthead">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Meeting App</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">Set your meetings with your friends on a single tap!</h2>
                            <a href="#" onClick={this.login} className="btn btn-primary"><b>Sign-In With Facebook</b></a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}

export default Login;