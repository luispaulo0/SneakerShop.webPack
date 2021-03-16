import React from 'react'
import {Link} from 'react-router-dom'
import Header from "../components/Header";

class Home extends React.Component{
    render() {
        return(
            <>
                <Header />
                <h1>Bienvenido a SneakerShop</h1>

            </>
        )
    }
}
export default Home;