'use client'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className=''>

      <div className='d-flex justify-content-center align-items-center my-5'>

        <div>
          <div className='mainHeading text-center'>A Story in Every Pixel</div>
          <div className='subHeading text-center'>Every logo, website, video, and packaging design we create is not <br />just about looking good—it’s about making an impact, telling a <br />story, and building a connection.</div>
          <div className='subHeading text-center mt-3'>SCROLL</div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title subHeading" >Work Done</h5>
                <p className="card-text">Client</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title subHeading">Work Done</h5>
                <p className="card-text">Client</p>

              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title subHeading">Work Done</h5>
                <p className="card-text">Client</p>

             
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}
