import React, { Component } from 'react';
<<<<<<< HEAD
=======
import Navbar from '../../Component/Navbar/Navbar';
>>>>>>> React Routes Update

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
        };
    }

    render() {
        const { isMeeting } = this.state;

        return (
            <div>
<<<<<<< HEAD
=======
                <Navbar/>
                <br/>
>>>>>>> React Routes Update
                <div className=" d-flex justify-content-center">
                    <br />
                    <h2>
                        You Haven't done any meeting yet!
                </h2>
                </div>
                <br />
                <div className=" d-flex justify-content-center">
<<<<<<< HEAD
                    <a href="#" className="btn btn-primary"><b>Set a meeting!</b></a>
=======
                    <a href="/meeting" className="btn btn-primary"><b>Set a meeting!</b></a>
>>>>>>> React Routes Update
                </div>
            </div>
        )
    }
<<<<<<< HEAD

}

export default Dashboard;


=======
}
export default Dashboard;
>>>>>>> React Routes Update
