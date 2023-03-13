import React from 'react';
import { useAuthStore } from '../store/authStore';
import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { createResetSession, resetPassword } from '../services/authService';

function Reset() {

  const { username } = useAuthStore(state => state.auth);
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const status = createResetSession();

  if (status && status !== 201) if (status && status !== 201) return <Navigate to={'/password'} replace={true}></Navigate>;

  const onSubmit = async (formData) => {
    console.log(formData);
    if (formData) {
      const { password, confirmPassword } = formData;
      (password !== confirmPassword) ?
        toast.error("Password and Confirm password should match!") :
        // reset password
        triggerReset(username, password);
    }
  };

  const triggerReset = async (username, password) => {
    let resetPromise = resetPassword(username, password);
    toast.promise(resetPromise, {
      loading: 'Updating...',
      success: <b>Reset Successfully...!</b>,
      error: <b>Could not Reset!</b>
    });
    resetPromise.then(function () { navigate('/password') });
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen w-96 xl:w-1/3 mx-auto my-3 rounded-xl drop-shadow-2xl shadow-2xl'>

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className="title flex flex-col items-center space-y-4 px-2">
        <h4 className='text-3xl font-bold text-red-400'>Reset Password</h4>
        <span className='py-4 text-lg w-full px-2 text-center text-gray-500'>
          Enter a new password.
        </span>
      </div>

      <form className="flex flex-col space-y-6 mt-1 w-full 2xl:my-auto justify-center align-middle items-center mx-auto"
        onSubmit={handleSubmit(onSubmit)}>

        <input className='contact-input w-96 px-3 2xl:w-5/6' type="password" placeholder='Password'
          {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/g })}
          aria-invalid={errors.Email ? "true" : "false"} />
        {errors.password?.type === 'required' &&
          <p role="alert" className='text-center font-mono text-sm text-[#F43F5E]/70'>
            Password is required</p>}
        {errors.password?.type === 'pattern' &&
          <span role="alert" className='px-1 text-center overflow-ellipsis font-mono text-sm text-[#F43F5E]/70'>
            Password should contain minimum eight characters, at least one letter and one number.</span>}

        <input className='contact-input w-96 px-3 2xl:w-5/6' type="password" placeholder='Confirm Password'
          {...register("confirmPassword", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/g })}
          aria-invalid={errors.Email ? "true" : "false"} />
        {errors.confirmPassword?.type === 'required' &&
          <p role="alert" className='text-center font-mono text-sm text-[#F43F5E]/70'>
            Confirm Password is required</p>}
        {errors.confirmPassword?.type === 'pattern' &&
          <span role="alert" className='px-1 text-center overflow-ellipsis font-mono text-sm text-[#F43F5E]/70'>
            Password should contain minimum eight characters, at least one letter and one number.</span>}

        <button type='submit'
          className="bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-3 text-stone-100
         align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
         hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]">
          Reset
        </button>

      </form>

    </div>
  )
}

export default Reset