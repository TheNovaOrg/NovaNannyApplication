import React from 'react';

function Section2() {
    return (
        <section className="bg-white dark:bg-white">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./img/nannysun.jpg" alt="feature image 2" />
                    <div className="text-black sm:text-lg dark:text-black">
                        <h2 className="MainTitle mb-4 text-3xl font-extrabold tracking-tight text-black dark:text-black">We are the Caring Company</h2>
                        <p className="mb-8 font-light lg:text-xl">Nova Nanny connects families to professional and experienced educators. Our Nannies provide first-className services and care to Nova Scotia families.</p>

                        <ul role="list" className="pt-8 space-y-5 border-t border-[#c60b2b]  my-7 dark:border-[#c60b2b]">
                            <li className="flex space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-[#f21a3f]  dark:text-[#f21a3f] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span className="text-base font-medium leading-tight text-black dark:text-black">Quality care that meets parents needs</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-[#f21a3f]  dark:text-[#f21a3f] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span className="text-base font-medium leading-tight text-black dark:text-black">Flexible scheduling options</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-[#f21a3f] dark:text-[#f21a3f] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span className="text-base font-medium leading-tight text-black dark:text-black">Provide qualified and experienced staff</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-[#f21a3f] dark:text-[#f21a3f]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span className="text-base font-medium leading-tight text-black dark:text-black">Educators are specialized in various areas</span>
                            </li>
                            <li className="flex space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-[#f21a3f] dark:text-[#f21a3f]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span className="text-base font-medium leading-tight text-black dark:text-black">Booking is as easy as ABC</span>
                            </li>
                        </ul>
            
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;


