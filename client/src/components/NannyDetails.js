import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchNanny } from '../services/nannyService';
import { LocationMarkerIcon, PhoneIcon, MailIcon, UserIcon, CurrencyDollarIcon, SparklesIcon, NewspaperIcon, BriefcaseIcon } from '@heroicons/react/outline';

function NannyDetails() {
    const [nanny, setNanny] = useState();
    const location = useLocation();
    const { _id } = location.state;
    console.log(_id);

    useEffect(() => {
        fetchNannyDetails(_id);
    }, []);

    async function fetchNannyDetails(id) {
        const { data } = await fetchNanny(id);
        setNanny(data);
    }

    return (
        <div class="bg-gray-50 py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mt-10 p-4 sm:mt-0 hover:opacity-80 hover:shadow-lg 
            transition duration-300 ease-in-out transform hover:scale-105">
                    <div class="md:grid md:grid-cols-2 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <div class="flex flex-col items-center justify-center cursor-pointer px-4 py-5 bg-white sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                                <div class="md:col-span-2 flex items-center justify-center">
                                    <img class="object-fit w-40 h-40 align-middle rounded-full shadow-lg hover:opacity-95"
                                        src={nanny?.image?.path}
                                        alt={nanny?.image?.filename} />
                                </div>
                                <h3 class="text-2xl leading-6 font-medium text-gray-900 mt-4">
                                    {nanny?.firstName} {nanny?.lastName}
                                </h3>
                                <div class="sm:flex sm:items-center">
                                    <div class="mt-1 flex items-center text-sm text-gray-700">
                                        <div class="px-6 py-4 flex justify-center items-center">
                                            <LocationMarkerIcon className='h-4 text-lg px-2' />
                                            <span class="text-gray-700">{nanny?.addresses[0].address}</span>
                                            <span class="text-gray-700 px-1">{nanny?.addresses[0].postalCode}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-6 py-4">
                                    <p class="text-gray-700 text-base text-center">{nanny?.description || "N/A"}</p>
                                </div>
                            </div>
                            <hr class="border-b border-gray-100 px-4" />
                            <div class="px-4 py-4 bg-white sm:p-6 shadow sm:rounded-bl-md sm:rounded-br-md">
                                <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">Email :</dt>
                                        <div className='flex items-center mt-1'>
                                            <MailIcon className='h-5 text-sm' />
                                            <dd class="text-sm text-gray-900 px-1">{nanny?.email || "N/A"}</dd>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">Phone Number :</dt>
                                        <div className='flex items-center mt-1'>
                                            <PhoneIcon className='h-5 text-sm' />
                                            <dd class="text-sm text-gray-900 px-1">{nanny?.phone || "N/A"}</dd>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">Price :</dt>
                                        <div className='flex items-center mt-1'>
                                            <CurrencyDollarIcon className='h-5 text-sm' />
                                            <dd class="text-sm text-gray-900 px-1">{nanny?.price} <span className='text-xs text-gray-900'>per hour</span></dd>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">Experience :</dt>
                                        <div className='flex items-center mt-1'>
                                            <BriefcaseIcon className='h-5 text-sm' />
                                            <dd class="text-sm text-gray-900 px-1">7 years of experience</dd>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">I can speak :</dt>
                                        {
                                            nanny?.languages &&
                                            <div class="grid grid-cols-2 gap-4">
                                                {
                                                    nanny?.languages.map((language) => {
                                                        return (
                                                            <li class="text-sm text-gray-700">{language}</li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">Specialities :</dt>
                                        {
                                            nanny?.specialities &&
                                            <div class="grid grid-cols-2 gap-4">
                                                {
                                                    nanny?.specialities.map((speciality) => {
                                                        return (
                                                            <li class=" text-sm text-gray-700">{speciality}</li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                    <div class="sm:col-span-1">
                                        <dt class="text-sm font-medium text-gray-500">Availability :</dt>
                                        <h5 className='text-xs'>I can work :</h5>
                                        <dd class="mt-1 text-sm text-gray-900">{nanny?.availability.join(', ') || "N/A"}</dd>
                                    </div>

                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NannyDetails;