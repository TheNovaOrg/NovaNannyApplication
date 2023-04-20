import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';
import { Toaster } from 'react-hot-toast';

function Register() {
    const { username } = useAuthStore(state => state.auth);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (formData) => {
        let registerPromise = registerUser(formData);
        toast.promise(
            registerPromise,
            {
                loading: 'Creating...',
                success: <b>Registration Successfully...!</b>,
                error: <b>Could not Register.</b>
            }
        );
        registerPromise.then(function () { navigate('/login') })
            .catch(({ error }) => {
                console.log(error);
                toast.error("Something went wrong. Please try again!");
            });
    };

    return (
        <div className='flex flex-col justify-center items-center w-96 xl:w-1/3 mx-auto mt-2 mb-2 py-6 rounded-lg drop-shadow-sm shadow-2xl'>

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <span className='text-3xl font-mono w-full text-center text-red-400 pt-4 mb-3'>Register</span>

            <form className='px-1' onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col items-center justify-center space-y-4">

                    <input className="contact-input text-gray-700 rounded-lg w-96 px-3 2xl:w-5/6 transition duration-500
                 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline 
                 focus:ring-2 focus:ring-[#f21a3f] focus:ring-opacity-50 animate-pulse"  type="text" placeholder='Username'
                        {...register("username", { required: true })}
                        aria-invalid={errors.Name ? "true" : "false"} />
                    {errors.username?.type === 'required' && <p role="alert" className='text-left font-mono text-sm text-[#F43F5E]/70'>
                        Username is required</p>}

                    <input className="contact-input text-gray-700 rounded-lg w-96 px-3 2xl:w-5/6 transition duration-500
                 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline 
                 focus:ring-2 focus:ring-[#f21a3f] focus:ring-opacity-50 animate-pulse"  type="text" placeholder='Email'
                        {...register("email", { required: true, pattern: /\S+@\S+\.\S+/g })}
                        aria-invalid={errors.email ? "true" : "false"} />
                    {errors.email?.type === 'required' && <p role="alert" className='w-96 text-center font-mono text-sm text-[#F43F5E]/70'>
                        Email is required</p>}

                    <input className="contact-input text-gray-700 rounded-lg w-96 px-3 2xl:w-5/6 transition duration-500
                 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline 
                 focus:ring-2 focus:ring-[#f21a3f] focus:ring-opacity-50 animate-pulse"  type="password" placeholder='Password'
                        {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/g })}
                        aria-invalid={errors.Email ? "true" : "false"} />
                    {errors.password?.type === 'required' &&
                        <p role="alert" className='text-center font-mono text-sm text-[#F43F5E]/70'>
                            Password is required</p>}
                    {errors.password?.type === 'pattern' &&
                        <span role="alert" className='px-1 text-center overflow-ellipsis font-mono text-sm text-[#F43F5E]/70'>
                            Password should contain minimum eight characters, at least one letter and one number.</span>}

                    <button type='submit'
                        className="bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-3 text-stone-100
                 align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
                 hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]">
                        Register
                    </button>

                </div>

            </form>

            <div className='pb-4 mb-3 mt-1'>
                <span className='text-gray-500 text-center'>
                    Already Register? <Link className='text-red-500 underline' to="/login">Login Now</Link></span>
            </div>

        </div>
    )
}

export default Register;