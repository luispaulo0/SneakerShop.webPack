import iconIns from "../assets/icons/instagram.svg";
import iconWhats from "../assets/icons/brand-whatsapp.svg";
import iconFace from "../assets/icons/facebook.svg";
import React from "react";

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <footer className="bg-dark text-white">
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-2">
                                <p>Buscar en tienda</p>
                                <br/>
                                <p>Registrate para recibir correos</p>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-2">
                                <p>Obtener ayuda</p>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-2">
                                <p>Acerca de SneakerShop</p>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-6 text-end">
                                <img src={iconIns} alt="" width="30" height="30"/>&nbsp;&nbsp;&nbsp;
                                <img src={iconWhats} width="30" height="30"/>&nbsp;&nbsp;
                                <img src={iconFace} width="30" height="30"/>&nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;