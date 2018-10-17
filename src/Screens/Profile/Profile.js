import React, { Component } from 'react';
import Navbar from '../../Component/Navbar/Navbar';


class Profile extends Component {
    constructor() {
        super()

        this.state = {

        };
        this.nickname = this.nickname.bind(this);
        this.picture = this.picture.bind(this);

    }

    nickname(){
        this.setState({
            nickName: 1
        })
    }

    picture(){
        this.setState({
            picture: 1
        })
    }

    render() {
        const {nickName, picture} = this.state;
        return (
            <div>
                { !nickName &&
                <div className="container">
                    <div className="">
                        <label >Nick Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Nick Name" />
                   </div>
                   <br/>
                    <div className="">
                        <label >Phone Number</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone number" />
                    </div>
                    <br/>
                    <button className="btn btn-primary" onClick={this.nickname}>Next</button>

                </div>}

                {
                    nickName && !picture &&
                    <div className="container">
                    <div className="">
                        <label for="exampleInputEmail1">Profile Picture</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Nick Name" />
                   </div>
                   <br/>
                    <div className="">
                        <label >Phone Number</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone number" />
                    </div>
                    <br/>
                    <button className="btn btn-primary" onClick={this.picture}>Next</button>

                </div>
                    
                }
                {
                    nickName && picture &&
                    <div className="container">
                    <div className="">
                        <label >Beverages</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Nick Name" />
                   </div>
                   <br/>
                    <div className="">
                        <label >Phone Number</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone number" />
                    </div>
                    <br/>
                    <button className="btn btn-primary" onClick={this.nickname}>Next</button>

                </div>
                    
                }
            </div>
        )
    }

}

export default Profile;