"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Navbar from "./Component/Navbar";

import Image from "next/image";

export default function Page() {

  const images = [
    '/images/lnt.png',
    '/images/CLIENTS-22.png',
    '/images/CLIENTS-21.png',
    '/images/CLIENTS-19.png',
    '/images/CLIENTS-17.png',
    '/images/CLIENTS-18.png',
    '/images/CLIENTS-24.png',
    '/images/CLIENTS-25.png',
    '/images/i-mates-logo 1.png',
    '/images/CLIENTS-27.png',
    '/images/CLIENTS-26.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Duration of fade-out before changing image
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const logos = Array.from({ length: 16 }, (_, i) => `/images/slider2/Untitled-${i + 1}.png`);
  const logos2 = Array.from({ length: 15 }, (_, i) => `/images/slider1/Untitled-${i + 1}.png`);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <>
      {/* Hero section */}
      <div className="hero">
        <Navbar />

        <div className="d-flex flex-column innerHero align-items-center justify-content-center">
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
      </div>

      {/* Services */}
      <div className="d-flex align-items-center justify-content-center" id="services" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container my-5">
          <div className="text-center">
            <h3 className="subHeading">Services</h3>
            <h2 className="mainHeading">Your Digital Growth, Our Expertise</h2>
          </div>

          <div className="my-5">
            <div className="row g-3 service"> {/* Bootstrap gap utility for spacing */}

              {/* Service Card 1 */}
              <div className="col-md-5 col-12">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-3" >
                    <h3 className="card-title subHeading">Branding & Advertising</h3>
                    <p className="card-text subHeading">
                      Crafting bold identities that captivate and connect.
                    </p>
                  </div>
                  <img src="/images/photo-1.jpeg" alt="Branding" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="col-md-5 col-12">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-3">
                    <h3 className="card-title subHeading">Website & SEO</h3>
                    <p className="card-text subHeading">
                      Optimized websites that rank, engage, and convert.
                    </p>
                  </div>
                  <img src="/images/photo-3.jpeg" alt="SEO" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

              {/* Service Card 5 */}
              <div className="col-md-5 col-12">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-3">
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
              <div className="col-md-5 col-12">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-3">
                    <h3 className="card-title subHeading">Product Photography</h3>
                    <p className="card-text subHeading">
                      Showcasing products with precision and creativity.
                    </p>
                  </div>
                  <img src="/images/photo-4.jpeg" alt="Photography" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

              {/* Service Card 5 */}
              <div className="col-md-5 col-12">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-3">
                    <h3 className="card-title subHeading">Packaging Design</h3>
                    <p className="card-text subHeading">
                      Designing experiences that impress instantly.
                    </p>
                  </div>
                  <img src="/images/photo-2.jpeg" alt="Packaging" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="col-md-5 col-12">
                <div className="card d-flex flex-row align-items-center border-0">
                  <div className="card-body ms-3">
                    <h3 className="card-title subHeading">Video Production</h3>
                    <p className="card-text subHeading">
                      Visual storytelling that leaves a lasting impact.
                    </p>
                  </div>
                  <img src="/images/photo-5.jpeg" alt="Video" className="img-fluid" style={{ width: '200px' }} />
                </div>
              </div>

            </div>
            <div className="row mobileOnly ">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <img src="/images/photo-1.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title subHeading">Branding & Advertising</h5>
                    <p className="card-text subHeading">Crafting bold identities that captivate and connect.</p>

                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <img src="/images/photo-3.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title subHeading">Website & SEO</h5>
                    <p className="card-text subHeading">Optimized websites that rank, engage, and convert.</p>

                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <img src="/images/photo-2.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title subHeading">Social media & Strategies</h5>
                    <p className="card-text subHeading">Helping you build strong presence across platforms</p>

                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <img src="/images/photo-4.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title subHeading">Product Photography</h5>
                    <p className="card-text subHeading">Showcasing products with precision and creativity.</p>

                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <img src="/images/photo-2.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title subHeading">Packaging Design</h5>
                    <p className="card-text subHeading">Designing experiences that impress instantly.</p>

                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                <div className="card border-0" style={{ width: "18rem" }}>
                  <img src="/images/photo-5.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title subHeading">Video Production</h5>
                    <p className="card-text subHeading">Visual storytelling that leaves a lasting impact.</p>

                  </div>
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


          <div className="row my-5  d-flex justify-content-center align-items-center">
            <div className="col-md-6 margin">
              <div>
                <h3 className="subHeading">About Us</h3>
                <h2 className="mainHeading">Your Vision, Our Creative Execution</h2>
              </div>
              <p className="subHeading">At Dzign Story, we are a young team by brain and mature by heart—blending fresh ideas with deep understanding to craft impactful digital solutions. We don’t just design; we decode your pain points and transform them into seamless, result-driven strategies that make your digital path clear.</p>
              <p className="subHeading">Since 2018, we’ve been helping medium and large enterprises elevate their brand presence with passion, creativity, and innovation. Whether it’s branding, website development, or SEO, we bring stories to life through design and strategy—turning visions into success. <br />Let’s create something extraordinary together!</p>

              <div className="center">
                <Link href="/Contact">
                  <button className="btn subHeading" style={{ backgroundColor: '#FED112', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif' }}>More Curious ?</button>
                </Link>
              </div>

            </div>

            <div className="col-md-6 text-center">
              <img src="/images/videos/aboutUs.gif" alt="" style={{ width: "65%" }} />
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

          <div className="row my-5 pconly">
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

          <div className="text-center mobileOnly">
            {/* <img src={images[currentIndex]} style={{ width: "100%" }} alt="Slide" /> */}
            <img
              src={images[currentIndex]}
              alt="Slide"
              style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                width: "100%"
              }}
            />
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
      <div className="d-flex align-item-center justify-content-center mt-5">
        <div className="container mt-5">
          <div>
            <h3 className="subHeading text-center">Our USP</h3>
            <h2 className="mainHeading text-center">180+ Brand logos designed till date</h2>
          </div>

        </div>

      </div>

      <div className="my-5">

        <div className="marquee-container">
          <div className="marquee-content">

            <img src="/images/slider1/Untitled-1.png" alt="Image 1" />
            <img src="/images/slider1/Untitled-2.png" alt="Image 2" />
            <img src="/images/slider1/Untitled-3.png" alt="Image 3" />
            <img src="/images/slider1/Untitled-4.png" alt="Image 4" />
            <img src="/images/slider1/Untitled-5.png" alt="Image 5" />
            <img src="/images/slider1/Untitled-6.png" alt="Image 6" />
            <img src="/images/slider1/Untitled-7.png" alt="Image 7" />
            <img src="/images/slider1/Untitled-8.png" alt="Image 8" />
            <img src="/images/slider1/Untitled-9.png" alt="Image 9" />
            <img src="/images/slider1/Untitled-10.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-11.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-12.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-13.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-14.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-15.png" alt="Image 10" />


            <img src="/images/slider1/Untitled-1.png" alt="Image 1" />
            <img src="/images/slider1/Untitled-2.png" alt="Image 2" />
            <img src="/images/slider1/Untitled-3.png" alt="Image 3" />
            <img src="/images/slider1/Untitled-4.png" alt="Image 4" />
            <img src="/images/slider1/Untitled-5.png" alt="Image 5" />
            <img src="/images/slider1/Untitled-6.png" alt="Image 6" />
            <img src="/images/slider1/Untitled-7.png" alt="Image 7" />
            <img src="/images/slider1/Untitled-8.png" alt="Image 8" />
            <img src="/images/slider1/Untitled-9.png" alt="Image 9" />
            <img src="/images/slider1/Untitled-10.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-11.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-12.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-13.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-14.png" alt="Image 10" />
            <img src="/images/slider1/Untitled-15.png" alt="Image 10" />
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content-reverse">

            <img src="/images/slider2/Untitled-1.png" alt="Image 1" />
            <img src="/images/slider2/Untitled-2.png" alt="Image 2" />
            <img src="/images/slider2/Untitled-3.png" alt="Image 3" />
            <img src="/images/slider2/Untitled-4.png" alt="Image 4" />
            <img src="/images/slider2/Untitled-5.png" alt="Image 5" />
            <img src="/images/slider2/Untitled-6.png" alt="Image 6" />
            <img src="/images/slider2/Untitled-7.png" alt="Image 7" />
            <img src="/images/slider2/Untitled-8.png" alt="Image 8" />
            <img src="/images/slider2/Untitled-9.png" alt="Image 9" />
            <img src="/images/slider2/Untitled-10.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-11.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-12.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-13.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-14.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-15.png" alt="Image 10" />


            <img src="/images/slider2/Untitled-1.png" alt="Image 1" />
            <img src="/images/slider2/Untitled-2.png" alt="Image 2" />
            <img src="/images/slider2/Untitled-3.png" alt="Image 3" />
            <img src="/images/slider2/Untitled-4.png" alt="Image 4" />
            <img src="/images/slider2/Untitled-5.png" alt="Image 5" />
            <img src="/images/slider2/Untitled-6.png" alt="Image 6" />
            <img src="/images/slider2/Untitled-7.png" alt="Image 7" />
            <img src="/images/slider2/Untitled-8.png" alt="Image 8" />
            <img src="/images/slider2/Untitled-9.png" alt="Image 9" />
            <img src="/images/slider2/Untitled-10.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-11.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-12.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-13.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-14.png" alt="Image 10" />
            <img src="/images/slider2/Untitled-15.png" alt="Image 10" />
          </div>
        </div>



      </div>


      {/* Testimonials */}
      <div className="d-flex flex-column align-item-center justify-content-center py-5" style={{ backgroundColor: '#F6FCFF' }}>
        <div className="container ">
          <div className="margin">
            <h3 className="subHeading">Testimonials</h3>
            <h2 className="mainHeading">We care about our customer experiences</h2>
          </div>

          <div className="container">
            <div className="row my-5">
              <div className="col-md-6 col-12 my-2">
                <div className="card" style={{ backgroundColor: "#FFFFFF", padding: "5%", border: "none" }}>
                  <div className="subHeading">We have been working with Dzign Story for the past nine years for all our corporate branding and advertising needs. It has been an exceptional experience with this agency.

                    Their unique ability to transform innovative ideas into well-crafted designs, coupled with their impressive on-time project deliveries, truly sets them apart. If you are looking for a highly efficient and expert team to handle your organization&apos;s advertising needs, your search ends here.

                    Working with Dzign Story has been a journey from expectations to delight, and we highly recommend them as a trusted and creative advertising partner.

                    Wishing Dzign Story continued success and a prosperous future ahead!
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-2 d-flex-mobile">
                      <div style={{ width: "50px", height: "50px", backgroundColor: "#EDEDED", borderRadius: "50%" }}></div>
                    </div>
                    <div className="col-md-10">
                      <div className="subHeading">Mohasin Nadaf</div>
                      <div className="subHeading">Elite School of Professional Accountant</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 my-2">
                <div className="card" style={{ backgroundColor: "#FFFFFF", padding: "5%", border: "none" }}>
                  <div className="subHeading">Very professional and high-quality work! We have been associated with Dzign Story for the past four years for our institutional in-house magazine, and they have consistently met and exceeded our expectations.

                    Their creativity, attention to detail, and commitment to delivering exceptional designs make them a standout agency. The team is highly responsive, ensuring that all our requirements are fulfilled seamlessly.

                    If you are looking for a reliable and skilled creative partner, Dzign Story is the right choice. We highly recommend them for their dedication, expertise, and outstanding service.
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-2 d-flex-mobile">
                      <div style={{ width: "50px", height: "50px", backgroundColor: "#EDEDED", borderRadius: "50%" }}></div>
                    </div>
                    <div className="col-md-10">
                      <div className="subHeading">Dharmendra Trivedi</div>
                      <div className="subHeading">L&T IPM</div>
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
