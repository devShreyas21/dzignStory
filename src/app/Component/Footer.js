'use client'
import React from 'react'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <div style={{backgroundColor:"#343F56", color:"#ffffff", paddingTop:"2%", paddingBottom:"2%", fontFamily:"Montserrat !important"}}>
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center  py-4">
                <div className="col-md-4 col-12 text-center">
                    <img src="/images/dzignstorylogofooter.png" style={{width:"50%"}} alt="" />
                </div>
                <div className="col-md-4 col-12 text-center my-4">
                    <div>
                        <div>Connect with us</div>
                        <div><Link href="mailto:info@dzignstory.com" style={{ color:"#ffffff", textDecoration:"none"}}>info@dzignstory.com</Link></div>
                    </div>
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center">
                    <div>
                        <div>Follow Us</div>
                        <div className='d-flex justify-content-center'>
                            <div><Link href="https://www.instagram.com/dzign_story?igsh=M2ZtOTk0NnllbTIw&utm_source=qr" target='_blank' style={{color:"#ffffff", textDecoration:"none"}}><i className="bi bi-instagram"></i></Link></div>
                            <div><Link href="https://www.linkedin.com/company/dzign-story-2024/" target='_blank' style={{color:"#ffffff", textDecoration:"none"}}><i className="bi bi-linkedin ms-2"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
