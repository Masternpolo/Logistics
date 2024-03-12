import React, { useEffect } from 'react'
import CardTwo from './CardTwo'
import Goods from '../assets/Goods.png'
import Card from './Card'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Service() {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);
  
  return (
    <>
    <section className="head">
      <div className="text-center text-light pt-5">
        <h2 className='mt-3'>Service</h2>
        <p>Home <i className='fa fa-arrow-right me-3 ms-3'></i>Service</p>
      </div>
    </section>
    <CardTwo/>
    <section className="container">
      <div className="row" data-aos="fade-up">
        
        <div className="col-md-7" >
          <div>
            <img src={Goods} alt="goods" />
          </div>
        </div>
        <div className="col-md-5">
          <h2>THE COMPLETE SOLUTION</h2>
          <div className="bg-red"></div>
          <p className='mt-3'>
          Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.
          </p>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Service