import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuthStore } from '../store/authStore';
import { Toaster } from 'react-hot-toast';

function Password() {
  const navigate = useNavigate();
  const { username } = useAuthStore(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (formData) => {
    const credentials = {
      username,
      password: formData.password
    }
    let loginPromise = loginUser(credentials);
    toast.promise(
      loginPromise, {
      loading: 'Checking...',
      success: <b>Login Successfully...!</b>,
      error: <b>Password doesn't Match!</b>
    });
    loginPromise.then(res => {
      const { token } = res;
      localStorage.setItem("token", token);
      navigate('/nannies');
    });
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen w-96 xl:w-1/3 mx-auto my-3 rounded-xl drop-shadow-2xl shadow-2xl'>

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className="title flex flex-col items-center justify-center space-y-0 mx-auto my-2 px-6">
        <h1 className='text-center text-lg font-mono text-gray-600 tracking-wider 2xl:text-5xl'>
          Hello! <span className='uppercase italic font-semibold'> {username}</span>
        </h1>
      </div>

      <form className="flex flex-col space-y-6 mt-1 w-full 2xl:my-auto justify-center align-middle items-center mx-auto"
        onSubmit={handleSubmit(onSubmit)}>

        <input className="contact-input text-gray-700 rounded-lg w-96 px-3 2xl:w-5/6 transition duration-500
                 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline 
                 focus:ring-2 focus:ring-[#f21a3f] focus:ring-opacity-50 animate-pulse" type="password" placeholder='Password'
          {...register("password", { required: true })}
          aria-invalid={errors.Name ? "true" : "false"} />
        {errors.password?.type === 'required' && <p role="alert" className='px-1 py-0 text-left font-mono text-sm text-[#F43F5E]/70'>
          Password is required</p>}

        <button type='submit'
          className="bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-3 text-stone-100
       align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
       hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]">
          Login
        </button>

      </form>

      <div className="text-center mb-2 mt-2 2xl:text-4xl">
        <span className='text-gray-500'>
          Forgot Password?
          <Link className='text-red-500 underline' to="/recoverpassword">Recover Now</Link>
        </span>
      </div>
    </div>
  )
}

export default Password;