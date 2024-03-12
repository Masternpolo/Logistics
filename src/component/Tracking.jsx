import React from 'react'

function Tracking() {
  return (
    <>
      <section className="head">
        <div className="text-center text-light pt-5">
          <h2 className='mt-3'>Tracking</h2>
          <p>Home <i className='fa fa-arrow-right me-3 ms-3'></i>Tracking</p>
        </div>
      </section>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className='mb-2'>TRACK YOUR SHIPMENT</h2>
            <div className="bg-red mb-2"></div>
            <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.
            </p>
          </div>
          <div className="col-md-6 d-flex">
            <form action="">
              <input type="text" placeholder='Enter your id here' className='form-control flex-grow-1'/><br />
              <a href="#" className="btn btn-danger text-light flex-grow-1">Track</a>
            </form>
          </div>
        </div>
      </section>

    </>
  )
}

export default Tracking