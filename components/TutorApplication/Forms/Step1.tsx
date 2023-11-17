import axios from 'axios'
import { UserAuth } from 'context/AuthContext'
import {
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import useFormStore from 'store/store'

import { db } from '../../../firebase'
import countryList from '../countryList'



interface Props {
    handleNextStep: () => void
}


export default function Step1({ handleNextStep }: Props) {
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryError, setCountryError] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [AddressError, setAddressError] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [cityError, setCityError] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [stateError, setStateError] = useState('');
    const [selectedSchool, setSelectedSchool] = useState('');
    const [schoolError, setSchoolError] = useState('');
    const [role, setRole] = useState('')
    const [selectedMajor, setSelectedMajor] = useState('');
    const [majorError, setMajorError] = useState('');
    const [isSchoolTeacher, setIsSchoolTeacher] = useState('');
    const [hasAffiliation, setHasAffiliation] = useState('');
    const [isSchoolTeacherError, setIsSchoolTeacherError] = useState('');
    const [hasAffiliationError, setHasAffiliationError] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [employer, setEmployer] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [jobTitleError, setJobTitleError] = useState('');
    const [employerError, setEmployerError] = useState('');
    const [startDateError, setStartDateError] = useState('');
    const [endDateError, setEndDateError] = useState('');
    const [howHeard, setHowHeard] = useState('')
    const [howHeardError, setHowHeardError] = useState('')
    const [lastSchoolName, setLastSchoolName] = useState('');
    const [manualInput, setManualInput] = useState('');
    const [lastSchoolNameError, setLastSchoolNameError] = useState('');
    const [manualInputError, setManualInputError] = useState('');



    const setData = useFormStore((state) => state.setStep1Data)

    const handleNext = async (event: any) => {
        event.preventDefault();
        let hasError = false;

        // Validation for firstName
        if (!firstName) {
            setFirstNameError('This field is required');
            hasError = true;
        } else {
            setFirstNameError('');
        }

        // Validation for lastName
        if (!lastName) {
            setLastNameError('This field is required');
            hasError = true;
        } else {
            setLastNameError('');
        }

        // Validation for selectedCountry
        if (!selectedCountry) {
            setCountryError('Please select a country. This field is required');
            hasError = true;
        } else {
            setCountryError('');
        }

        // Additional validations for other fields...

        // Validate lastSchoolName
        if (!lastSchoolName) {
            setLastSchoolNameError('This field is required');
            hasError = true;
        } else {
            setLastSchoolNameError('');
        }

        // Validate manualInput
        if (!manualInput) {
            setManualInputError('This field is required');
            hasError = true;
        } else {
            setManualInputError('');
        }

        // Validate howHeard
        if (!howHeard.trim()) {
            setHowHeardError('This field is required');
            hasError = true;
        } else {
            setHowHeardError('');
        }

        // Additional validations for other fields...

        // Validate isSchoolTeacher
        if (!isSchoolTeacher) {
            setIsSchoolTeacherError('Please select an option');
            hasError = true;
        } else {
            setIsSchoolTeacherError('');
        }

        // Validate hasAffiliation
        if (!hasAffiliation) {
            setHasAffiliationError('Please select an option');
            hasError = true;
        } else {
            setHasAffiliationError('');
        }

        // Additional validations for other fields...

        // Validate jobTitle
        if (!jobTitle) {
            setJobTitleError('This field is required');
            hasError = true;
        } else {
            setJobTitleError('');
        }

        // Additional validations for other fields...

        // Your existing validation checks...

        if (hasError) {
            return;
        }

        // If all validations pass, set data using setData
        setData({
            firstName,
            lastName,
            selectedCountry,
            selectedAddress,
            selectedCity,
            selectedState,
            lastSchoolName,
            manualInput,
            howHeard,
            selectedSchool,
            selectedMajor,
            isSchoolTeacher,
            hasAffiliation,
            jobTitle,
            employer,
            startDate,
            endDate,
        });
    };

    return (
        <div className="p-3 bg-white">
            <p className="mb-1 text-xs font-bold uppercase text-orange-400 text-right md:text-sm">
                Step 1/3
            </p>

            <form className="mt-6 flex flex-col gap-4 md:mt-8 md:pl-4">
                <p className="text-3xl font-bold text-blue-950">
                    Personal Information
                </p>
                <p className="mb-1 p-2 rounded bg-blue-100 text-blue-600 md:text-sm">
                    Let us know a bit about who you are. You must be able to verify your identity through a passport, drivers license, residency permit or ID card. Personal details will not be disclosed.
                </p>
                <div className="row">
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="firstName"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g John"
                            onChange={(e) => setFirstName(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {firstNameError && (
                            <span className="text-red-500">{firstNameError}</span>
                        )}
                    </div>
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="lastName"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g Doe"
                            onChange={(e) => setLastName(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {lastNameError && (
                            <span className="text-red-500">{lastNameError}</span>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="country of Nationality"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            Choose your nationality
                        </label>
                        <select
                            id="countries"
                            className="mb-2 text-sm font-medium text-gray-700 p-1 border border-gray-700"
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            value={selectedCountry}
                        >
                            {countryList.map((country, index) => (
                                <option key={index} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
                        </select>
                        {countryError && (
                            <span className="text-red-500">{countryError}</span>
                        )}
                    </div>
                    <div className="flex col-md-7 flex-col items-center justify-center">
                        <p className="mb-1 p-2 rounded bg-blue-100 text-blue-600 md:text-sm">
                            You will need to prove nationality with a valid photo ID at a later step in this application
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="Country of Residence"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            Where do you live?
                        </label>
                        <input
                            type="text"
                            placeholder="address"
                            onChange={(e) => setSelectedAddress(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {AddressError && (
                            <span className="text-red-500">{AddressError}</span>
                        )}
                    </div>
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="lastName"
                            className="mb-2 text-sm font-medium text-white"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            placeholder="city"
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {cityError && (
                            <span className="text-red-500">{cityError}</span>
                        )}
                    </div>
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="lastName"
                            className="mb-2 text-sm font-medium text-white"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            placeholder="state"
                            onChange={(e) => setSelectedState(e.target.value)}
                            value={selectedState}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {stateError && (
                            <span className="text-red-500">{stateError}</span>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="flex col-md-8 col-sm-12 flex-col">
                        <label
                            htmlFor="firstName"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            How did you hear about us?
                        </label>
                        <input
                            type="text"
                            placeholder=""
                            className={`rounded-lg border bg-gray-50 px-1 py-2
              font-medium outline-none focus:border-blue-500`}
                            onChange={(e) => setHowHeard(e.target.value)}
                        />
                        {howHeardError && (
                            <span className="text-red-500">{howHeardError}</span>
                        )}
                    </div>
                </div>

                <p className="text-3xl font-bold text-blue-950">
                    Education
                </p>
                <div className="row">
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="lastSchoolName"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            Name of the last school you attended
                        </label>
                        <input
                            type="text"
                            placeholder="Search your school"
                            onChange={(e) => setLastSchoolName(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {lastSchoolNameError && (
                            <span className="text-red-500">{lastSchoolNameError}</span>
                        )}
                    </div>
                    <div className="flex col-md-1 justify-center align-center text-center item-center">
                        <p className="pt-3">or</p>
                    </div>
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="manualInput"
                            className="mb-2 text-sm font-medium text-white"
                        >
                            Manual input
                        </label>
                        <input
                            type="text"
                            placeholder="Manual input"
                            onChange={(e) => setManualInput(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {manualInputError && (
                            <span className="text-red-500">{manualInputError}</span>
                        )}
                    </div>
                </div>
                <div className="row ">
                    <div className="flex flex-col col-md-4  ">
                        <label
                            htmlFor="firstName"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            What is/was your field  of study?
                        </label>
                        <input
                            type="text"
                            placeholder="major"
                            onChange={(e) => setSelectedMajor(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {majorError && (
                            <span className="text-red-500">{majorError}</span>
                        )}
                    </div>

                </div>
                <p className="text-3xl font-bold text-blue-950">
                    Academic Experience
                </p>
                <p className="mb-1 p-2 rounded bg-blue-100 text-blue-600 md:text-sm">
                    Note: You do not need to have any prior experience as a teacher to work at QualityUnitedWriters. Please be 100% truthful about your past work experience. Misrepresenting your work experience will result in your application being rejected or your account being banned in the future.
                </p>
                <div className="row">
                    <div className="row flex justify-between col-md-12 col-sm-12 flex-col">
                        <div className="question col-md-8">
                            Have you ever been a school teacher?
                        </div>
                        <div className="flex items-right space-x-4">
                            <input
                                type="text"
                                placeholder="Yes or No"
                                value={isSchoolTeacher}
                                onChange={(e) => setIsSchoolTeacher(e.target.value)}
                                className="mr-2 rounded-lg border bg-gray-50 px-1 py-2 font-medium outline-none focus:border-blue-500"
                            />
                        </div>
                        {isSchoolTeacherError && (
                            <span className="text-red-500">{isSchoolTeacherError}</span>
                        )}
                    </div>

                    <div className="row flex justify-between col-md-12 col-sm-12 flex-col">
                        <div className="question col-md-8">
                            Do you have other professional affiliation with an academic institution?
                        </div>
                        <div className="flex items-right space-x-4">
                            <input
                                type="text"
                                placeholder="Yes or No"
                                value={hasAffiliation}
                                onChange={(e) => setHasAffiliation(e.target.value)}
                                className="mr-2 rounded-lg border bg-gray-50 px-1 py-2 font-medium outline-none focus:border-blue-500"
                            />
                        </div>
                        {hasAffiliationError && (
                            <span className="text-red-500">{hasAffiliationError}</span>
                        )}
                    </div>
                </div>


                <p className="text-3xl font-bold text-blue-950">
                    Work Experience
                </p>
                <p className="mb-1 p-2 rounded bg-blue-100 text-blue-600 md:text-sm">
                    Note: If unemployed, please write unemployed as your title, n/a for Employer, and the years you have been unemployed.
                </p>

                <div className="row">
                    <div className="flex col-md-3 flex-col">
                        <label
                            htmlFor="jobTitle"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            placeholder="Your Job Title"
                            onChange={(e) => setJobTitle(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {jobTitleError && (
                            <span className="text-red-500">{jobTitleError}</span>
                        )}
                    </div>
                    <div className="flex col-md-3 flex-col">
                        <label
                            htmlFor="employer"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            Employer/company
                        </label>
                        <input
                            type="text"
                            placeholder="Employer/company"
                            onChange={(e) => setEmployer(e.target.value)}
                            className={`rounded-lg border bg-gray-50 px-1 py-2
                  font-medium outline-none focus:border-blue-500`}
                        />
                        {employerError && (
                            <span className="text-red-500">{employerError}</span>
                        )}
                    </div>
                    <div className="flex col-md-4 flex-col">
                        <label
                            htmlFor="startDate"
                            className="mb-2 text-sm font-medium text-gray-700"
                        >
                            Years worked
                        </label>
                        <div className="row">
                            <div className="flex col-md-5 flex-col">
                                <input
                                    type="date"
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className={`py-2 px-1 w-full rounded-lg border bg-gray-50 text-sm font-medium outline-none focus:border-blue-500`}
                                />
                                {startDateError && (
                                    <span className="text-red-500">{startDateError}</span>
                                )}
                            </div>
                            <div className="col-md-1 flex justify-center align-center items-center text-gray-400">
                                to
                            </div>
                            <div className="flex col-md-5 flex-col">
                                <input
                                    type="date"
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className={`py-2 px-1 w-full rounded-lg border bg-gray-50 text-sm font-medium outline-none focus:border-blue-500`}
                                />
                                {endDateError && (
                                    <span className="text-red-500">{endDateError}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>



                <div
                    className="mt-4 cursor-pointer rounded-xl bg-green-500 py-2 text-center text-white"
                    onClick={handleNext}
                >
                    Save and continue                </div>
            </form>
        </div>
    )
}
