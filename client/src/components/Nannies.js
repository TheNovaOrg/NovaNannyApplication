import React, { useEffect, useState } from 'react';
import { fetchNannies, fetchNanniesBySpecialization, removeNanny } from '../services/nannyService';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import NannyCard from './NannyCard';
import { v4 as uuidv4 } from 'uuid';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { getUserInfo } from '../services/userService';
import Popup from '../shared/Popup';
import { IoPersonAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Nannies() {

    const { username } = useAuthStore(state => state.auth);
    const [nannies, setNannies] = useState();
    const [nanny, setNanny] = useState();
    const [loggedInUser, setLoggedInUser] = useState();
    const [openPopUp, setopenPopUp] = useState(false);
    const dropdownOptions = [
        { value: 0, label: 'Filter nannies by specialization...' },
        { value: 'Infants', label: 'Infants' },
        { value: 'Tutoring', label: 'Tutoring' },
        { value: 'School Age', label: 'School Age' },
        { value: 'Special Needs', label: 'Special Needs' },
        { value: 'Toddler', label: 'Toddler' }
    ];
    const defaultOption = dropdownOptions[0];

    useEffect(() => {
        getNannies();
        fetchUserDetails();
    }, []);

    const getNannies = async () => {
        let nanniesPromise = fetchNannies();
        toast.promise(
            nanniesPromise,
            {
                loading: 'Fetching Nannies...',
                error: <b>Failed to get nannies data.</b>
            }
        );
        nanniesPromise.then(({ data }) => {
            if (data?.length) {
                setNannies(data.reverse());
            }
        });
    }

    async function fetchUserDetails() {
        const user = await getUserInfo(username);
        if (user) setLoggedInUser(user.data);
    }

    function onSelectOfDropdown(selectedOption) {
        if (selectedOption.value === 0) {
            getNannies();
        } else {
            getNanniesBySpecialization(selectedOption?.value);
        }
    }

    const getNanniesBySpecialization = async (speciality) => {
        await fetchNanniesBySpecialization(speciality).then(({ data }) => {
            if (data.length) setNannies(data);
            else toast.error("No Nannies found for selected specialization.");
        }).catch((e) => {
            console.error(e);
            toast.error("Failed to fetch nannies based on selected specialization.");
        });
    }

    async function triggerPopUp(selectedNanny) {
        setNanny(selectedNanny);
        if (!openPopUp) setopenPopUp(true);
        else setopenPopUp(false);
    }

    async function deleteNanny() {
        const nannyId = nanny?._id;
        await removeNanny(nannyId).then((res) => {
            if (res.status === 200) {
                toast.success("Nanny deleted sucessfully!");
                getNannies();
            }
            else if (res.status === 403) {
                toast.error("Permission denied. Unauthorized.");
            } else {
                toast.error("Something went wrong deleting nanny. Please try again!");
            }
        }).catch(e => {
            console.error(e);
            toast.error("Failed to delete nanny. Please try again!");
        });
    }

    return (
        <div>
            <Toaster position='top-center' containerClassName='mt-16' reverseOrder={false}></Toaster>

            {
                loggedInUser?.isAdmin &&
                <div className='flex flex-row-reverse items-center mx-auto my-2 px-3'>
                    <Link className="bg-[#F43F5E] font-semibold rounded-md tracking-widest px-1 py-1 text-stone-100
 align-middle hover:bg-[#F43F5E]/90 hover:scale-105 hover:transition-all ease-in-out delay-150
 hover:text-[#F43F5E] hover:bg-red-100 hover:border hover:border-[#F43F5E]" to="/nannies/addNanny">
                        <IoPersonAdd size={18} className="h-7 w-7 px-1 inline-flex"
                        />
                        <span className='font-mono'>
                            Add Nanny
                        </span>
                    </Link>
                </div>
            }

            <div className="flex flex-row-reverse items-center mx-auto my-2 p-2">
                {
                    nannies &&
                    <Dropdown className="w-96" options={dropdownOptions} onChange={onSelectOfDropdown} value={defaultOption}
                        placeholder="Filter nannies by specialization" />
                }
            </div>
            <div className='flex flex-col items-center mx-auto'>
                {
                    nannies &&
                    nannies?.map((nanny) => <NannyCard key={uuidv4()} nanny={nanny} isAdmin={loggedInUser?.isAdmin} deleteNanny={triggerPopUp} />)
                }
            </div>

            {
                openPopUp &&
                <Popup openPopUp={openPopUp} deleteEntry={deleteNanny} />
            }

        </div>
    )
}

export default Nannies;