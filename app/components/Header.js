import React from "react";
import personaIcono from '../assets/icons/person-circle-outline.svg';
import corazonIcono from '../assets/icons/heart-outline.svg';
import carritoIcono from '../assets/icons/cart-outline.svg';
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="#" >SneakerShop</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <div className="btn-group " role="group" aria-label="Basic example">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Men's
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-dark" type="button"
                                                id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Women's
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <divb class="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-dark" type="button"
                                                id="dropdownMenuButton3" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Kid's
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </divb>
                                </div>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle btn btn-dark" href="#" role="button"
                                   id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={personaIcono} alt="" width="30" height="24"/>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li> <Link className="dropdown-item" to='/Login'>
                                        <h6>Login</h6>
                                        </Link>
                                    </li>
                                    <li><Link className="dropdown-item" to='/Signup'>
                                        <h6>Signup</h6>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-dark">
                                <img src={corazonIcono} alt="" width="30" height="24"/>
                            </button>
                                <img src={carritoIcono} alt="" width="30" height="24"/>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;