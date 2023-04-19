import React from 'react';
import { UserIcon, StarIcon } from '@heroicons/react/solid';
import { MdDeleteForever } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

function Review({ review, handleDeleteReview, loggedInUser }) {

    function handleDelete() {
        handleDeleteReview(review);
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-2">
                <div className='flex flex-col items-start'>
                    <div className='flex items-center'>
                        <UserIcon className='h-4 text-sm' />
                        <h3 className="text-md font-mono px-1">{review.author.username}</h3>
                    </div>
                    <span className="text-gray-500 text-sm">
                        {
                            <div className='flex items-center'>
                                {
                                    Array.from(Array(review?.rating).keys()).map((rating) => {
                                        return (
                                            < StarIcon className='h-4 text-sm text-yellow-400' key={uuidv4()} />
                                        )
                                    })
                                }
                            </div>

                        }
                    </span>
                </div>
                <div className='flex items-center'>
                    {
                        review?.author?.username === loggedInUser &&
                        <>
                            <MdDeleteForever size={30} className="mx-1 px-1 inline-flex text-red-700 hover:cursor-pointer hover:text-red-500 ease-out"
                                onClick={handleDelete} />
                        </>
                    }
                </div>
            </div>
            <p className="text-gray-800 italic text-sm">{review.comment}</p>
        </div >
    )
}

export default Review