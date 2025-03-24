"use client";
import React, { useEffect } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <>
      {/* Hero section */}
      <div className="d-flex flex-column align-items-center hero justify-content-center">
        <h1 className="text-center mainHeading heroHeading" >
          We design <br /> immersive brand identities & <br /> story-driven logos
        </h1>
        <p className="text-center mt-3 subHeading">
          Helping businesses create a strong and memorable presence.
        </p>
        <Link href="/Contact">
          <button className="btn subHeading" style={{ backgroundColor: '#FED112', borderRadius: '5px' }}>Lets connect</button>
        </Link>
      </div>

      {/* Services */}
      <div className="d-flex align-items-center justify-content-center" id="services" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container my-5">
          <div className="text-center">
            <h3 className="subHeading">Services</h3>
            <h2 className="mainHeading">Your Digital Growth, Our Expertise</h2>
          </div>

          <div className="my-5">
            <div className="row g-3 d-flex justify-content-evenly"> {/* Bootstrap gap utility for spacing */}

              {/* Service Card 1 */}
              <div className="col-md-5">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-4" >
                    <h3 className="card-title subHeading">Branding & Advertising</h3>
                    <p className="card-text subHeading">
                      Crafting bold identities that captivate and connect.
                    </p>
                  </div>
                  <img src="/images/photo-1.jpeg" alt="Branding" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="col-md-5">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-4">
                    <h3 className="card-title subHeading">Website & SEO</h3>
                    <p className="card-text subHeading">
                      Optimized websites that rank, engage, and convert.
                    </p>
                  </div>
                  <img src="/images/photo-3.jpeg" alt="SEO" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

              {/* Service Card 5 */}
              <div className="col-md-5">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-4">
                    <h3 className="card-title subHeading">Social media &
                      Strategies</h3>
                    <p className="card-text subHeading">
                      Helping you build strong
                      presence across platforms
                    </p>
                  </div>
                  <img src="/images/photo-2.jpeg" alt="Packaging" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>



              {/* Service Card 4 */}
              <div className="col-md-5">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-4">
                    <h3 className="card-title subHeading">Product Photography</h3>
                    <p className="card-text subHeading">
                      Showcasing products with precision and creativity.
                    </p>
                  </div>
                  <img src="/images/photo-4.jpeg" alt="Photography" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

              {/* Service Card 5 */}
              <div className="col-md-5">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-4">
                    <h3 className="card-title subHeading">Packaging Design</h3>
                    <p className="card-text subHeading">
                      Designing experiences that impress instantly.
                    </p>
                  </div>
                  <img src="/images/photo-2.jpeg" alt="Packaging" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="col-md-5">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-4">
                    <h3 className="card-title subHeading">Video Production</h3>
                    <p className="card-text subHeading">
                      Visual storytelling that leaves a lasting impact.
                    </p>
                  </div>
                  <img src="/images/photo-5.jpeg" alt="Video" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Link href="/Contact">
              <button className="btn subHeading" style={{ backgroundColor: '#FED112', fontFamily: 'Montserrat, sans-serif' }}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* About Us  */}
      <div className="d-flex flex-column align-item-center justify-content-center">
        <div className="container my-5 ">
          <div>
            <h3 className="subHeading">About Us</h3>
            <h2 className="mainHeading">Your Vision, Our Creative Execution</h2>
          </div>

          <div className="row my-5">
            <div className="col-md-6">
              <p className="subHeading">At Dzign Story, we are a young team by brain and mature by heart—blending fresh ideas with deep understanding to craft impactful digital solutions. We don’t just design; we decode your pain points and transform them into seamless, result-driven strategies that make your digital path clear.</p>
              <p className="subHeading">Since 2018, we’ve been helping medium and large enterprises elevate their brand presence with passion, creativity, and innovation. Whether it’s branding, website development, or SEO, we bring stories to life through design and strategy—turning visions into success. <br />Let’s create something extraordinary together!</p>

              <div>
                <Link href="/Contact">
                  <button className="btn subHeading" style={{ backgroundColor: '#FED112', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif' }}>More Curious ?</button>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Our Clients */}
      <div className="d-flex align-item-center justify-content-center" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container my-5">
          <div>
            <h3 className="subHeading text-center">Our Clients</h3>
            <h2 className="mainHeading text-center">Brands We’ve Empowered, Stories We’ve Created</h2>
          </div>

          <div className="row d-flex justify-content-center align-items-center my-5">
            <div className="col-md-3 text-center">
              <img style={{ width: "70%" }} src="/images/lnt.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/CLIENTS-22.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/CLIENTS-21.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/CLIENTS-19.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/CLIENTS-17.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/CLIENTS-18.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/CLIENTS-24.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/CLIENTS-25.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/i-mates-logo 1.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "70%" }} src="/images/CLIENTS-23.png" alt="" />
            </div>
            <div className="col-md-3  text-center">
              <img style={{ width: "50%" }} src="/images/CLIENTS-27.png" alt="" />
            </div>
            <div className="col-md-3 text-center ">
              <img style={{ width: "70%" }} src="/images/CLIENTS-26.png" alt="" />
            </div>
          </div>


          <div className="d-flex justify-content-center">
            <Link href="/Contact">
              <button className="btn subHeading" style={{ backgroundColor: '#FED112', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif' }}>
                Be one of them
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Yellow Background  */}
      <div className="d-flex align-item-center justify-content-center" style={{ backgroundColor: '#FED112' }}>
        <div className="my-5">
          <div className="container my-5">
            <div>
              <h2 className="mainHeading text-center">Want to build a brand that stands out, connects
                deeply, and drives success?</h2>
            </div>
            <div className="d-flex justify-content-center my-5">
              <Link href="/Contact">
                <button className="btn subHeading" style={{ backgroundColor: '#ffffff', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif', width: '350px' }}>
                  Start your journey with us today!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Our USP  */}
      <div className="d-flex align-item-center justify-content-center">
        <div className="container mt-5">
          <div>
            <h3 className="subHeading text-center">Our USP</h3>
            <h2 className="mainHeading text-center">180+ Brand logos designed till date</h2>
          </div>

        </div>

      </div>


      <div className="my-5">

        <marquee behavior="scroll" direction="right"  >
          <img src="/images/slider1/Untitled-1.png" alt="" />
          <img src="/images/slider1/Untitled-2.png" alt="" />
          <img src="/images/slider1/Untitled-3.png" alt="" />
          <img src="/images/slider1/Untitled-4.png" alt="" />
          <img src="/images/slider1/Untitled-5.png" alt="" />
          <img src="/images/slider1/Untitled-6.png" alt="" />
          <img src="/images/slider1/Untitled-7.png" alt="" />
          <img src="/images/slider1/Untitled-8.png" alt="" />
          <img src="/images/slider1/Untitled-9.png" alt="" />
          <img src="/images/slider1/Untitled-10.png" alt="" />
          <img src="/images/slider1/Untitled-11.png" alt="" />
          <img src="/images/slider1/Untitled-12.png" alt="" />
          <img src="/images/slider1/Untitled-13.png" alt="" />
          <img src="/images/slider1/Untitled-14.png" alt="" />
          <img src="/images/slider1/Untitled-15.png" alt="" />

          <img src="/images/slider1/Untitled-1.png" alt="" />
          <img src="/images/slider1/Untitled-2.png" alt="" />
          <img src="/images/slider1/Untitled-3.png" alt="" />
          <img src="/images/slider1/Untitled-4.png" alt="" />
          <img src="/images/slider1/Untitled-5.png" alt="" />
          <img src="/images/slider1/Untitled-6.png" alt="" />
          <img src="/images/slider1/Untitled-7.png" alt="" />
          <img src="/images/slider1/Untitled-8.png" alt="" />
          <img src="/images/slider1/Untitled-9.png" alt="" />
          <img src="/images/slider1/Untitled-10.png" alt="" />
          <img src="/images/slider1/Untitled-11.png" alt="" />
          <img src="/images/slider1/Untitled-12.png" alt="" />
          <img src="/images/slider1/Untitled-13.png" alt="" />
          <img src="/images/slider1/Untitled-14.png" alt="" />
          <img src="/images/slider1/Untitled-15.png" alt="" />
        </marquee>

        <marquee behavior="scroll" direction="left"  >
          <img src="/images/slider2/Untitled-1.png" alt="" />
          <img src="/images/slider2/Untitled-2.png" alt="" />
          <img src="/images/slider2/Untitled-3.png" alt="" />
          <img src="/images/slider2/Untitled-4.png" alt="" />
          <img src="/images/slider2/Untitled-5.png" alt="" />
          <img src="/images/slider2/Untitled-6.png" alt="" />
          <img src="/images/slider2/Untitled-7.png" alt="" />
          <img src="/images/slider2/Untitled-8.png" alt="" />
          <img src="/images/slider2/Untitled-9.png" alt="" />
          <img src="/images/slider2/Untitled-10.png" alt="" />
          <img src="/images/slider2/Untitled-11.png" alt="" />
          <img src="/images/slider2/Untitled-12.png" alt="" />
          <img src="/images/slider2/Untitled-13.png" alt="" />
          <img src="/images/slider2/Untitled-14.png" alt="" />
          <img src="/images/slider2/Untitled-15.png" alt="" />
          <img src="/images/slider2/Untitled-16.png" alt="" />


          <img src="/images/slider2/Untitled-1.png" alt="" />
          <img src="/images/slider2/Untitled-2.png" alt="" />
          <img src="/images/slider2/Untitled-3.png" alt="" />
          <img src="/images/slider2/Untitled-4.png" alt="" />
          <img src="/images/slider2/Untitled-5.png" alt="" />
          <img src="/images/slider2/Untitled-6.png" alt="" />
          <img src="/images/slider2/Untitled-7.png" alt="" />
          <img src="/images/slider2/Untitled-8.png" alt="" />
          <img src="/images/slider2/Untitled-9.png" alt="" />
          <img src="/images/slider2/Untitled-10.png" alt="" />
          <img src="/images/slider2/Untitled-11.png" alt="" />
          <img src="/images/slider2/Untitled-12.png" alt="" />
          <img src="/images/slider2/Untitled-13.png" alt="" />
          <img src="/images/slider2/Untitled-14.png" alt="" />
          <img src="/images/slider2/Untitled-15.png" alt="" />
          <img src="/images/slider2/Untitled-16.png" alt="" />

        </marquee>
      </div>


      {/* Testimonials */}
      <div className="d-flex flex-column align-item-center justify-content-center py-5" style={{ backgroundColor: '#F6FCFF' }}>
        <div className="container ">
          <div>
            <h3 className="subHeading">Testimonials</h3>
            <h2 className="mainHeading">We care about our customer experiences</h2>
          </div>

          <div className="container">
            <div className="row my-5">
              <div className="col-md-6 col-12">
                <div className="card" style={{ backgroundColor: "#FFFFFF", padding: "5%", border: "none" }}>
                  <div className="subHeading">At Dzign Story, we are a young team by brain and mature by heart—blending fresh ideas with deep understanding to craft impactful digital solutions. We don’t just design; we decode your pain points and transform them into seamless, result-driven strategies that make your digital path clear.</div>

                  <div className="row mt-5">
                    <div className="col-md-2 d-flex justify-content-center">
                      <div style={{ width: "50px", height: "50px", backgroundColor: "#EDEDED", borderRadius: "50%" }}></div>
                    </div>
                    <div className="col-md-10">
                      <div className="subHeading">Client Name</div>
                      <div className="subHeading">Company</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="card" style={{ backgroundColor: "#FFFFFF", padding: "5%", border: "none" }}>
                  <div className="subHeading">At Dzign Story, we are a young team by brain and mature by heart—blending fresh ideas with deep understanding to craft impactful digital solutions. We don’t just design; we decode your pain points and transform them into seamless, result-driven strategies that make your digital path clear.</div>

                  <div className="row mt-5">
                    <div className="col-md-2 d-flex justify-content-center">
                      <div style={{ width: "50px", height: "50px", backgroundColor: "#EDEDED", borderRadius: "50%" }}></div>
                    </div>
                    <div className="col-md-10">
                      <div className="subHeading">Client Name</div>
                      <div className="subHeading">Company</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </>

  );
}
