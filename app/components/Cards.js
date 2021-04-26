
import React from "react";
import {Link} from 'react-router-dom'
import Header from "../components/Header";
import carritoIcono from '../assets/icons/shopping_cart_black_24dp.svg';
import APIInvoker from "../utils/APIInvoker";

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
                                <p className="card-text">${this.props.description} </p>
                                <button type="button" className="btn btn-white" onClick={this.agregarCarrito.bind(this)}>
                                    <img src={carritoIcono} alt="" width="30" height="24"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    agregarCarrito(e){
      let carrito={
          idUser:1,
          idProduct: this.props.idProducto,
          cantidad:1
        }

        APIInvoker.invokePOST('/carrito/addCarrito',carrito, data => {
            alert(JSON.stringify(data))
            window.localStorage.setItem('token',data.token)
        }, error => {
            alert(JSON.stringify(error))
        })

    }

}
export default Cards;


