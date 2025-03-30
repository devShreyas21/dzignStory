'use client'
import React from 'react'
import Link from 'next/link'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {

    return (
        <div style={{ backgroundColor: "#343F56", color: "#ffffff", paddingTop: "2%", paddingBottom: "2%", fontFamily: "Montserrat !important" }}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-top  pt-4">
                    <div className="col-md-4 col-12 text-center-pc-only pb-4" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                        <Link href="/">
                            <img src="/images/dzignstorylogofooter.png" style={{ width: "50%" }} alt="" />
                        </Link>
                        <div className='socialIcons' >
                            <Link href="https://facebook.com">

                                <i className="bi bi-facebook" style={{ color: "#ffffff", fontSize: "25px" }}></i>
                            </Link>
                            <Link href="https://behance.com">

                                <i className="bi bi-behance" style={{ color: "#ffffff", fontSize: "25px" }}></i>
                            </Link>
                            <Link href="https://instagram.com">

                                <i className="bi bi-instagram" style={{ color: "#ffffff", fontSize: "25px" }}></i>
                            </Link>
                            <Link href="https://youtube.com">

                                <i className="bi bi-youtube" style={{ color: "#ffffff", fontSize: "25px" }}></i>
                            </Link>
                            <Link href="https://twitter.com">

                                <i className="bi bi-twitter-x" style={{ color: "#ffffff", fontSize: "25px" }}></i>
                            </Link>

                        </div>
                    </div>
                    <div className="col-md-4 col-12 d-flex-left-Mobile">
                        <div style={{width:"80%"}}>
                            <h4>Need Support?</h4>
                            <div className='my-4'><Link href="mailto:info@dzignstory.com" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}><i className="bi bi-envelope-fill"></i>&nbsp;&nbsp;info@dzignstory.com</Link></div>
                            <div className='my-4'><Link href="tele:+917020906388" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}><i className="bi bi-telephone-fill"></i>&nbsp;&nbsp;+91 7020906388</Link></div>
                            <div className='my-4' style={{ fontSize: "20px" }}><i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;D - 201, Samarth Carina, Near Aditya Birla Hospital, <br />Thergaon-Chinchwad Rd.,<br />Pune - MH - 411033</div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 d-flex justify-content-center">
                        <div>
                            <h2>Join the Pro Team of Dzign Story!</h2>

                            <div style={{ position: "relative", width: "75%" }} className="my-4">
                                <input
                                    type="text"
                                    placeholder='Your Email'
                                    style={{
                                        background: "#ffffff",
                                        borderRadius: "20px",
                                        paddingInline: "20px",
                                        width: "100%",
                                        paddingRight: "50px", // Space for the button
                                        height: "50px",
                                    }}
                                />
                                <button

                                className='footerButton'
                                    style={{
                                        position: "absolute",
                                        right: "0px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        border: "none",
                                        background: "#FED112",
                                        color: "#000000",
                                        borderTopRightRadius: "20px",
                                        WebkitBorderBottomRightRadius: "20px",
                                        paddingTop: "0.8%",
                                        paddingBottom: "0.5%",
                                        paddingRight: "7.5%",
                                        paddingLeft: "7.5%",
                                        cursor: "pointer",
                                    }}
                                >
                                    <h2><i className="bi bi-chevron-right" style={{ fontSize: "20px" }}></i></h2>
                                </button>
                            </div>
                            <div className='my-4' style={{ fontSize: "20px" }}>Or drop an email with your details & requirements to <Link href="mailto:info@dzignstory.com" style={{ color: "#ffffff", textDecoration: "none" }}>info@dzignstory.com</Link> </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
