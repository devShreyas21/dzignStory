'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {

  const router = useRouter()

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

          <div className="col-md-4 col-12 p-3">
            <div className="ProjectCard" >
              <img src="images/thumbnail/Mirai.png" style={{ width: "100%" }} alt="" />
              <div className='container ' style={{ display: "flex", justifyContent: "space-between", alignItems: "top", marginTop: "-18%" }}>
                <div className='ms-2'>
                  <p style={{ color: "#ffffff" }}>Brand Identity Design <br />Location - Baner, Pune</p>
                </div>
                <div className='text-center ' style={{ marginRight: "25%", marginTop: "1%" }}>
                  <button style={{ paddingInline: "80%", paddingTop: "15%", paddingBottom: "15%", background: "none", border: "1px solid #ffffff", color: "#ffffff" }} onClick={()=>{router.push('/Mirai')}}>Explore</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 p-3">
            <div className="ProjectCard" >
              <img src="images/thumbnail/Midori.png" style={{ width: "100%" }} alt="" />
              <div className='container ' style={{ display: "flex", justifyContent: "space-between", alignItems: "top", marginTop: "-18%" }}>
                <div className='ms-2'>
                  <p style={{ color: "#ffffff" }}>Brand Identity Design <br />Location - Baner, Pune</p>
                </div>
                <div className='text-center ' style={{ marginRight: "25%", marginTop: "1%" }}>
                  <button style={{ paddingInline: "80%", paddingTop: "15%", paddingBottom: "15%", background: "none", border: "1px solid #ffffff", color: "#ffffff" }} >Explore</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 p-3">
            <div className="ProjectCard" >
              <img src="images/thumbnail/Aromaft.png" style={{ width: "100%" }} alt="" />
              <div className='container ' style={{ display: "flex", justifyContent: "space-between", alignItems: "top", marginTop: "-18%" }}>
                <div className='ms-2'>
                  <p style={{ color: "#ffffff" }}>Brand Identity Design <br />Location - Baner, Pune</p>
                </div>
                <div className='text-center ' style={{ marginRight: "25%", marginTop: "1%" }}>
                  <button style={{ paddingInline: "80%", paddingTop: "15%", paddingBottom: "15%", background: "none", border: "1px solid #ffffff", color: "#ffffff" }} >Explore</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 p-3">
            <div className="ProjectCard" >
              <img src="images/thumbnail/Groza.png" style={{ width: "100%" }} alt="" />
              <div className='container ' style={{ display: "flex", justifyContent: "space-between", alignItems: "top", marginTop: "-18%" }}>
                <div className='ms-2'>
                  <p style={{ color: "#ffffff" }}>Brand Identity Design <br />Location - Baner, Pune</p>
                </div>
                <div className='text-center ' style={{ marginRight: "25%", marginTop: "1%" }}>
                  <button style={{ paddingInline: "80%", paddingTop: "15%", paddingBottom: "15%", background: "none", border: "1px solid #ffffff", color: "#ffffff" }} onClick={()=>{router.push('/Groza')}}>Explore</button>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>


    </div>
  )
}
