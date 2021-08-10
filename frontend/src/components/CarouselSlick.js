import React, { Component } from "react";
import Slider from "react-slick";

export default class CarouselSlick extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 2,
            slidesPerRow: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1,
                        slidesPerRow: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1,
                        slidesPerRow: 1,
                        dots: false
                    }
                }
            ] 
        }
        const carouselContent = [
            {id: 0, city: "Granadero Baigorria", country:"Argentina", image: "baigorria.jpg", description:"Al norte de Rosario, donde viven los viejos"},
            {id: 1, city: "Rosario", country:"Argentina", image: "rosario.jpg", description:"La capital no oficial de Argentina, ciudad Juarez Argentina"},
            {id: 2, city: "Buenos Aires", country:"Argentina", image: "bsas.jpg", description:"La capital de Argentina, donde Larreta pone y saca pisos"},
            {id: 3, city: "Ushuaia", country:"Argentina", image: "ushuaia.jpg", description:"El pais de las maravillas naturales y electrodomesticos"},
            {id: 4, city: "Calafate", country:"Argentina", image: "calafate.jpg", description:"Donde vive la Presidente de la Nación"},
            {id: 5, city: "Bariloche", country:"Argentina", image: "bariloche.jpg", description:"Donde los pibes se van de joda, igual lindo paisaje"},
            {id: 6, city: "Pergamino", country:"Argentina", image: "pergamino.jpg", description:"Entre Rosario y Buenos Aires"},
            {id: 7, city: "Mar del Plata", country:"Argentina", image: "mardelplata.jpg", description:"Donde vas a tomar sol"},
            {id: 8, city: "Mar de Ajó", country:"Argentina", image: "mardeajo.jpg", description:"El mar huele bastante bien, pese a su nombre"},
            {id: 9, city: "Puerto Madryn", country:"Argentina", image: "madryn.jpg", description:"Donde se puede avistar ballenas"},
            {id: 10, city: "Villa Gesell", country:"Argentina", image: "gesell.jpg", description:"Donde van los pibes en verano"},
            {id: 11, city: "Santa Fe", country:"Argentina", image: "santafe.jpg", description:"La capital oficial de la provincia de Santa Fe"}
        ]
        return (
            <div className="carouselSlickContainer">
                <h2>Popular myTineraries</h2>
                <Slider {...settings}>
                        {carouselContent.map(city => {
                            return(
                            <div key={city.id}>
                                <div className="carouselSlideInfo" style={{backgroundImage:`url('assets/${city.image}')`}}>
                                    <p>{city.city}</p>
                                    <p>{city.country}</p>
                                </div>
                            </div>)
                        })}
                </Slider>
            </div>
        )
    }
}