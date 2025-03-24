'use client'
import React, { useState } from 'react'

export default function Page() {

    const [selectedService, setSelectedService] = useState('Logo Design projects is ₹ 25,000');
    const [statusMessage, setStatusMessage] = useState('');
    const [statusColor, setStatusColor] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleCheckboxChange = (service) => {
        setSelectedService(service);
    };

    const services = [
        { id: 'logo', name: 'Logo Designning', price: '₹ 25,000' },
        { id: 'web', name: 'Website Development', price: '₹ 50,000' },
        { id: 'packaging', name: 'Product Packaging', price: '₹ 30,000' },
        { id: 'branding', name: 'Branding Consulting', price: '₹ 40,000' },
        { id: 'video', name: 'Video Production & Photography', price: '₹ 60,000' }
    ];

    const validateForm = (name, organization, email, contact) => {
        if (!name || !organization || !email || !contact) {
            setStatusColor('red');
            setStatusMessage('Please fill all the required fields.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatusColor('red');
            setStatusMessage('Invalid email format.');
            return false;
        }
        const contactRegex = /^[0-9]+$/;
        if (!contactRegex.test(contact)) {
            setStatusColor('red');
            setStatusMessage('Contact number must contain only digits.');
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        const name = document.getElementById('name').value;
        const organization = document.getElementById('organization').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const website = document.getElementById('website').value;

        // Validate before submitting
        if (!validateForm(name, organization, email, contact)) return;

        const data = { name, organization, email, contact, website, selectedService };

        setIsLoading(true); // Show loading overlay

        try {
            const response = await fetch('http://localhost:3000/api/SendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatusColor('green');
                setStatusMessage('Email sent successfully!');
            } else {
                setStatusColor('red');
                setStatusMessage('Failed to send email.');
            }
        } catch (error) {
            setStatusColor('red');
            setStatusMessage('An error occurred. Please try again later.');
            console.error('Error:', error);
        } finally {
            setIsLoading(false); // Hide loading overlay
        }
    };


    return (
        <div style={{ backgroundColor: "#F9F9F9" }}>
            {isLoading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}>
                    {/* Replace this with your logo */}
                    <img src="/images/dzign-story-logo.png" alt="Loading" style={{ width: '100px', height: '100px', animation: 'spin 2s linear infinite' }} />
                </div>
            )}

            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8 col-12 my-5 py-5" style={{ backgroundColor: "#FFFFFF", padding: "3%" }}>
                        <div>
                            <div className='mainHeading mb-4'>Your Brand’s Next Chapter Begins Here
                                Let’s Chat!</div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6 col-12 my-3">
                                <label htmlFor="name" className="inputLabel">Your Name*</label><br />
                                <input type="text" placeholder='Name' id="name" />
                            </div>
                            <div className="col-md-6 col-12 my-3">
                                <label htmlFor="organization" className="inputLabel">Your Organization Name*</label>
                                <input type="text" placeholder='Organization' id="organization" />
                            </div>

                            <div className="col-md-6 col-12 my-3">
                                <label htmlFor="email" className="inputLabel">Your Email*</label><br />
                                <input type="text" placeholder='Email' id="email" />
                            </div>
                            <div className="col-md-6 col-12 my-3">
                                <label htmlFor="contact" className="inputLabel">Your Contact*</label><br />
                                <input type="text" placeholder='Contact' id="contact" />
                            </div>

                            <div className="col-md-12 col-12 my-3">
                                <label htmlFor="website" className="inputLabel">Website / Social media link</label><br />
                                <input type="text" placeholder='Your Website' id="website" />
                            </div>

                            <div className="col-md-12 col-12 my-3">
                                <label className="inputLabel">What services are you interested in?</label><br />

                                {services.map((service) => (
                                    <div key={service.id} style={{ display: "flex", justifyContent: "start" }} className="my-2">
                                        <input
                                            type="checkbox"
                                            style={{ backgroundColor: "#D9D9D9", border: "none", width: "2.5%", marginRight: "1%" }}
                                            onChange={() => handleCheckboxChange(`${service.name} projects is ${service.price}`)}
                                        />
                                        <label className="inputLabel">{service.name}</label>
                                    </div>
                                ))}


                            </div>


                            {/* Investment Section */}
                            <div className="col-md-12 col-12 my-3">
                                <label htmlFor="" className="inputLabel">
                                    How much are you looking to invest on this project? (Our starting rate of {selectedService})
                                </label><br />
                                <input type="text" placeholder='Enter your budget' />
                            </div>

                            <div className="col-md-12 col-12 my-3">
                                <label htmlFor="" className="inputLabel">How did you hear about us?  </label><br />
                                <input type="text" placeholder='Social media / Reference' id="" />
                            </div>

                            {/* Status Message */}
                            {statusMessage && (
                                <div style={{ color: statusColor, marginTop: '20px', fontWeight: 'bold' }}>
                                    {statusMessage}
                                </div>
                            )}
                            <button style={{ backgroundColor: "#FED112", border: "none", width: "30%", padding: "1.5%", borderRadius: "5px", marginLeft: "1.5%" }} className='mt-5 subHeading' onClick={handleSubmit}>Eager to connect</button>

                        </div>
                    </div>

                    <div className="col-md-4 col-12 my-5">
                        <div>

                        </div>
                        <div className='ms-4'>
                            <div className='mainHeading mb-4' style={{ lineHeight: "40px" }}>Your Brand’s<br />
                                Story Starts Now!</div>
                            <div className='subHeading'>Let’s make something extraordinary together!<br /> Share your details, and we’ll be in touch soon.
                            </div>
                            <div className='subHeading mt-4'><b>info@dzignstory.com</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
