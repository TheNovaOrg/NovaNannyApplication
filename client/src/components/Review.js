import React from 'react';
import { UserIcon, StarIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';

function Review({ review }) {
    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-2">
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
                                        < StarIcon className='h-6 text-sm text-yellow-400' key={uuidv4()} />
                                    )
                                })
                            }
                        </div>

                    }
                </span>
            </div>
            <p className="text-gray-800 italic text-sm">{review.comment}</p>
        </div>
    )
}

export default Review