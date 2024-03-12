import React, { useEffect } from 'react'
import SeaFright from '../assets/SeaFright.png'
import AirFright from '../assets/AirFright.png'
import LandFright from '../assets/LandFright.png'
import Warehousing from '../assets/Warehousing.png'
import Door from '../assets/Door.png'
import Packaging from '../assets/Packaging.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

    

function CardTwo() {
  useEffect(() => {
    Aos.init({duration: 3000})
  },[]);

    const cardsData = [
        { image: AirFright, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
        { image: SeaFright, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
        { image: LandFright, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
        { image: Warehousing, title: 'Warehousing', content: 'Package and store your things effectively and securely to make sure them in storage, ...' },
        { image: Door, title: 'Door to Door Delivery', content: 'Our expertise in transport management and planning allows us to design a solution....' },
        { image: Packaging, title: 'Packaging & Storage', content: 'Package and store your things effectively and securely to make sure them in storage...' }
]

  return (
    <>
    <section className="container pt-3">
              <div className="row" >
              {cardsData.map((card, index) =>
                        <div key={index} className="col-md-4 mb-3" data-aos='fade-up'>
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
            </div>
    </section>
    </>
  )
}

export default CardTwo