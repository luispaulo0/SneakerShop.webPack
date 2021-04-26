import React from "react";
import Header from "../components/Header";
import CardC from "../components/CarroCard";
import img1 from "../assets/images/calzado-air-max-2090-eoi-1M4pG7.jpg";
import img2 from "../assets/images/calzado-air-max-vg-r-MT3xPJ.jpg";
import img3 from "../assets/images/calzado-de-básquetbol-cosmic-unity-amalgam-nkvMJj.jpg";
import img4 from "../assets/images/Tenis_Duramo_SL_Negro_FV8786_01_standard.jpg";
import img5 from "../assets/images/Tenis_Grand_Court_Base_Blanco_EG3755_01_standard.jpg";
import img6 from "../assets/images/Tenis_Ultraboost_21_Blanco_FY0377_01_standard.jpg";
import APIInvoker from "../utils/APIInvoker";
import Footer from "../components/Footer";

class Carro extends React.Component{
    constructor(props) {
        super(props);
        this.state  = {
            ProductList: [],
            listPrecio: [],
            Imagenes:[img1, img2, img3,img4, img5, img6],
            total:''

        }

        this.status = false
        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/carrito/getCarrito',data => {  //Entrará acá cuando status = true
            this.setState({
                ProductList : data.data,
                listPrecio : data.data.precio
            })
        }, error => { //Entrará acá cuando status = false
        })
        const lista= Array.from( this.state.listPrecio);

        const sumaPrecios = lista.reduce((prev, next) => prev + next.precio,5300);
      this.state.total = sumaPrecios;
    }



    render() {
        return(
            <React.Fragment>
               <div>
                   <Header/>
                   <div className="container">
                       <div className="row">
                           <For each="item" index="index" of={this.state.ProductList} >
                               <div className="col-sm-12 col-md-12 col-lg-12">
                                   <CardC key={index} img={this.state.Imagenes[index]} title={item.nombre} description={item.descripcion} idCarrito={item.idCarrito} precio={item.precio} cantidad={item.cantidad}/>

                               </div>
                           </For>
                       </div>
                       <div className="container">
                           <div className="row">
                               <div className="col-xxl">
                                   <h3>TOTAL${this.state.total}</h3>
                                   <button type="button" className="btn btn-dark" >
                                       <p className="text-light">Comprar </p>
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
                   <br/>
                   <Footer/>
               </div>
            </React.Fragment>
        )
    }


}
export default Carro;