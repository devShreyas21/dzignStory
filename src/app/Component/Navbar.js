import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            {/* pc view */}
            <div className='container phoneHide' style={{ paddingInline: "15%", paddingTop: "2%", paddingBottom:"2%" }}>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-md-2 text-center ' >
                        <Link href="/Projects" className='navlink'>Projects</Link>
                    </div>
                    <div className='col-md-2 text-center '><Link href="/Teams"className='navlink'>Team</Link></div>
                    <div className='col-md-4 text-center '><Link href="/"><img src="/images/dzign-story-logo.png" alt="" style={{ width: "70%" }} /></Link></div>
                    <div className='col-md-2 text-center '><Link href="#services"className='navlink'>Service</Link></div>
                    <div className='col-md-2 text-center '><Link href="/Contact"className='navlink'>Contact</Link></div>
                </div>
            </div>


            {/* mobile view */}
            <nav className="navbar navbar-expand-lg  pchide">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                    
                    <img src="/images/dzign-story-logo.png" style={{width:"50%"}} alt="" />

                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
                            <li className="nav-item">
                                <Link className="nav-link navlink active" aria-current="page" href="/Projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navlink active" aria-current="page" href="/">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navlink active" aria-current="page" href="#services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navlink active" aria-current="page" href="/Contact">Contact</Link>
                            </li>
                            
                            
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
