import React, { useEffect } from 'react'
import Driver from '../assets/Driver.png'
import Card from './Card'
import Form from './Form'
import request1 from '../assets/request1.png'
import request2 from '../assets/request2.png'
import request3 from '../assets/request3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'



function Homepage() {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, [])

  
  return (
    <>
      <div className="hero">
        <div className="text-center text-light pt-5">
          <h1 className='home-h1'>Easy & Quick Cargo Shipping Services </h1>
          <p>Book low cost sea freight shipping services. Get an instant quote.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="text-center ">
          <h2 className='pt-5'>Welcome to Crystal Shipment</h2>
          <div className='bg-red mx-auto'></div>
          <p>Crystal Shipment is more than logistics. We can also optimize your packaging, manage your materials sourcing, and so much more.
          </p>
        </div>
      </div>
      <div className="container" data-aos='fade-up'>
        <div className="row mt-5">
          <div className="col-md-6 mt-5">
            <img src={Driver} className="rounded img-fluid mb-5 " alt="about" />
          </div>
          <div className="col-md-6 mt-5">
            <p className="text-danger">
              TRANSPORTATION COMPANY
            </p>
            <h2>
              We Provide Full Range Logistics Solution
            </h2>
            <p>
              We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.
            </p>
            <a href="" className="btn btn-danger">Learn More</a>
          </div>
        </div>
        <div className="text-center" data-aos='fade-up'>
          <p className="text-danger mt-5">
            TYPES OF LOGISTICS
          </p>
          <h2>
            Covering All Logistics Fields
          </h2>
        </div>
        <section className="row">
          <div className="col-md-4"></div>
        </section>
      </div>
      
      <Card/>
      
      <div className="text-center">
        <a href="" className="btn btn-danger">Load more</a>
      </div>
      
      <div className="bg-warning mt-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 mt-5">
              <h2>Delivering your world one package at a time</h2>
              <p>Crystal Shipment is more than logistics.</p>
            </div>
            <div className="col-md-4 mt-5 text-md-end text-sm-start">
              <a href="" className="btn btn-danger">Requestna Quote</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container" data-aos='fade-up'>
        <div className="row mt-5">
          <div className="col-md-6">
            <h2 className='mb-3'>WHY CHOOSE US?</h2>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <img src={request1} alt="request1" />
              </div>
              <div>
                <h4>Global supply Chain Solutions</h4>
                <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <img src={request2} alt="request2" />
              </div>
              <div>
                <h4>Global supply Chain Solutions</h4>
                <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <img src={request3} alt="request3" />
              </div>
              <div>
                <h4>Global supply Chain Solutions</h4>
                <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <h2 className='mb-3'>REQUEST A QUOTE</h2>
          <Form/>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Homepage