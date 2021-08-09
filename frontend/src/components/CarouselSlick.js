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
            {id: 1, city: "Buenos Aires", country:"Argentina", image: "bsas.jpg"}, 
            {id: 2, city: "Rosario", country:"Argentina", image: "rosario.jpg"}, 
            {id: 3, city: "Ushuaia", country:"Argentina", image: "ushuaia.jpg"},
            {id: 4, city: "Gdro. Baigorria", country:"Argentina", image: "baigorria.jpg"},
            {id: 5, city: "Montevideo", country:"Uruguay", image: "montevideo.jpg"}, 
            {id: 6, city: "Calafate", country:"Argentina", image: "calafate.jpg"}, 
            {id: 7, city: "Rome", country:"Italy", image: "roma.jpg"},
            {id: 8, city: "Lima", country:"Peru", image: "lima.jpg"},
            {id: 9, city: "Paris",country:"France",  image: "paris.jpg"}, 
            {id: 10, city: "Wittenberg",country:"Germany", image: "wittenberg.jpg"}, 
            {id: 11, city: "Berlin",country:"Germany", image: "berlin.jpg"},
            {id: 12, city: "Vienna",country:"Austria", image: "viena.jpg"}
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