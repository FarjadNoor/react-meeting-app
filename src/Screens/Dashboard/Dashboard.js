import React, { Component } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import firebase from "../../Config/firebase";   

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
        };
    }

    


    render() {
        const { isMeeting } = this.state;
        var Useriid = window.localStorage.getItem("UserId");
        console.log("localuser fb ge" , Useriid);
        var dataRef = firebase.database().ref("users/"+ Useriid);
        dataRef.on('value', function (snapshot) {
          console.log("localuser fb get**",snapshot.val());
        });
        return (
            <div>


                <Navbar />
                <br />
                <div className=" text-center">
                    <br />
                    <h2>
                        You Haven't done any meeting yet!
                </h2>
                </div>
                <br />
                <div className=" d-flex justify-content-center">
                    <a href="/meeting" className="btn btn-primary"><b>Set a meeting!</b></a>
                </div>
                <br />

                {

                }

                <div className="container">
                    <div className="shadow-sm card">
                        <div className="card-body">
                            <div className="row ">
                                <div className="col-md-2">
                                    <div className="text-center ">
                                        <img height='auto' width='100' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-7 justify-content-center">
                                    <h5 className="card-title">User Name</h5>
                                    <p className="card-text">Meeting Location<span className="small"><br />21/12/2018</span></p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-self-center">
                                    <h3><span className="badge badge-success">Done</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="container">
                    <div className="card shadow-sm ">
                        <div className="card-body">
                            <div className="row ">
                                <div className="col-md-2">
                                    <div className="text-center ">
                                        <img height='auto' width='100' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-7 justify-content-center">
                                    <h5 className="card-title">User Name</h5>
                                    <p className="card-text">Meeting Location<span className="small"><br />21/12/2018</span></p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-self-center">
                                    <h3><span className="badge badge-warning">Complicated</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="container">
                    <div className="card shadow-sm ">
                        <div className="card-body">
                            <div className="row ">
                                <div className="col-md-2">
                                    <div className="text-center ">
                                        <img height='auto' width='100' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-7 justify-content-center">
                                    <h5 className="card-title">User Name</h5>
                                    <p className="card-text">Meeting Location<span className="small"><br />21/12/2018</span></p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-self-center">
                                    <h3><span className="badge badge-primary">Accepted</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="container">
                    <div className="card shadow-sm ">
                        <div className="card-body">
                            <div className="row ">
                                <div className="col-md-2">
                                    <div className="text-center ">
                                        <img height='auto' width='100' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-7 justify-content-center">
                                    <h5 className="card-title">User Name</h5>
                                    <p className="card-text">Meeting Location<span className="small"><br />21/12/2018</span></p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-self-center">
                                    <h3><span className="badge badge-secondary">Pending</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="container">
                    <div className="card shadow-sm ">
                        <div className="card-body">
                            <div className="row ">
                                <div className="col-md-2">
                                    <div className="text-center ">
                                        <img height='auto' width='100' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-7 justify-content-center">
                                    <h5 className="card-title">User Name</h5>
                                    <p className="card-text">Meeting Location<span className="small"><br />21/12/2018</span></p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center align-self-center">
                                    <h3><span className="badge badge-danger">Cancelled</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div >
        )
    }
}
export default Dashboard;