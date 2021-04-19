import React from 'react'
import Header from "../components/Header";
import airMax from "../assets/images/calzado-air-max-vg-r-MT3xPJ.jpg";
import AirMax2090 from "../assets/images/calzado-air-max-2090-eoi-1M4pG7.jpg";
import UltraBoost from "../assets/images/Tenis_Ultraboost_21_Blanco_FY0377_01_standard.jpg";

class ShoppingCar extends React.Component{
    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl">
                            <h1>CARRITO DE COMPRAS</h1>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <h3>Imagen</h3>

                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <h3>Descripcion</h3>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <h3>Precio</h3>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <h3>Cantidad</h3>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <h3>Eliminar</h3>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">

                            <img src={airMax} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <h5>Nike Air Max VG-R</h5>

                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <h5>Precio: $2000</h5>
                            <br/>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2">

                            <button type="button" className="btn btn-danger">Eliminar</button>
                            <br/>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-4 col-lg-3">
                            <img src={AirMax2090} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-3 col-md-4 col-lg-3">
                            <h5>Nike Air Max 2090 EOI</h5>
                            <br/>


                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <h5>Precio: $3300</h5>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <button type="button" className="btn btn-danger">Eliminar</button>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-4 col-lg-3">
                            <img src={UltraBoost} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-3 col-md-4 col-lg-3">
                            <h5>Tennis ultra boost-21</h5>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <h5>Precio: $1800</h5>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2">
                            <button type="button" className="btn btn-danger">Eliminar</button>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-9">

                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-3">
                            <h3>Precio Total: $7100</h3>
                        </div>
                    </div>
                   <br/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-10">

                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-2">
                            <button type="button" className="btn btn-success btn-lg">Pagar</button>
                        </div>
                    </div>
                    <br/>
                </div>


            </>
        )
    }
}

export default ShoppingCar;
