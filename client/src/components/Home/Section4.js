import React from 'react';

function Section4() {
    return (

    <section id="FAQ" className="bg-white dark: pt-6">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
            <h2 className="MainTitle mb-6 text-3xl font-extrabold tracking-tight text-center text-black lg:mb-8 lg:text-3xl dark:text-black">Frequently Asked Questions</h2>
            <div className="max-w-screen-md mx-auto">
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-black dark:text-gray-400">
                    <h3 id="accordion-flush-heading-1">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-black bg-white border-b border-[#c60b2b] dark:border-[#c60b2b] dark:bg-white dark:text-black" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                            <span className="font-bold">How do you match families with nannies?</span>
                            <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0 text-[#f21a3f]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                        <div className="py-5 border-b border-[#c60b2b] dark:border-[#c60b2b]">
                            <p className="mb-2 text-black dark:text-black">Nova Nanny matches families with nannies by assessing the family's needs and preferences, then selecting nannies from their pool of candidates who meet those requirements. We then present the family with a shortlist of potential candidates and arrange interviews to help the family make their final decision.</p>

                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-2">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-[#c60b2b] dark:border-[#c60b2b] dark:text-black" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                            <span className="font-bold">What is your process for selecting nannies?</span>
                            <svg data-accordion-icon="" className="w-6 h-6 shrink-0 text-[#f21a3f]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                        <div className="py-5 border-b border-[#c60b2b] dark:border-[#c60b2b]">
                            <p className="mb-2 text-black dark:text-gray-400">The process for selecting nannies typically involves an initial screening, interviews, background and reference checks, matching with families, and trial period before placement. Nova Nanny aims to select qualified and experienced nannies who are a good match for the families they serve.</p>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-3">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-[#c60b2b] dark:border-[#c60b2b] dark:text-black" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                            <span className="font-bold">Do you provide temporary or long-term placements?</span>
                            <svg data-accordion-icon="" className="w-6 h-6 shrink-0 text-[#f21a3f]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                        <div className="py-5 border-b border-[#c60b2b] dark:border-[#c60b2b]">
                            <p className="mb-2 text-black dark:text-gray-400">Nova Nanny provides both temporary and long-term placements for families in need of childcare services. We work with families to determine their specific needs and provide a nanny who fits those requirements.</p>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-4">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-[#c60b2b] dark:border-[#c60b2b] dark:text-black" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                            <span className="font-bold">What qualifications and certifications do your nannies have?</span>
                            <svg data-accordion-icon="" className="w-6 h-6 shrink-0 text-[#f21a3f]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-black dark:text-gray-400">Nova Nanny's educators have prior childcare experience in Early Childhood Education or a Bachelor of Education and may have additional certifications. Our nannies are required to have a provincial licence to practice, criminal background checks and First Aid/CPR. We provide information about specific qualifications and certifications of each nanny we represent.</p>
                        </div>
                    </div>
                </div> 
            </div>               
        </div>
    </section>
    )
}
export default Section4;