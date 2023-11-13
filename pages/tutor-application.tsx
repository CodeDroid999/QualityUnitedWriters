import Step1 from 'components/TutorApplication/Forms/Step1'
import Step2 from 'components/TutorApplication/Forms/Step2'
import Step3 from 'components/TutorApplication/Forms/Step3'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import useFormStore from 'store/store'

import { auth } from '../firebase'
import AuthLayout from 'components/layout/AuthLayout'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/QualityUnitedWritersLogo.png'
import ImageHeader from 'components/TutorApplication/ImageHeader'
export default function PostTask() {
  const [step, setStep] = useState(1)
  const clearData = useFormStore((state) => state.clearStore)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push(`/login?redirect=/tutor-application`)
      }
    })
    return () => unsubscribe()
  }, [router])

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleExit = () => {
    clearData()
    router.push('/')
  }
  return (
    <div>
      <header className="flex flex-row  justify-between items-center bg-white  px-4 ">
        <div className="flex flex-row items-center">
          <div className="mr-1">
            <h1 className="text-4xl font-bold">
              <Link href="/" className="text-gray-700">
                <div className="mb-1">
                  <Image
                    src={Logo}
                    alt="task"
                    className="h-[150px] w-[100%] md:h-[150px] lg:h-[60px] lg:w-[50px]"
                  />
                </div>
              </Link>
            </h1>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="px-2 py-1 border border-gray-900 rounded-md shadow-md">
            Switch to Student Mode
          </div>
          <div className="cursor-pointer " onClick={handleExit}>
            <TfiClose size={32} className="font-bold shadow-md p-1 text-blue-900" />
          </div>
        </div>
      </header>
      <div className="mx-auto w-full max-w-[1200px] px-3">
        <ImageHeader />
        <div className="mx-auto mt-20 min-w-100">
          {step === 1 && <Step1 handleNextStep={handleNextStep} />}
          {step === 2 && (
            <Step2
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {step === 3 && <Step3 handlePreviousStep={handlePreviousStep} />}
        </div>
      </div>
    </div>
  )
}
