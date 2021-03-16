import React from 'react'
import {Link} from 'react-router-dom'
import Cheems from "../assets/images/CheemsCry.png";


class NotFound extends React.Component{
    render() {
        return(
            <>

                <div>
                    <div>
                        <center>
                            <h1 >Pagina no encontrada</h1>
                            <img  src={Cheems} alt="" width="500" height="500"/>
                            <h3>No puede ser!</h3>
                        </center>
                    </div>

                    <Link to='/'>
                        <h6>Regresar a la pagina principal</h6>
                    </Link>
                </div>



            </>
        )
    }
}
export default NotFound;
