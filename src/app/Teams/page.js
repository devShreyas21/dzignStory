'use client'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className=''>

      <div className='d-flex justify-content-center align-items-center my-5'>

        <div>
          <div className='mainHeading text-center'>Meet the Minds Behind the Magic</div>
          <div className='subHeading text-center'>A seamless process, flawless execution, and creative brilliance—our <br />team makes it all happen! With a perfect blend of innovation, <br />strategy, and dedication, they ensure every project runs smoothly <br />from start to finish.</div>

        </div>
      </div>

      <div className="container mb-5">
        {/* <div className="row">
          <div className="col-md-4 col-12">
            <div className="card" style={{ width: "18rem;" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title subHeading" >Name</h5>
                <p className="card-text">Designation</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card" style={{ width: "18rem;" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title subHeading">Name</h5>
                <p className="card-text">Designation</p>

              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card" style={{ width: "18rem;" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title subHeading">Name</h5>
                <p className="card-text">Designation</p>
              </div>
            </div>
          </div>

        </div> */}

      </div>

      <div style={{ backgroundColor: "#FED112" }}>
        <div className='text-center mainHeading mb-5 pt-5'>Technologies and Softwares we use</div>
        <div className="container">

        <div className="row pb-5 d-flex justify-content-around align-items-center">
          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Figma-logo.png'  style={{width:"40%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/WordPress.png'  style={{width:"100%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Nextjs.png' style={{width:"70%"}} />
            </div>

          </div>


          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/bootstrap.png' style={{width:"70%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Mysql.png' style={{width:"70%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/react.png' style={{width:"80%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/GitHub.png' style={{width:"80%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Vercel.png' style={{width:"80%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/HTML5.png' style={{width:"70%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/JavaScript.png' style={{width:"100%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/CSS.png' style={{width:"50%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/MERN.png' style={{width:"80%"}} />
            </div>

          </div>


          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Adobe_Photoshop.png' style={{width:"50%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Adobe_Illustrator.png' style={{width:"50%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Adobe_Premiere.png' style={{width:"50%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Adobe_After_Effects.png' style={{width:"50%"}} />
            </div>

          </div>


          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/Adobe_InDesign.png' style={{width:"50%"}} />
            </div>

          </div>

          <div className="col-md-2 col-4 text-center my-4 d-flex justify-content-center" >
            <div style={{ width: "125px", height: "125px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <img src='/images/technologies/coreldraw.png' style={{width:"100%"}} />
            </div>

          </div>

        </div>
        </div>
      </div>

    </div>
  )
}
