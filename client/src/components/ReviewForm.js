import React, { useState } from 'react';

function ReviewForm() {
    const [rating, setRating] = useState();
    const [comment, setComment] = useState();

    function handleReviewSubmit() {
        console.log(rating);
        console.log(comment);
    }

    return (
        <form className="w-full max-w-lg mt-1 bg-gray-100 rounded-lg shadow-md p-2" onSubmit={handleReviewSubmit}>
            <div className="flex items-center mt-1">
                <fieldset className="starability-basic">
                    <legend className='text-sm font-mono text-gray-600'>Rating:</legend>
                    <input onChange={e => setRating(e.target.value)} type="radio" id="no-rate" className="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
                    <input onChange={e => setRating(e.target.value)} type="radio" id="first-rate1" name="rating" value="1" />
                    <label htmlFor="first-rate1" title="Terrible">1 star</label>
                    <input onChange={e => setRating(e.target.value)} type="radio" id="first-rate2" name="rating" value="2" />
                    <label htmlFor="first-rate2" title="Not good">2 stars</label>
                    <input onChange={e => setRating(e.target.value)} type="radio" id="first-rate3" name="rating" value="3" />
                    <label htmlFor="first-rate3" title="Average">3 stars</label>
                    <input onChange={e => setRating(e.target.value)} type="radio" id="first-rate4" name="rating" value="4" />
                    <label htmlFor="first-rate4" title="Very good">4 stars</label>
                    <input onChange={e => setRating(e.target.value)} type="radio" id="first-rate5" name="rating" value="5" />
                    <label htmlFor="first-rate5" title="Amazing">5 stars</label>
                </fieldset>
            </div>
            <div className="mb-2">
                <label className="block text-sm text-gray-600 font-mono" htmlFor="comment">Comment:</label>
                <textarea className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    id="comment" name="comment" onChange={e => setComment(e.target.value)} required></textarea>
            </div>
            <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 font-medium text-white bg-red-500 rounded-lg hover:bg-red-600">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ReviewForm