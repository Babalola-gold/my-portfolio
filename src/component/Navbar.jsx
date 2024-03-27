import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation()
    return (
        <>
            
            <nav style={{borderBottom:'1px solid black'}} className='w-full mt-5 '>
                <div style={{gap:'30%'}} className='flex items-center '>
                    <Link to="/home" className={`nav-button ${location.pathname === '/home' ? 'active' : ''}`}>
                        <div>
                            Home
                        </div>
                    </Link>
                    <ul className='flex justify-center items-center gap-4'>
                        <Link to="/about" className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}>
                            <div>
                                About
                            </div>
                        </Link>

                        <Link to="/skills" className={`nav-button ${location.pathname === '/skills' ? 'active' : ''}`}>
                            <div>
                                Skills
                            </div>
                        </Link>

                        <Link to="/project" className={`nav-button ${location.pathname === '/project' ? 'active' : ''}`}>
                            <div>
                                Projects
                            </div>
                        </Link>

                        <Link to="/contact" className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <div>
                                Contacts
                            </div>
                        </Link>

                        <Link to="/education" className={`nav-button ${location.pathname === '/education' ? 'active' : ''}`}>
                            <div>
                                Education
                            </div>
                        </Link>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar