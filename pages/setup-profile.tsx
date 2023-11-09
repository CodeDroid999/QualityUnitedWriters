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
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BsCheckCircle,BsCurrencyDollar } from 'react-icons/bs'

import { db } from '../firebase'

export default function CompleteAccount() {
  const [firstName, setfirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [role, setRole] = useState('')
  const [activeRole, setActiveRole] = useState('')
  const [roleError, setRoleError] = useState('')
  const { user } = UserAuth() || {}; // Use optional chaining here


  const router = useRouter()

  const handleRole = (selectedRole: string) => {
    setActiveRole(selectedRole)
    setRole(selectedRole)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    let hasError = false
    if (!firstName) {
      setFirstNameError('This field is required')
      hasError = true
    } else {
      setFirstNameError('')
    }

    if (!lastName) {
      setLastNameError('This field is required')
      hasError = true
    } else {
      setLastNameError('')
    }

    if (!role) {
      setRoleError('This field is required')
      hasError = true
    } else {
      setRoleError('')
    }

    if (hasError) {
      return
    }

    try {
      const q = query(
        collection(db, 'users'),
        where('userId', '==', user.userId)
      )
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        const docSnapshot = querySnapshot.docs[0]
        const userDocRef = doc(db, 'users', docSnapshot.id)
        await updateDoc(userDocRef, {
          firstName: firstName,
          lastName: lastName,
          mainRole: role,
          role: role,
        })
      }
      // Make the HTTP request to notify admin that a new user has just signed up
      const userData = {
        firstName: firstName,
        lastName: lastName,
        mainRole: role,
        role: role,
      };

      await axios.post('/api/newuser', userData);
      router.push('/')
      toast.success('Account has been updated')
    } catch (error) {
      console.error('Error updating user details:', error.message)
    }
  }
  return (

    <div className="mx-auto mt-10 h-screen w-full max-w-[1200px] px-3 md:mt-20">
     <Head>
        <title>
          QualityUnitedWriters - Your Academic Research and Project Partner
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Discover a dedicated platform for students and tutors offering expert assistance in a wide range of academic research and projects. Quality Unitted Writers connects you with quality solutions for your educational needs. Whether you're seeking help with essays, theses, or any academic work, our talented team is here to assist you."
        />
        <meta name="keywords" content="Academic writing services, Expert academic writers, Professional research assistance, High-quality research papers, Academic project support, Thesis and dissertation help, Essay writing service, Top-rated tutors, Academic success tips, Homework assistance, Online tutoring, Quality writing solutions, Best essay writers, Custom research papers, Academic support platform, Tutoring for students, Research paper editing, Writing and editing services, Academic guidance, Homework help for students" />
        <meta name="author" content="QualityUnitedWriters" />
        <meta name="robots" content="index, follow" />
        <meta name="og:title" property="og:title" content="QualityUnitedWriters - Your Academic Research and Project Partner" />
        <meta
          name="og:description"
          property="og:description"
          content="Discover a dedicated platform for students and tutors offering expert assistance in a wide range of academic research and projects. Quality Unitted Writers connects you with quality solutions for your educational needs. Whether you're seeking help with essays, theses, or any academic work, our talented team is here to assist you."
        />
        <meta name="og:image" property="og:image" content="public/airtaskalogo.jpeg" />
        <meta name="og:url" property="og:url" content="https://www.qualityunitedswriters.com" />
      </Head>
      <div className="mx-auto max-w-[500px]">
        <div className="w-full">
          <p className="text-3xl font-bold text-green-950">
            Set up your account
          </p>
          <form className="mt-6 flex flex-col gap-4 md:mt-8">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="mb-2 text-lg font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g John"
                onChange={(e) => setfirstName(e.target.value)}
                className={`h-full w-full rounded-lg border bg-gray-50 px-2 py-4
                  font-medium outline-none focus:border-blue-500`}
              />
              {firstNameError && (
                <span className="text-red-500">{firstNameError}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="mb-2 text-lg font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g Doe"
                onChange={(e) => setLastName(e.target.value)}
                className={`h-full w-full rounded-lg border bg-gray-50 px-2 py-4
                  font-medium outline-none focus:border-blue-500`}
              />
              {lastNameError && (
                <span className="text-red-500">{lastNameError}</span>
              )}
            </div>

            <div className="">
              <label
                htmlFor="mainGoal"
                className="mb-2 text-lg font-medium text-gray-700"
              >
                What is your main goal?       </label>
              <div className="mt-2 flex w-full flex-row space-x-2">
                <div
                  onClick={() => handleRole('Poster')}
                  className={`h-[80px] flex-1 cursor-pointer rounded-md p-2 font-medium  ${activeRole === 'Poster'
                    ? 'bg-green-950 text-gray-100'
                    : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  <div className="flex h-full flex-col items-center justify-center ">
                    <BsCheckCircle size={20} className="mb-1" />
                    Student: Get homework help                 </div>
                </div>
                <div
                  onClick={() => handleRole('Tasker')}
                  className={`h-[80px] flex-1 cursor-pointer rounded-md p-2 font-medium  ${activeRole === 'Tasker'
                    ? 'bg-green-950 text-gray-100'
                    : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  <div className="flex h-full flex-col items-center justify-center ">
                    <BsCurrencyDollar size={20} className="mb-1" />
                   Tutor: Offer assignment help                  </div>
                </div>
              </div>
              {roleError && <span className="text-red-500">{roleError}</span>}
            </div>

            <div
              onClick={handleSubmit}
              className="mt-4 cursor-pointer rounded-xl bg-green-500 py-2 text-center font-semibold text-white"
            >
              Complete my account
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}