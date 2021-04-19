import React from 'react'
import Hola from './Hola'
import Login from './Login'
import Signup from "./Signup";
import Wish from "../pages/WishList";
import ShoppingCar from "../pages/ShoppingCar";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
class App extends React.Component{
    render() {

        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/Signup' component={Signup}/>
                        <Route exact path='/WishList' component={Wish}/>
                        <Route exact path='/ShoppingCar' component={ShoppingCar}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>

            )
    }
}

export default App;