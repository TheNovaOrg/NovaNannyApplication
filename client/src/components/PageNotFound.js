import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="flex flex-col h-screen">
        <div className="flex-grow bg-gray-200"></div>
        <div className="bg-white">
          <div className="max-w-screen-lg mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-2">
                <div className="max-w-md mx-auto">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      404 - Page Not Found
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Sorry, the page you are looking for could not be found.
                    </p>
                    <div className="mt-8">
                      <Link
                        to="/"
                        className="inline-flex"
                      >

                        <button type='submit'
                          className="bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-3 text-stone-100
                 align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
                 hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]">
                          Home
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-1">
                <div className="px-4 py-8 sm:px-6 lg:px-0 lg:py-0">
                  <img
                    className="w-full lg:max-w-md"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
