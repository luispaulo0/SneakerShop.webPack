import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "./utils/APIInvoker";

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    usernameValidate(e){
        let username = this.state.username
        APIInvoker.invokeGET(`/users/usernameValidate/${username}`,
            data => {
                //Primera forma de obtener la referencia de un control en el DOM
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = data.message
            },
            error => {
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = error.message
            })
    }

    render() {
        return(
            <section className="border border-5 border-danger" id="login">
                <div className="container my-5 border border-5 border-primary text-white">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border border-success bg-secondary">
                            <h1 className="display-6 py-3">Prácticas profesionales</h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border border-danger bg-secondary">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                                    <input type="text"
                                           className="form-control"
                                           name="username"
                                           id="username"
                                           placeholder="alilopez"
                                           aria-describedby="usernameHelp"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.usernameValidate.bind(this)}/>
                                    <div id="usernameMessage"
                                         ref={ self => this.label = self}
                                         className="form-text text-white">
                                    </div>
                                </div>
                                <div className="py-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password"
                                           className="form-control"
                                           name="password"
                                           id="password"
                                           placeholder="1234"
                                           aria-describedby="passwordHelp"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}/>
                                    <div id="passwordHelp"
                                         className="form-text text-danger">
                                    </div>
                                </div>
                                <div className="d-grid gap-3 py-3">
                                    <button type="button" className="btn btn-primary btn-lg">Iniciar sesión</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

            /*
            <section className="mt-5 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-7 box-login text-center">
                            <img id="img-login" src="./public/images/img.png" alt="Logo"/>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 col-lg-7 box-login">
                            <form className="p-4">
                                <div className="mb-3">
                                    <label htmlFor="user" className="form-label">nombre de usuario</label>
                                    <input type="text" className="form-control" id="user" name="username"
                                           value={this.state.username} aria-describedby="emailHelp"
                                           onChange={this.changeField.bind(this)} placeholder="alilopez"
                                           onBlur={this.validateUsername.bind(this)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">contraseña</label>
                                    <input type="password" className="form-control" id="password"
                                           name="password" placeholder="contraseña"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}/>
                                </div>

                                <button onClick={this.buttonOnClick.bind(this)} className="btn btn-primary">Iniciar sesion</button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
            */
        )
    }

    buttonOnClick(e){
        //Signup
        let user = {
            idRol: 1,
            nombre: "Alí Santiago",
            apellidoPaterno: "López",
            username: this.state.username,
            password: this.state.password
        }
        APIInvoker.invokePOST('/users/signup',user, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })
        e.preventDefault();
    }
}

export default Login;