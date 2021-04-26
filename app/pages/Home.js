import React from 'react'
import {Link} from 'react-router-dom'
import Header from "../components/Header";
import img1 from"../assets/images/calzado-air-max-2090-eoi-1M4pG7.jpg"
import img2 from"../assets/images/calzado-air-max-vg-r-MT3xPJ.jpg"
import img3 from"../assets/images/calzado-de-básquetbol-cosmic-unity-amalgam-nkvMJj.jpg"
import img4 from"../assets/images/Tenis_Duramo_SL_Negro_FV8786_01_standard.jpg"
import img5 from"../assets/images/Tenis_Grand_Court_Base_Blanco_EG3755_01_standard.jpg"
import img6 from"../assets/images/Tenis_Ultraboost_21_Blanco_FY0377_01_standard.jpg"
import imgPromo from"../assets/images/lanzamientoSS-20-04.jpg"
import imgPromo2 from"../assets/images/iv-d-homepage-1up-mtz-nike.jpg"
import imgPromo3 from"../assets/images/adidas-disney-1844x740.jpg"
import Card from"../components/Cards"
import  "../assets/stylesheet/Home.css"
import Footer  from "../components/Footer";
import APIInvoker from "../utils/APIInvoker";
import carritoIcono from "../assets/icons/cart-outline.svg";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state  = {
            ProductList: [],
            Imagenes:[img1, img2, img3,img4, img5, img6]
        }

        this.status = false
        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/products/getProductos',data => {  //Entrará acá cuando status = true
            this.setState({
                ProductList : data.data
            })
        }, error => { //Entrará acá cuando status = false
        })


    }
    render() {
        return(
            <>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                            className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={imgPromo} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={imgPromo2} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={imgPromo3} className="d-block w-100"/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <div className="container">
                    <div className="row">
                <For each="item" index="index" of={this.state.ProductList} >
                    <div className="col-sm-6 col-md-4 col-lg-4">
                    <Card key={index} img={this.state.Imagenes[index]} title={item.nombre} description={item.precio} idProducto={item.idProducts}/>
                    </div>
                </For>
                    </div>
                </div>
                <br/>
                <Footer/>

            </>
        )
    }
}
export default Home;