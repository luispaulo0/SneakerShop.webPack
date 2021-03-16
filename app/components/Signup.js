import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";

class Signup extends React.Component{
    constructor() {
        super();
        this.state = {
            nombre:'',
            apellidoPaterno:'',
            username:'',
            password:'',
        }
    }
    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    buttonOnClick(e){
        //Signup
        let user = {
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            username: this.state.username,
            password: this.state.password
        }

        APIInvoker.invokePOST(`/users/signup`,user, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })
        /* usernameValidate
        APIInvoker.invokeGET(`/users/usernameValidate/${this.state.username}`, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })*/
        e.preventDefault();
    }
    render(){
        return(
            <section className="border border-4 border-light" id="signup">
                <div className="container  my-5 border border-5 border-primary text-white" >
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border border-success bg-secondary">
                            <h1 className="display-6 py-3">Registrate aqui</h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border border-danger bg-secondary">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">nombre</label>
                                    <input type="text"
                                           className="form-control"
                                           name="nombre"
                                           id="nombre"
                                           aria-describedby="usernameHelp"
                                           value={this.state.nombre}
                                           onChange={this.changeField.bind(this)}
                                        /*  onBlur={this.usernameValidate.bind(this)}*//>

                                    <div id="usernameMessage"
                                         ref={ self =>this.label = self}
                                         className="form-text text-light">

                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="apellidoPaterno" className="form-label">apellido paterno</label>
                                    <input type="text"
                                           className="form-control"
                                           name="apellidoPaterno"
                                           id="apellidoPaterno"

                                           aria-describedby="passwordHelp"
                                           value={this.state.apellidoPaterno}
                                           onChange={this.changeField.bind(this)}
                                        /*onBlur={this.dataUserValidate.bind(this)}*//>
                                    <div id="passwordHelp"
                                         ref={ self =>this.label2 = self}
                                         className = "form-text text-danger">

                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                                    <input type="text"
                                           className="form-control"
                                           name="username"
                                           id="username"

                                           aria-describedby="usernameHelp"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}
                                        /*onBlur={this.usernameValidate.bind(this)}*//>

                                    <div id="usernameMessage"
                                         ref={ self =>this.label = self}
                                         className="form-text text-light">

                                    </div>
                                </div>
                                <div className="py-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password"
                                           className="form-control"
                                           name="password"
                                           id="password"

                                           aria-describedby="passwordHelp"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}
                                        /*onBlur={this.dataUserValidate.bind(this)}*//>
                                    <div id="passwordHelp"
                                         ref={ self =>this.label2 = self}
                                         className = "form-text text-danger">

                                    </div>
                                </div>

                                <div className="d-grid gap-3 py-3">
                                    <button onClick={this.buttonOnClick.bind(this)} type="button" className="btn btn-primary btn-lg" >Registrar</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </section>
        )
    }



}
export default  Signup;