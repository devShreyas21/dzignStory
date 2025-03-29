'use client'
import React from 'react'
import Link from 'next/link'


export default function page() {
  return (
    <div className='container'>
      <img src="/images/fullpages/midori.jpg" style={{ width: "100%" }} alt="" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/Mirai" style={{ textDecoration: "none", color: "#424C61" }}>
          <div>
            <i className="bi bi-arrow-left" style={{ fontSize: "30px" }}></i>
          </div>
        </Link>
        <Link href="/Projects" style={{ textDecoration: "none" }}>
          <div className='mt-4'>
            <p className="subHeading" style={{ fontSize: "20px" }}>Projects</p>
          </div>
        </Link>
        <Link href="/Gummies" style={{ textDecoration: "none", color: "#424C61" }}>
          <div>
            <i className="bi bi-arrow-right" style={{ fontSize: "30px" }}></i>
          </div>
        </Link>
      </div>
    </div>
  )
}
