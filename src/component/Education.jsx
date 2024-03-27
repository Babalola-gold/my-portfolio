import React from 'react'
import img from '../assets/p1 (2).jpg'
import img2 from '../assets/p1 (1).png'

const Education = () => {
    return (
        <>

            <section data-aos="flip-down" className="aos-init aos-animate">
                <br /><br />
                <div id="education" className="flex lg:ms-96 ms-20 gap-5 mb-10" data-aos="flip-down">

                    <div className="text-white text-4xl text-center lg:ms-36">Education</div>
                    <div className="text-white mt-1">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="text-gray-600 lg:flex my-5 text-center">
                    <div id="edu" className="mx-auto rounded bg-white">
                        <img className="img-fluid mx-auto lg:mt-5 mt-5 mb-2" width="50" src={img} alt="" />
                        <img src="" alt="" />
                        <h1 className="font-bold">SQI College Of ICT</h1>
                        <p className="font-bold">FULL-STACK Development</p>
                        <p className="font-bold">April 2023 - Feb 2024</p>
                    </div>
                    <div id="edu" className="mx-auto rounded bg-white">
                        <img className="img-fluid mx-auto lg:mt-5 mt-5 mb-2" width="70" src={img2} alt="" />
                        <h1 className="font-bold">UNILORIN</h1>
                        <p className="font-bold">BSc PLANT BIOLOGY</p>
                        <p className="font-bold">2012 - 2017</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education