import React, { Component } from 'react';


export default class Navbar extends Component {
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">Meeting-App</a>
                    <form className="form-inline">
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">SignOut</button>
                    </form>
                </nav>
            </div>
        )
    }

}