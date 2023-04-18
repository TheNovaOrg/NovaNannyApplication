import React from 'react';
import { Carousel } from 'flowbite';

function Section3() {
    return (

        <section class="bg-white dark:bg- white">
           <div id="default-carousel" class="relative w-full" data-carousel="static">
            <div class="relative h-80 overflow-hidden rounded-lg md:h-96">
                <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                    <div class="max-w-screen-xl px-4 py-2 mx-auto text-center lg:py-6 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                            <svg class="h-12 mx-auto mb-3 text-[#c60b2b] dark:text-[#c60b2b] " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p class="text-xl font-medium text-black md:text-2xl dark:text-black">"I am delighted to give a glowing review for our nanny, Carmella, who has been an integral part of our family for the past year. Her level of care, attention, and expertise with our twin toddlers has been exceptional, and we could not have asked for a better caregiver."</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src="img/mom3.jpg" alt="profile picture" />
                                <div class="flex items-center divide-x-2 divide-[#c60b2b] dark:divide-[#c60b2b]">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-black">Michelle Park</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-black">Parent of twins</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>        
                </div>

                <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                    <div class="max-w-screen-xl px-4 py-2 mx-auto text-center lg:py-2 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                            <svg class="h-12 mx-auto mb-3 text-[#c60b2b] dark:text-[#c60b2b] " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p class="text-xl font-medium text-black md:text-2xl dark:text-black">"From the moment she arrived, Laura was warm, gentle and loving towards our little one. She quickly developed a strong bond with our child and always made sure that our baby's needs were met, from feeding and diaper changes to naps and playtime. She was knowledgeable about infant development and provided stimulating activities that encouraged our baby's growth and development."</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src="img/mom1.jpg" alt="profile picture" />
                                <div class="flex items-center divide-x-2 divide-[#c60b2b] dark:divide-[#c60b2b]">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-black">Coco Doucette</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-black">Parent of an infant</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>        
                </div>

                <div class="hidden duration-1000 ease-in-out" data-carousel-item>

                    <div class="max-w-screen-xl px-4 py-2 mx-auto text-center lg:py-6 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                            <svg class="h-12 mx-auto mb-3 text-[#c60b2b] dark:text-[#c60b2b] " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p class="text-xl font-medium text-black md:text-2xl dark:text-black">"I highly recommend Sarah, as an exceptional caregiver for children with special needs. She provided top-notch care for my child who has a physical disability and her dedication and professionalism were truly remarkable. Sarah was always attentive to my child's unique needs and provided a safe and nurturing environment for him."</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src="img/dad3.jpg" alt="profile picture" />
                                <div class="flex items-center divide-x-2 divide-[#c60b2b] dark:divide-[#c60b2b]">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-black">Jean-Paul Tremblay</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-black">Parent of a child with a disability</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>        
                </div>
            </div>

            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full bg-[#f21a3f]" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-[#f21a3f]" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full bg-[#f21a3f]" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
        </div>
        </section>
    );
}
export default Section3;

