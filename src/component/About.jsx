import React from 'react'

const About = () => {
    return (
        <>
            <div className='aboutme'>
                <h1 className="lg:mx-32 mx-10 sm:mt-20 mt-20 text-white lg:text-3xl text-3xl sm:mt-5">ABOUT ME</h1>


                <p className="lg:ms-32 ms-10 text-white lg:text-5xl text-3xl font-bold">Overview</p>

                <p className="lg:mx-32 mx-5 text-white sm:mt-5 font-normal">
                    I'm a skilled web developer with experience in HTML, CSS, Bootstrap, Tailwind, GitHub, JavaScript,
                    and expertise in frameworks like React and Node.js. I'm a quick learner and collaborate closely with clients
                    to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                </p>


            </div>

            <div className="grid lg:grid-cols-4 gap-5 my-2 lg:ms-20 mx-10 lg:me-20">
                <div id="card" className="bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg">

                    <p className="text-center mt-10 font-bold text-white text-2xl">Web Developer</p>
                </div>
                <div id="card" className="bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg">

                    <p className="text-center mt-10 font-bold text-white text-2xl">Frontend Developer</p>
                </div>
                <div id="card" className="bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg">

                    <p className="text-center mt-10 font-bold text-white text-2xl">Full-stack Developer</p>
                </div>
            </div>
        </>
    )
}

export default About