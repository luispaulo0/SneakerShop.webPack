import React from 'react'
import Header from "../components/Header";
import airMax from "../assets/images/calzado-air-max-vg-r-MT3xPJ.jpg";
import AirMax2090 from "../assets/images/calzado-air-max-2090-eoi-1M4pG7.jpg";
import UltraBoost from "../assets/images/Tenis_Ultraboost_21_Blanco_FY0377_01_standard.jpg";

class WishList extends React.Component{
    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl">
                            <h1>LISTA DE DESEOS</h1>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <img src={airMax} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <h5>Nike Air Max VG-R</h5>
                            <br/>
                            <p>Color: Blanco/Negro</p>
                            <button type="button" className="btn btn-primary">Agregar al carrito</button>

                        </div>
                        <div className="col-sm">
                            <h5>Precio: $2000</h5>
                            <br/>
                            <p>Disponible</p>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Elegir talla</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">5 - 5.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">6 - 6.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">7 - 7.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">8 - 8.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">9 - 9.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">10      MX</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <img src={AirMax2090} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <h5>Nike Air Max 2090 EOI</h5>
                            <br/>
                            <p>Color: Blanco/Negro/Azul</p>
                            <button type="button" className="btn btn-primary">Agregar al carrito</button>

                        </div>
                        <div className="col-sm">
                            <h5>Precio: $3300</h5>
                            <br/>
                            <p>Disponible</p>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Elegir talla</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">5 - 5.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">6 - 6.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">7 - 7.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">8 - 8.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">9 - 9.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">10      MX</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <img src={UltraBoost} alt=""  width="200" height="200" />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <h5>Tennis ultra boost-21</h5>
                            <br/>
                            <p>Color: Blanco</p>
                            <button type="button" className="btn btn-primary">Agregar al carrito</button>

                        </div>
                        <div className="col-sm">
                            <h5>Precio: $1800</h5>
                            <br/>
                            <p>Disponible</p>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Elegir talla</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">5 - 5.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">6 - 6.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">7 - 7.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">8 - 8.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">9 - 9.5 MX</a></li>
                                    <li><a className="dropdown-item" href="#">10      MX</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>


            </>
        )
    }
}

export default WishList;
