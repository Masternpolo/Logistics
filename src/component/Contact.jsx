import React from 'react'
import Phone from '../assets/Phone.png'
import Whatsapp from '../assets/Whatsapp.png'
import Mail from '../assets/Mail.png'
import Form from './Form'



function Contact() {
  return (
    <>
     <section className="head">
        <div className="text-center text-light pt-5">
          <h2 className='mt-3'>Contact</h2>
          <p>Home <i className='fa fa-arrow-right me-3 ms-3'></i>Tracking</p>
        </div>
      </section>
      <section className="container mt-5 pb-2">
        <div className="row">
          <div className="col-md-6">
            <p>Kindly call us or join our support group on WhatsApp.</p>
            <div className="d-flex ">
              <div className='me-2'>
              <img src={Phone} alt="phone" />
              </div>
                <p>+234 9072211222</p>
            </div>
            <div className="d-flex ">
              <div className='me-2'>
              <img src={Whatsapp} alt="whatapp" />
              </div>
                <p>+234 9072211222</p>
            </div>
            <div className="d-flex ">
              <div className='me-2'>
              <img src={Mail} alt="mail" />
              </div>
                <p>+234 9072211222</p>
            </div>
          </div>
          <div className="col-md-6">
            <Form/>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Contact