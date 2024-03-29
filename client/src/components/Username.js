import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { validateUserName } from '../utils/validate';
import { useAuthStore } from '../store/authStore';

function Username() {
    const setUsername = useAuthStore(state => state.setUsername);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        if (await validateUserName(data?.username)) {
            // set value of username via central store.
            setUsername(data?.username);
            // go to password page for login.
            navigateToPassword(data);
        } else {
            toast.error("Username doesn't exist! Please Register.");
        }
    };

    const navigateToPassword = (formData) => {
        navigate({
            pathname: "/password",
        });
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen w-96 xl:w-1/3 mx-auto my-3 rounded-xl drop-shadow-2xl shadow-2xl'>

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="title flex flex-col items-center justify-center space-y-0 mx-auto px-6">
                <div className='flex flex-col space-y-1 mb-2'>
                    <img alt="logo Nova Nanny" src="./img/logopic.png" className='w-32 h-14 mt-2 object-contain 2xl:h-36 2xl:w-52 animate-bounce' />
                    <span className='text-xl text-center text-red-400 2xl:text-5xl'>
                        Nova Nanny
                    </span>
                </div>
                <span className='py-4 mt-2 text-xl w-2/3 text-center text-red-400 2xl:text-5xl'>
                    Log in
                </span>
            </div>

            <form className="flex flex-col space-y-6 mt-1 w-full 2xl:my-auto justify-center align-middle items-center mx-auto"
                onSubmit={handleSubmit(onSubmit)}>

                <input className="contact-input text-gray-700 rounded-lg w-96 px-3 2xl:w-5/6 transition duration-500
                 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline 
                 focus:ring-2 focus:ring-[#f21a3f] focus:ring-opacity-50 animate-pulse" type="text" placeholder='username'
                    {...register("username", { required: true })}
                    aria-invalid={errors.Name ? "true" : "false"} />
                {errors.username?.type === 'required' && <p role="alert" className='px-1 py-0 text-left font-mono text-sm text-[#F43F5E]/70'>
                    Username is required</p>}

                <button type='submit'
                    className="bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-3 text-stone-100
                 align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
                 hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]">
                    Let's Go!
                </button>

            </form>

            <div className="text-center mb-2 mt-2 2xl:text-4xl">
                <span className='text-gray-500'>Not a Member? <Link className='text-red-500 underline' to="/register">Register Now</Link></span>
            </div>
        </div>
    )
}

export default Username;
