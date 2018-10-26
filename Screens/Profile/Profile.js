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

    nickname() {
        this.setState({
            nickName: 1
        })
    }

    picture() {
        this.setState({
            picture: 1
        })
    }

    render() {
        const { nickName, picture } = this.state;
        return (
            <div>
                <br/>
                {!nickName &&
                    <div className="container">
                        <div className="">
                            <label >Nick Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Nick Name" />
                        </div>
                        <br />
                        <div className="">
                            <label >Phone Number</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone number" />
                        </div>
                        <br />
                        <button className="btn btn-primary" onClick={this.nickname}>Next</button>

                    </div>}

                {
                    nickName && !picture &&
                    <div className="container">
                        Upload Your 3 Images
                        <div className="text-center">
                            <label htmlFor="image">
                                <input type="file" name="image" id="image" style={{ display: 'none' }} />
                                <img src="./Placeholder.jpeg" alt="placeholder1" />
                            </label>
                            <label htmlFor="image">
                                <input type="file" name="image" id="image" style={{ display: 'none' }} />
                                <img src="./Placeholder.jpeg" alt="placeholder2" />
                            </label>
                            <label htmlFor="image">
                                <input type="file" name="image" id="image" style={{ display: 'none' }} />
                                <img src="./Placeholder.jpeg" alt="placeholder3" />
                            </label>
                        </div>
                        <br />
                        <button className="btn btn-primary" onClick={this.picture}>Next</button>

                    </div>

                }
                {
                    nickName && picture &&
                    <div className="container">
                        Select Beverages
                        <div className="">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" />
                                    <label className="pt-2 pl-2">Coffee</label>
                                </div>
                                <div class="input-group-text">
                                    <input type="checkbox" />
                                    <label className="pt-2 pl-2">Juice</label>
                                </div>
                                <div class="input-group-text">
                                    <input type="checkbox"/>
                                    <label className="pt-2 pl-2">Cocktail</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        Duration of Meeting
                        <div className="">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" />
                                    <label className="pt-2 pl-2">20 min</label>
                                </div>
                                <div class="input-group-text">
                                    <input type="checkbox" />
                                    <label className="pt-2 pl-2">60 min</label>
                                </div>
                                <div class="input-group-text">
                                    <input type="checkbox" />
                                    <label className="pt-2 pl-2">120 min</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <button className="btn btn-primary" onClick={this.mapLocation}>Next</button>

                    </div>

                }
            </div>
        )
    }

}

export default Profile;