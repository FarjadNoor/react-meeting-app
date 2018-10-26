import React, { Component } from 'react';
import cardimage1 from '../../img/header.jpg'
import cardimage2 from '../../img/header1.jpeg'
import cardimage3 from '../../img/header2.jpg'
// import Swing from 'react-swing'
import Cards, { Card } from 'react-swipe-deck'
<<<<<<< HEAD





=======
import Navbar from '../../Component/Navbar/Navbar';
>>>>>>> React Routes Update

class Meeting extends Component {
    constructor() {
        super()

        this.state = {
        };
    }

    render() {
        const { isMeeting } = this.state;
<<<<<<< HEAD
        const data = { name:['Alexandre', 'Thomas', 'Lucien'],
        images:[cardimage1, cardimage2, cardimage3] 
       };
       
        return (
            <div className="">
                <h2>
                    You Haven't done any meeting yet!
                </h2>
                <br/>
                <br/>
                
                <div className="card" style={{ width: "18rem" }}>
                    <Cards className='master-root'   >
                                                
                            <Card >
                                
                                <img className="card-img-top p-2" src={data.images} alt="Card image cap" />
                                <div className="card-body row">
                                    <div className=" col-md-3">
                                        <p className="card-text text-center">X</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="card-text text-center">{data.name}</p>
                                        <p className="card-text text-center">nickName</p>
                                    </div>
                                    <div className=" col-md-3">
                                        <p className="card-text text-center">Y</p>
                                    </div>
                                </div>

                            </Card>
                           
                    </Cards>
                </div>

            </div>
        )
    }

}

export default Meeting;


=======
        const data = {
            name: ['Alexandre', 'Thomas', 'Lucien'],
            images: [cardimage1, cardimage2, cardimage3]
        };

        return (
            <div className="">
            <Navbar/>
            <br/>
                <h2>
                    You Haven't done any meeting yet!
                </h2>
                <br />
                <br />

                <div className="card" style={{ width: "18rem" }}>
                    <Cards className='master-root'   >

                        <Card >

                            <img className="card-img-top p-2" src={data.images} alt="Card image cap" />
                            <div className="card-body row">
                                <div className=" col-md-3">
                                    <p className="card-text text-center">X</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="card-text text-center">{data.name}</p>
                                    <p className="card-text text-center">nickName</p>
                                </div>
                                <div className=" col-md-3">
                                    <p className="card-text text-center">Y</p>
                                </div>
                            </div>
                        </Card>

                    </Cards>
                </div>
            </div>
        )
    }
}
export default Meeting;
>>>>>>> React Routes Update
