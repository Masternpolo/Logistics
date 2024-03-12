import React from 'react'
import Footer1 from '../assets/Footer1.png'
import Footer2 from '../assets/Footer2.png'
import Footer3 from '../assets/Footer3.png'
import Footer4 from '../assets/Footer4.png'


function Footer() {
  return (
    <>
    <div className="bg-dark text-light py-4 mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <h4 className='mb-2'>CRYSTAL SHIPMENT</h4>
            <p>
            Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.
            </p>
          </div>
          <div className="col-md-3">
            <h4 className='mb-2'>QUICK LINKS</h4>
            <ul className='list-unstyled'>
              <li><a href=""className='text-light text-decoration-none'>All Services</a></li>
              <li><a href=""className='text-light text-decoration-none'>Land Freight</a></li>
              <li><a href=""className='text-light text-decoration-none'>Sea Freight</a></li>
              <li><a href=""className='text-light text-decoration-none'>Air Freight</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className='mb-2'>PHOTO GALLERY</h4>
            <div className="d-flex">
              <div className="flex-grow-1 me-3 mb-3">
                <img src={Footer1} alt="footer1"className='img-fluid' />
              </div><div className="flex-grow-1">
                <img src={Footer2} alt="footer2"className='img-fluid' />
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-3">
                <img src={Footer3} alt="footer3"className='img-fluid' />
              </div><div className="flex-grow-1">
                <img src={Footer4} alt="footer4"className='img-fluid' />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4 className='mb-2'>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            <form action="">
            <input type="email" placeholder='Email' className='form-control flex-grow-1 mb-3' />
            <a href="" className="btn btn-danger">Submit</a>
            </form>
          </div>
        </div>
        <div className="text-center text-light">
          <p className='mt-5 mb-5'>&copy; Copyright {new Date().getFullYear()} All Rights Reserved.</p>

        </div>
      </div>
    </div>
    </>
  )
}

export default Footer