import React from 'react';

function Contact() {
    return (

        <div className="relative flex items-top justify-center mt-6 min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-[#fdd3da] dark:bg-gray-800 sm:rounded-lg">
                            <h1 className="MainTitle mb-5 text-5xl tracking-tight text-black dark:text-black font-extrabold">
                                Get in touch
                            </h1>
                            <p className="text-normal text-lg sm:text-2xl font-medium text-black dark:text-black mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-black dark:text-black">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-[#F43F5E]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Nova Nanny, Leeds Street, NS, B3K 3S3

                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-black dark:text-black">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-[#F43F5E]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    902-410-2018
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-black dark:text-black">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className

                                    ="w-8 h-8 text-[#F43F5E]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className

                                    ="ml-4 text-md tracking-wide font-semibold w-40">
                                    info@novananny.ca
                                </div>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col mt-2">
                                <label for="name" className="hidden">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="Full Name"
                                    className="contact-input text-gray-800 rounded-lg w-100 mt-2 py-3 px-3 block w-full transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#f21a3f] focus:ring-opacity-50 animate-pulse" />
                            </div>


                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email"
                                    className="contact-input text-gray-800 rounded-lg w-100 mt-2 py-3 px-3 block w-full transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#f21a3f] focus:ring-opacity-50 animate-pulse" />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">Number</label>
                                <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="contact-input text-gray-800 rounded-lg w-100 mt-2 py-3 px-3 block w-full transition duration-500 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#f21a3f] focus:ring-opacity-50 animate-pulse" />
                            </div>

                            <button type='submit'
                                className="md:w-32 bg-[#F43F5E] font-semibold rounded-md tracking-widest px-6 py-3 mt-3 text-stone-100
                 align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
                 hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Contact;