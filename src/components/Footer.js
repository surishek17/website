import React from 'react';
import logo from '../assets/Logo.png';
import appstore from '../assets/downloadappstore.png';
import google from '../assets/google.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-300">
            <div className="container mx-auto py-8">
                <div className="flex flex-wrap justify-between">

                    {/* First Column - Logo */}
                    <div className="w-full md:w-1/5 mb-8 md:mb-0">
                        <img src={logo} alt="logo" className="mb-4 h-24 w-36" />
                    </div>

                    {/* Second Column - Call and Connect */}
                    <div className="w-full md:w-1/5 mb-8 md:mb-0">
                        <div className="mb-4">
                            <p className="text-gray-800 font-semibold text-2xl">Call</p>
                            <hr class="w-48 h-1 mt-3 bg-gray-100 border-0 rounded mb-2 dark:bg-gray-300"></hr>
                            <a href="tel:1800309309" className="text-green-600 text-xl">1800 309 309</a>
                        </div>
                        <div>
                            <p className="text-gray-800 font-semibold mt-8 mb-4 text-2xl">Connect</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-green-600 text-xl"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-gray-600 hover:text-green-600 text-xl"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-gray-600 hover:text-green-600 text-xl"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-gray-600 hover:text-green-600 text-xl"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-gray-600 hover:text-green-600 text-xl"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Third Column - Email and Download Our App */}
                    <div className="w-full md:w-1/5 mb-8 md:mb-0">
                        <div className="mb-4">
                            <p className="text-gray-800 font-semibold text-2xl">Email</p>
                            <hr class="w-60 h-1 mt-3 bg-gray-100 border-0 rounded mb-2 dark:bg-gray-300"></hr>
                            <a href="mailto:info@Soniceramics.com" className="text-green-600 text-xl">info@soniceramics.com</a>
                        </div>
                        <div>
                            <p className="text-gray-800 font-semibold mb-2 mt-8 text-2xl">Download Our App</p>
                            <div className="flex flex-col">
                                <a href="#" className="text-blue-600">
                                    <img src={appstore} alt="App Store" className="h-16 w-48" />
                                </a>
                                <a href="#" className="text-blue-600 mt-2">
                                    <img src={google} alt="Google Play" className="h-16 w-48" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Fourth Column - Quick Links */}
                    <div className="w-full md:w-1/5 mb-8 md:mb-0">
                        <h4 className="text-gray-800 font-semibold mb-4 text-2xl">Quick links</h4>
                        <hr class="w-60 h-1 mt-3 bg-gray-100 border-0 rounded mb-2 dark:bg-gray-300"></hr>
                        <ul className='space-y-4'>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold ">Metallic Ceramic Tiles</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold ">Wood Wall Tiles</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold ">Rustic Kitchen Wall Tiles</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold ">Where To Buy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold ">Corporate Office</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold ">Display Centers / Offices</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold ">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold ">Login/Register</a></li>
                        </ul>
                    </div>

                    {/* Fifth Column - About Us */}
                    <div className="w-full md:w-1/5">
                        <h4 className="text-gray-800 font-semibold mb-4 text-2xl">About Us</h4>
                        <hr class="w-60 h-1 mt-3 bg-gray-100 border-0 rounded mb-2 dark:bg-gray-300"></hr>
                        <ul className='space-y-4'>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold">Company Information</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold">Chairman's Message</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold">Our Exports</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold">Awards & Certifications</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold">Rustic Wall Tiles</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold">Tiles</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold">Metallic Kitchen Tiles</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-600 text-xl font-semibold">Manufacturing Facilities</a></li>
                        </ul>
                    </div>
                </div>

                {/* Products Section */}
                <div className="mt-28 text-left">
                    <h4 className="text-gray-800 font-semibold mb-4 text-xl">Products</h4>
                    <div className="flex flex-wrap border-t border-gray-300">
                        <a href="#" className="text-gray-400 hover:text-green-600 mr-4 mb-2 text-lg font-semibold">Bathroom Tiles |</a>
                        <a href="#" className="text-gray-400 hover:text-green-600 mr-4 mb-2 text-lg font-semibold">Kitchen Tiles |</a>
                        <a href="#" className="text-gray-400 hover:text-green-600 mr-4 mb-2 text-lg font-semibold">Wall Tiles |</a>
                        <a href="#" className="text-gray-400 hover:text-green-600 mr-4 mb-2 text-lg font-semibold">Floor Tiles |</a>
                        <a href="#" className="text-gray-400 hover:text-green-600 mr-4 mb-2 text-lg font-semibold">Vitrified Tiles |</a>
                        <a href="#" className="text-gray-400 hover:text-green-600 mr-4 mb-2 text-lg font-semibold">Ceramic Tiles |</a>
                        <a href="#" className="text-gray-400 hover:text-green-600 mr-4 mb-2 text-lg font-semibold">Polished Vitrified Tiles |</a>
                        <a href="#" className="text-gray-400 hover:text-green-600 mr-4 mb-2 text-lg font-semibold">Eternity - Glazed Vitrified Tiles</a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-24 mb-10 border-t border-black pt-4 text-center text-gray-600 text-lg">
                    <p>RNC and Sons Private Limited © All Rights Reserved | <a href="#" className="text-green-600 hover:underline">Disclaimer</a> | <a href="#" className="text-green-600 hover:underline">Caution Notice</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
