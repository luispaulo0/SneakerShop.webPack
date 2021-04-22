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
import iconIns from "../assets/icons/instagram.svg"
import iconWhats from "../assets/icons/brand-whatsapp.svg"
import iconFace from "../assets/icons/facebook.svg"
import Card from"../components/Cards"
import  "../assets/stylesheet/Home.css"
import carritoIcono from "../assets/icons/cart-outline.svg";
class Home extends React.Component{
    constructor(props) {
        super(props);

        this.data = [
            {
                img:img1,
                title: 'Nike Air Max 2090 EOI',
                description: '$3300'
            },
            {
                img:img2,
                title: 'Nike Air Max VG-R',
                description: '$2000'
            },
            {
                img:img3,
                title: 'Nike Cosmic Unity "Amalgam"',
                description: '$3399'
            },{
                img:img4,
                title: 'tennis lite racer 2.0',
                description: '$1200'
            },{
                img:img5,
                title: 'Tennis grand court base',
                description: '$2000'
            },{
                img:img6,
                title: 'Tennis ultra boost-21',
                description: '$1800'
            }
        ]
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
                <For each="item" index="index" of={this.data} >
                    <div className="col-sm-6 col-md-4 col-lg-4">
                    <Card key={index} img={item.img} title={item.title} description={item.description}/>
                    </div>
                </For>
                    </div>
                </div>
                <br/>
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

            </>
        )
    }
}
export default Home;