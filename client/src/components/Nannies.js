import React, { useEffect, useState } from 'react';
import { fetchNannies, fetchNanniesBySpecialization } from '../services/nannyService';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import NannyCard from './NannyCard';
import { v4 as uuidv4 } from 'uuid';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Nannies() {

    const { username } = useAuthStore(state => state.auth);
    const [nannies, setNannies] = useState();
    const dropdownOptions = [
        { value: 0, label: 'Filter nannies by specialization' },
        { value: 'Infants', label: 'Infants' },
        { value: 'Tutoring', label: 'Tutoring' },
        { value: 'School Age', label: 'School Age' },
        { value: 'Special Needs', label: 'Special Needs' },
        { value: 'Toddler', label: 'Toddler' }
    ];
    const defaultOption = dropdownOptions[0];

    useEffect(() => {
        getNannies();
    }, [])

    const getNannies = async () => {
        let nanniesPromise = fetchNannies();
        toast.promise(
            nanniesPromise,
            {
                loading: 'Fetching Nannies...',
                success: <b>Nannies fetched successfully!</b>,
                error: <b>Failed to fetch nannies.</b>
            }
        );
        nanniesPromise.then(({ data }) => {
            setNannies(data);
        });
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

    return (
        <div>

            <Toaster position='top-center' reverseOrder={false}></Toaster>

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
                    nannies?.map((nanny) => <NannyCard key={uuidv4()} nanny={nanny} />)
                }
            </div>


        </div>
    )
}

export default Nannies;