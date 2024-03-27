import React from 'react';

const Contact = () => {


    return (
        <>
            <div className="grid lg:grid-cols-2">

                
                <div className="lg:mt-36 mt-10 lg:ms-28 ms-8">
                    <div className="text-white">CONTACT ME</div>
                    <form action="">
                        <div className="my-2  w-full rounded">
                            <label className="text-black" htmlFor="fullname">Fullname</label> <br />
                            <input type="text" id="fullname" placeholder="Enter Your Fullname" className="form-control" name="fullName" value="" />
                            <p><small className="text-red-600 font-bold"></small></p>
                        </div>
                        <div className="my-2  w-full rounded">
                            <label className="text-black" htmlFor="email">Email</label> <br />
                            <input type="text" id="email" placeholder="Enter Your Email" className="form-control" name="email" value="" />
                            <p><small className="text-red-600 font-bold"></small></p>
                        </div>
                        <div className="my-2  w-full rounded">
                            <label className="text-black" htmlFor="org">Organization</label> <br />
                            <input type="text" id="org" placeholder="Enter Your Organization" className="form-control" name="organization" value="" />
                            <p><small className="text-red-600 font-bold"></small></p>
                        </div>
                        <div className="my-2  w-full rounded">
                            <label className="text-black" htmlFor="message">Message</label> <br />
                            <textarea id="message" placeholder="Enter Your Message" className="form-control" name="message" cols="30" rows="5"></textarea>
                            <p><small className="text-red-600 font-bold"></small></p>
                        </div>
                        <button type="submit" className="text-black w-80 rounded font-bold bg-red-500 p-2">Send Message</button>
                        <div className="text-black font-bold lg:mt-5 mt-1"></div>
                    </form>
                </div>
                <div>
                    <img className="last" src="/assets/team-3bfb9738.png" alt="" width="900" />
                </div>
            </div>
        </>
    );
};

export default Contact;
