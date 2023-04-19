import React from 'react';
import { HeartIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { useNavigate, Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";

function NannyCard({ nanny, isAdmin = false, deleteNanny }) {

    const navigate = useNavigate();

    function onNannyClick() {
        navigate(`/nannies/nanny/${nanny.firstName}${nanny.lastName}`, {
            state: nanny
        });
    }

    function handleUpdate() {
        deleteNanny(nanny);
    }

    function handleDelete() {
        deleteNanny(nanny);
    }

    return (
        <>
            <div className='flex flex-row items-start w-full justify-center mt-3 mx-2 py-4 px-2 cursor-pointer hover:opacity-80 hover:shadow-lg 
            transition duration-100 ease-out hover:translate-x-2 md:transform-none hover:border-l-2 hover:border-red-400'>
                <div onClick={onNannyClick} className='flex w-full mx-2'>

                    <div className='relative rounded-lg h-72 w-32 md:h-52 md:w-80 flex-shrink-0'>
                        <img
                            className="rounded-xl object-fit h-44 w-full align-middle"
                            src={nanny?.image}
                            alt={nanny?.image}
                        />
                    </div>

                    <div className='flex flex-col flex-grow mx-2 my-1'>
                        <div className='flex items-center justify-between mb-1 z-50'>
                            <h2 className='text-gray-600 text-xl font-semibold'>{nanny?.firstName + " " + nanny?.lastName}</h2>
                        </div>

                        <div className='border-b w-10 pt-2' />

                        <p className='text-sm flex-grow text-gray-500 pt-1 flex-wrap'>{nanny?.description}</p>

                        <div className='text-sm flex flex-col p-1 text-gray-500'>
                            <p className='flex-grow flex-wrap pt-1'>Specialities : {nanny?.specialities?.join(" , ")}</p>
                        </div>


                        <div className='flex justify-between items-end'>
                            <p className='flex items-center hover:animate-pulse'>
                                <LocationMarkerIcon className='h-4 text-sm text-red-400' />
                                <span className='ml-1'>
                                    {nanny?.address}
                                    {nanny?.postalCode}
                                </span>
                            </p>

                            <div className='hover:animate-pulse transition transform duration-150 ease-in-out'>
                                <p className='text-xl font-semibold pb-1 lg:text-2xl'>${nanny?.price} per hour</p>
                                <p className='text-sm font-extralight lg:text-md text-right'>{nanny?.gender}</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex flex-row justify-around items-center'>
                    <div>
                        {
                            (isAdmin) &&
                            <Link to="/nannies/updateNanny" state={{ nanny }}>
                                <FaUserEdit size={25} className="h-8 w-8 mx-1 px-1 inline-flex text-red-500 hover:cursor-pointer
                                hover:scale-110 transition transform duration-150 hover:text-red-600 ease-out"
                                    onClick={handleUpdate} />
                            </Link>
                        }
                    </div>
                    <div>
                        {
                            (isAdmin) ?
                                <TiUserDelete size={25} className="h-8 w-8 mx-1 px-1 inline-flex text-red-500 hover:cursor-pointer
                                hover:scale-110 transition transform duration-150 hover:text-red-600 ease-out"
                                    onClick={handleDelete} /> :
                                <HeartIcon className='h-5 w-5 text-red-400 hover:scale-105 transition transform duration-150 ease-out' />
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default NannyCard;