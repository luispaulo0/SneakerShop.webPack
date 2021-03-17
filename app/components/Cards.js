
import React from "react";


class Cards extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <div className="row ">
                    <div className="col" >
                        <div className="card"  >
                            <img src={this.props.img}  className="card-img"  />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Cards;


