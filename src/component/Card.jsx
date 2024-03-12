import React, { useEffect } from 'react'
import SeaFright from '../assets/SeaFright.png'
import AirFright from '../assets/AirFright.png'
import landFright from '../assets/LandFright.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Card() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // breakpoint for desktop
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // breakpoint for tablet/mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        Aos.init();
    }, []);

    const cardsData = [
        { image: AirFright, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
        { image: SeaFright, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
        { image: landFright, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we...' }
    ]
    return (
        <>
            <div className="container mt-5" data-aos='fade-up'>

                <div className="row">
                    <Slider {...settings}>
                    {cardsData.map((card, index) =>
                        <div key={index} className="col-md-4 mb-5" data-aos='fade-up'>
                            <div class="card">
                                <img src={card.image} class="card-img-top rounded" alt="card-image" />
                                <div class="card-body">
                                    <h5 class="card-title">{card.title}</h5>
                                    <p class="card-text">{card.content}</p>
                                    <a href="#" class="text-danger text-decoration-none">Read more</a>
                                </div>
                            </div>

                        </div>


                    )}
                    </Slider>
                </div>


            </div>
        </>
    )
}

export default Card