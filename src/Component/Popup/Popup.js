import React, { Component } from 'react';
import firebase from 'firebase';

export default class Popup extends Component {
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

    render() {
        return (
            <div>
                <div className="modal  fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-backdrop modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header d-felx align-self-center">
                                <div className="">
                                    <img height='auto' width='100' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" className="rounded-circle" alt="..." />
                                    <img height='auto' width='100' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" className="rounded-circle" alt="..." />
                                </div>
                            </div>
                            <div className="modal-body text-center">
                                <p>Requester Name</p>
                                <p>Location</p>
                                <p>Duration</p>
                                <p>Date</p>

                            </div>
                            <div className="modal-footer  d-flex justify-content-center">
                                <div className="btn-group-vertical">
                                    <button type="button " className="btn btn-success" data-dismiss="modal">Confirm</button>
                                    <button type="button " className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                    <h2 data-toggle="modal" data-target="#exampleModal">
                        You Haven't done any meeting yet!
                </h2>
            </div>
        )
    }

}