import React from 'react';

function Section1() {
    return (
        <section class="bg-white dark:bg-white">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="MainTitle max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark:text-black">Welcome to Nova Nanny</h1>
                <p class="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">Looking for the perfect caregiver for your child can be a daunting task, but our nanny agency makes it easy by connecting you with highly qualified and experienced nannies who are trained to provide exceptional care and support for your family. </p>
                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    {/* <a href="/register" class="inline-flex items-center justify-center w-full px-3 py-3 text-sm font-medium text-center text-[#f21a3f] border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-[#f21a3f] text-[#f21a3f] border-[#f21a3f] hover:bg-[#fdd3da] focus:ring-[#fdd3da]"> */}
                     <a href="/register" className="bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-3 text-stone-100
                 align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
                 hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]"> Get Started
                    </a> 
                    {/* <button type='submit'
                    className="bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-3 text-stone-100
                 align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
                 hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]">
                    Let's Go!
                </button> */}
                </div>
            </div>
            <div class="hidden lg:mt-0 rounded-lg lg:col-span-5 lg:flex">
                <img class= "hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./img/nannyread.jpg" alt="Reading Book"/>
            </div>                
        </div>
    </section>
    );
}

export default Section1;

