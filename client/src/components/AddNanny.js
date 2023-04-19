import React, { useState, useRef } from 'react';
import { useForm, useController } from 'react-hook-form';
import avatar from '../assets/avatar.png';
import { FcAddImage } from "react-icons/fc";
import Select from "react-select";
import { addNanny } from '../services/nannyService';
import convertToBase64 from "../utils/convert.js";
import { useNavigate, Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function AddNanny() {
    const navigate = useNavigate();
    const [file, setFile] = useState(avatar);
    const [loading, setLoading] = useState(false);
    const imgRef = useRef();
    const { register, handleSubmit, reset, control } = useForm();
    const { field: { value: langValue, onChange: langOnChange, ...restLangField } } = useController({ name: 'languages', control });
    const { field: { value: specialityValue, onChange: speialityOnChange, ...restSpecialityField } } = useController({ name: 'specialities', control });
    const { field: { value: availValue, onChange: availOnChange, ...restAvailField } } = useController({ name: 'availability', control });

    const languagesDropdownOptions = [
        { value: 'English', label: 'English' },
        { value: 'French', label: 'French' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Hindi', label: 'Hindi' },
    ];
    const specialityDropdownOptions = [
        { value: 'Infants', label: 'Infants' },
        { value: 'Toddler', label: 'Toddler' },
        { value: 'Tutoring', label: 'Tutoring' },
        { value: 'School Age', label: 'School Age' },
        { value: 'Special Needs', label: 'Special Needs' },
    ];
    const availibilityDropdownOptions = [
        { value: 'Part time', label: 'Part time' },
        { value: 'Full time', label: 'Full time' },
        { value: 'Live out', label: 'Live out' },
    ];
    const colourStyles = {
        control: styles => ({
            ...styles,
            backgroundColor: 'white',
            borderColor: "#D3D3D3",
            boxShadow: "none",
            '&:hover': {
                borderColor: "#FF69B4",
                boxShadow: "0 0 0 1px #FF69B4",
            }
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                borderColor: "#F43F5E",
                color: '#F43F5E',
                cursor: "pointer",
                '&:hover': {
                    backgroundColor: "#F43F5E",
                    color: 'white',
                },
            };
        },
    };

    const handleImageUpload = async (e) => {
        console.log(e.target.files[0]);
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
        console.log(file);
    }

    const onSubmit = async (formData) => {
        formData = await Object.assign(formData, { image: file || '' });
        setLoading(true);
        if (formData) {
            let createNanniesPromise = addNanny(formData);
            toast.promise(
                createNanniesPromise,
                {
                    loading: 'Updating Nannies...',
                    success: <b>Nannies created successfully!</b>,
                    error: <b>Failed to create nannies.</b>
                }
            );
            createNanniesPromise.then((res) => {
                if (res) {
                    reset();
                    navigate(`/nannies`);
                }
            }).catch(e => {
                console.error(e);
                toast.error("Creation Failed! Something went wrong!. Please try again.")
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
                        <img src={file || avatar} ref={imgRef} className="w-28 h-28 shadow-xl rounded-full" alt="profile-pic" />
                        {
                            file &&
                            <FcAddImage size={25} className="absolute -my-6 mx-11 hover:cursor-pointer" />
                        }
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

                <div className='flex gap-3 justify-between flex-wrap sm:flex-nowrap'>
                    <Select
                        className='w-full'
                        placeholder="Please select Languages"
                        styles={colourStyles}
                        isMulti
                        isClearable
                        options={languagesDropdownOptions}
                        value={languagesDropdownOptions.filter(c => langValue?.includes(c.value))}
                        onChange={val => langOnChange(val?.map(c => c.value))}
                        {...restLangField}
                    />
                </div>

                <div className='flex gap-3 justify-between flex-wrap sm:flex-nowrap'>
                    <Select
                        className='w-full'
                        placeholder="Please select Specialities"
                        styles={colourStyles}
                        isMulti
                        isClearable
                        options={specialityDropdownOptions}
                        value={specialityDropdownOptions.filter(c => specialityValue?.includes(c.value))}
                        onChange={val => speialityOnChange(val?.map(c => c.value))}
                        {...restSpecialityField}
                    />
                </div>

                <div className='flex gap-3 justify-between flex-wrap sm:flex-nowrap'>
                    <Select
                        className='w-full'
                        placeholder="Please select Availibility"
                        styles={colourStyles}
                        isMulti
                        isClearable
                        options={availibilityDropdownOptions}
                        value={availibilityDropdownOptions.filter(c => availValue?.includes(c.value))}
                        onChange={val => availOnChange(val?.map(c => c.value))}
                        {...restAvailField}
                    />
                </div>

                <div className="flex gap-3 justify-between flex-wrap sm:flex-nowrap">
                    <div className='flex flex-row justify-around items-center w-full'>
                        <div className="radio-container w-full">
                            <input type="radio" name="radio" value="Male" {...register("gender")} />
                            <label className='px-2'>Male</label>
                        </div>

                        <div className="radio-container w-full">
                            <input type="radio" className="form-radio text-red-500" name="gender" value="Female" {...register("gender")} />
                            <label className='px-2'>Female</label>
                        </div>
                    </div>
                </div>

                <button disabled={loading}
                    className="btn-display bg-[#F43F5E] font-semibold rounded-md tracking-widest px-3 py-
                     text-black align-middle hover:bg-[#F43F5E]/70 disabled:opacity-80 disabled:cursor-not-allowed">
                    <span>{loading ? 'Creating...' : 'Submit'}</span>
                </button>

            </form>
        </div>
    );
}

export default AddNanny;