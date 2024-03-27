import React from 'react'

const Project = () => {
    return (
        <>
            <div data-aos="fade-up" className="aos-init aos-animate">
                <div id="projects" className="text-white ms-10 my-10">
                    <p className="text-xl">MY PROJECTS</p>
                    <p className="text-6xl font-bold">Overview.</p>
                    <p className="font-bold mt-2">
                        Below projects showcase my work and experience in building real-world applications.
                        Each work is briefly described with links to the code repository and demo links. The projects
                        reflect my ability to work with different technologies without compromising quality in my work.
                    </p>
                </div>

                <div data-aos="flip-left" className="card text-white lg:ms-10 ms-6 lg:grid grid-cols-3 text-gray-900 gap-5 aos-init">

                <div className="text-white p-4 w-80 bg-gray-900 rounded-2xl border border-gray-900 mt-10">
                        <img className="rounded-2xl" src="/image/convertor.png" alt="" width="320" />
                        <p className="text-center font-bold mt-2 text-2xl">School Portal </p>
                        <p className="mt-2 w-[300px]">
                        A school portal is a web-based platform or application that serves as a centralized hub for students, teachers, and administrators to access and manage various aspects of the educational process.
                        </p>
                        <div className="lg:mt-2 p-4">
                            <a className="bg-white p-2 rounded text-gray-900" href="https://l-m-s-front-end.vercel.app/">VIEW PROJECT</a>
                        </div>
                    </div>

                    <div className="text-white p-4 w-80 bg-gray-900 rounded-2xl border border-gray-900 mt-10">
                        <img className="rounded-2xl" src="/image/convertor.png" alt="" width="320" />
                        <p className="text-center font-bold mt-2 text-2xl">Next Front-end </p>
                        <p className="mt-2 w-[300px]">
                        Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing.
                        </p>
                        <div className="lg:mt-2 p-4">
                            <a className="bg-white p-2 rounded text-gray-900" href="https://next-task-uqyk.vercel.app/">VIEW PROJECT</a>
                        </div>
                    </div>

                    <div className="text-white p-4 w-80 bg-gray-900 rounded-2xl border border-gray-900 mt-10">
                        <img className="rounded-2xl" src="/image/convertor.png" alt="" width="320" />
                        <p className="text-center font-bold mt-2 text-2xl">React E-Commerce</p>
                        <p className="mt-2 w-[300px]">
                        Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing.
                        </p>
                        <div className="lg:mt-2 p-4">
                            <a className="bg-white p-2 rounded text-gray-900" href="https://van-life-advance.vercel.app/">VIEW PROJECT</a>
                        </div>
                    </div>


                    <div className="text-white p-4 w-80 bg-gray-900 rounded-2xl border border-gray-900 mt-10">
                        <img className="rounded-2xl" src="/image/convertor.png" alt="" width="320" />
                        <p className="text-center font-bold mt-2 text-2xl">E-Commerce</p>
                        <p className="mt-2 w-[300px]">
                        An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.
                        </p>
                        <div className="lg:mt-2 p-4">
                            <a className="bg-white p-2 rounded text-gray-900" href="https://babalola-gold.github.io/mini-mart/">VIEW PROJECT</a>
                        </div>
                    </div>

                    

                    

                    <div className="text-white p-4 w-80 bg-gray-900 rounded-2xl border border-gray-900 mt-10">
                        <img className="rounded-2xl" src="/image/convertor.png" alt="" width="320" />
                        <p className="text-center font-bold mt-2 text-2xl">Budget App </p>
                        <p className="mt-2 w-[300px]">
                        A budget app is a software application designed to help individuals or businesses manage their finances by tracking income, expenses, savings, and investments.
                        </p>
                        <div className="lg:mt-2 p-4">
                            <a className="bg-white p-2 rounded text-gray-900" href="https://babalola-gold.github.io/my-budget-locker/">VIEW PROJECT</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project