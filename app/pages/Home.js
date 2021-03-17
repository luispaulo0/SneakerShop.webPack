import React from 'react'
import {Link} from 'react-router-dom'
import Header from "../components/Header";
import img1 from"../assets/images/calzado-air-max-2090-eoi-1M4pG7.jpg"
import img2 from"../assets/images/calzado-air-max-vg-r-MT3xPJ.jpg"
import img3 from"../assets/images/calzado-de-básquetbol-cosmic-unity-amalgam-nkvMJj.jpg"
import img4 from"../assets/images/Tenis_Duramo_SL_Negro_FV8786_01_standard.jpg"
import img5 from"../assets/images/Tenis_Grand_Court_Base_Blanco_EG3755_01_standard.jpg"
import img6 from"../assets/images/Tenis_Ultraboost_21_Blanco_FY0377_01_standard.jpg"
import Card from"../components/Cards"
class Home extends React.Component{
    constructor(props) {
        super(props);

        this.data = [
            {
                img:img1,
                title: 'Croods 2',
                description: 'Película animada de Pixar'
            },
            {
                img:img2,
                title: 'Capitán américa',
                description: 'Película de superheroes'
            },
            {
                img:img3,
                title: 'Thor',
                description: 'Película de marvel'
            },{
                img:img4,
                title: 'Capitán américa',
                description: 'Película de superheroes'
            },{
                img:img5,
                title: 'Capitán américa',
                description: 'Película de superheroes'
            },{
                img:img6,
                title: 'Tennis ultra boost-21',
                description: 'corre con huevos $1800'
            }
        ]
    }
    render() {
        return(
            <>
                <Header />
                <div className="container">
                    <div className="row">
                <For each="item" index="index" of={this.data} >
                    <div className="col-sm-6 col-md-4 col-lg-4">
                    <Card key={index} img={item.img} title={item.title} description={item.description}/>
                    </div>
                </For>
                    </div>
                </div>
            </>
        )
    }
}
export default Home;