import { useLocation } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import React, { useState, useRef, useEffect } from 'react';
import { useForm, useController } from 'react-hook-form';
import { FcAddImage } from "react-icons/fc";
import Select from "react-select";
import convertToBase64 from "../utils/convert.js";
import { updateNanny } from '../services/nannyService';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from "react-router-dom";

function EditNanny() {
    const navigate = useNavigate();
    let { state } = useLocation();
    const { nanny } = state;
    const { firstName, lastName, email, phone, description, address, experience, price, postalCode } = nanny;
    const [file, setFile] = useState(nanny?.image || avatar);
    const [loading, setLoading] = useState(false);
    const [initialValues, setInitialValues] = useState();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const formValue = {
            firstName,
            lastName,
            email,
            description,
            postalCode,
            address,
            experience,
            price,
            phone,
            gender: nanny?.gender,
        };
        setTimeout(() => setInitialValues(formValue), 200);
    }, []);

    useEffect(() => {
        reset(initialValues);
    }, [initialValues]);

    const handleImageUpload = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }

    const onSubmit = async (formData) => {
        formData = await Object.assign(formData, { image: file || '' });
        setLoading(true);
        const nannyId = nanny?._id;
        if (formData) {
            let updateNanniesPromise = updateNanny(nannyId, formData);
            toast.promise(
                updateNanniesPromise,
                {
                    loading: 'Updating Nannies...',
                    success: <b>Nannies updated successfully!</b>,
                    error: <b>Failed to update nannies.</b>
                }
            );
            updateNanniesPromise.then((res) => {
                if (res) {
                    reset();
                    navigate(`/nannies`);
                }
            }).catch(e => {
                console.error(e);
                toast.error("Update Failed! Something went wrong!. Please try again.")
            });
        }
        setLoading(false);
    };

    return (
        <div>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <form
                className="flex flex-col space-y-3 mx-auto max-w-lg my-4 bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit(onSubmit)}>

                <div className='profile flex justify-center py-4 relative'>
                    <label htmlFor="profile">
                        <img src={file || avatar} className="w-28 h-28 shadow-xl rounded-full" alt="profile-pic" />
                    </label>
                    <input type="file" {...register("image")} hidden={true} onChange={handleImageUpload} name="profile" id='profile' />
                </div>

                <div className='flex gap-3 flex-wrap sm:flex-nowrap'>
                    <input className='contact-input w-full' type="text" placeholder='FirstName' required={true}
                        {...register("firstName", { required: true })}
                    />
                    <input className='contact-input w-full' type="text" placeholder='LastName' required={true}
                        {...register("lastName", { required: true })}
                    />
                </div>

                <div className='flex gap-3 flex-wrap sm:flex-nowrap'>
                    <input className='contact-input w-full' type="text" placeholder='Email' required={true}
                        {...register("email", { required: true, pattern: /\S+@\S+\.\S+/g })}
                    />

                    <input className='contact-input w-full' type="tel" placeholder='Phone' required={true}
                        {...register("phone", { required: true, pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" })} id="phone" name="phone"
                    />
                </div>

                <textarea className='contact-input' placeholder='Description' required={true}
                    {...register("description", { required: true })}
                />

                <div className='flex gap-3 flex-wrap sm:flex-nowrap'>
                    <input className='contact-input w-full' type="text" placeholder='Address' required={true}
                        {...register("address", { required: true })}
                    />
                    <input className='contact-input w-72' type="text" placeholder='PostalCode' required={true}
                        {...register("postalCode", { required: true })}
                    />
                </div>

                <div className='flex gap-3 justify-between flex-wrap sm:flex-nowrap'>
                    <input type="number" className="contact-input" placeholder='Experience (Years)' required={true}
                        {...register("experience", { required: true, min: 0, max: 30 })}
                    />
                    <input type="number" className="contact-input" placeholder='Price per hour ($)' required={true}
                        {...register("price", { required: true, min: 1, max: 100 })}
                    />
                </div>

                <button disabled={loading}
                    className="btn-display bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-
                     text-black align-middle hover:bg-[#F43F5E]/70 disabled:opacity-80 disabled:cursor-not-allowed">
                    <span>{loading ? <span className='animate-fade-in'>Creating...</span> : 'Submit'}</span>
                </button>

            </form>

        </div>
    );
}

export default EditNanny