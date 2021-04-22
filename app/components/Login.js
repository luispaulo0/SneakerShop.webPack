import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";


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
    dataUserValidate(e) {
        {
            let password = this.state.password
            let username = this.state.username
            APIInvoker.invokeGET(`/users/userPasswordValidate/${password} `,
                data => {
                    //primera forma de obtener la referencia de un control en el DOM
                    //let label = document.getElementById("usernameMessage")
                    if(data.message===username) {
                        alert(username+'if');
                        this.label2.innerHTML = error.message
                    }else {
                        alert(data.message+'else');
                        this.label2.innerHTML = error.message
                    }
                },
                error => {
                    // let label = document.getElementById("usernameMessage")
                    this.label2.innerHTML = error.message
                })
        }
    }

    render() {
        return(
            <div >
                <div >
                    <h1 className="h1">SneakerShop</h1>
                    <form className="form" id="container-box">
                        <label className="label" htmlFor="username" >Usuario</label>
                        <br/>
                        <input
                            className="input"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="ELPEPE"
                            value={this.state.username}
                            onChange={this.changeField.bind(this)}
                            onBlur={this.usernameValidate.bind(this)}/>

                        <div  ref={ self => this.label = self}></div>

                        <label className="label" htmlFor="password">Contraseña</label>
                        <br/>
                        <input
                               className="input"
                               type="password"
                               name="password"
                               id="password"
                               placeholder="1234"
                               value={this.state.password}
                               onChange={this.changeField.bind(this)}/>
                        <div ref={ self => this.pass = self}> </div>
                        <br/>
                        <button id="button-inicio" type="button"onClick={this.iniciarSesion.bind(this)} >Iniciar sesión</button>
                    </form>
                </div>

            </div>
        )
    }

    iniciarSesion(e){

        let user = {
            username: this.state.username,
            password: this.state.password
        }
        APIInvoker.invokePOST('/users/login',user, data => {
            alert(JSON.stringify(data))
            window.localStorage.setItem('token',data.token)
        }, error => {
            alert(JSON.stringify(error))
        })

    }
}

export default Login;