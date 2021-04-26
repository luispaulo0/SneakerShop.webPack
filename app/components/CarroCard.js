
import React from "react";
import {Link} from 'react-router-dom'
import Header from "../components/Header";
import carritoIcono from '../assets/icons/shopping_cart_black_24dp.svg';
import APIInvoker from "../utils/APIInvoker";

class CarroCard extends React.Component{
    constructor(props) {
        super(props);


    }



    render() {
        return(
            <React.Fragment>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={this.props.img}  className="card-img" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                                <p className="card-text">${this.props.precio}</p>
                                <p className="card-text">cantidad: {this.props.cantidad}</p>
                                <div>
                                    <button type="button" className="btn btn-dark" onClick={this.eliminarCarrito.bind(this)}>
                                       <p className="text-light">Eliminar </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    eliminarCarrito(e){
     let idCarrito= this.props.idCarrito;
        APIInvoker.invokeGET(`/carrito/DeleteCarrito/${idCarrito}`, data => {
            alert(JSON.stringify(data))
            window.localStorage.setItem('token',data.token)
        }, error => {
            alert(JSON.stringify(error))
        })
        window.location.href = window.location.href;

    }



}
export default CarroCard;