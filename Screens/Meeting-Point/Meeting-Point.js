import React, { Component } from 'react';
import Navbar from '../../Component/Navbar/Navbar';

class MeetingPoint extends Component {
    constructor() {
        super()

        this.state = {
        };
    }

    render() {
        const { isMeeting } = this.state;

        return (
            <div>
                <Navbar />
                <br/>
                <div className="container">
                    <div className=" d-flex justify-content-center">
                        <br />
                        <h2>
                            Meeting Point Selection!
                </h2>
                    </div>
                    <br />
                    <div className="">
                        <label for="exampleInputPassword1">Search</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search Nearest Place" />
                    </div>
                    <div className="">
                        <br />
                        <a href="#" className="btn btn-primary"><b>Set a meeting!</b></a>
                    </div>
                </div>
            </div>
        )
    }

}

export default MeetingPoint;