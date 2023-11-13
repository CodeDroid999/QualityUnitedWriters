import React, { useState } from 'react'
import useFormStore from 'store/store'

interface Props {
    handleNextStep: () => void
}
export default function Step1({ handleNextStep }: Props) {
    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [dueDateError, setDueDateError] = useState('')

    const setData = useFormStore((state) => state.setStep1Data)

    const handleNext = (event: any) => {
        event.preventDefault()
        let hasError = false
        if (!title) {
            setTitleError('This field is required')
            hasError = true
        } else if (title.length < 10) {
            setTitleError('Must be at least 10 characters')
            hasError = true
        } else {
            setTitleError('')
        }

        if (!dueDate) {
            setDueDateError('This field is required')
            hasError = true
        } else {
            setDueDateError('')
        }

        if (hasError) {
            return
        }
        setData(title, dueDate)
        handleNextStep()
    }

    const currentDate = new Date().toISOString().split('T')[0]

    return (
        <div className="min-w-100 w-full">
            <p className="mb-1 text-xs font-medium uppercase text-green-950 md:text-sm">
                Step 1/3
            </p>
            <p className="text-3xl font-bold text-green-950">
                Lets start with the basics
            </p>
            <form className="mt-6 flex flex-col gap-4 md:mt-8">
                <div className="flex flex-col">
                    <label
                        htmlFor="title"
                        className="mb-2 text-lg font-medium text-gray-700"
                    >
                        What do you need done?
                    </label>
                    <input
                        type="text"
                        placeholder="e.g.Help move my sofa"
                        onChange={(e) => setTitle(e.target.value)}
                        className={`h-full w-full rounded-lg border bg-gray-50 px-2 py-4
                  font-medium outline-none focus:border-blue-500`}
                    />
                    {titleError && <span className="text-red-500">{titleError}</span>}
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="description"
                        className="mb-2 text-lg font-medium text-gray-700"
                    >
                        When do you need this done?
                    </label>
                    <input
                        type="date"
                        placeholder="Enter date"
                        min={currentDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className={`h-full w-full rounded-lg border bg-gray-50 px-2 py-4
                  font-medium outline-none focus:border-blue-500`}
                    />
                    {dueDateError && <span className="text-red-500">{dueDateError}</span>}
                </div>

                <div
                    className="mt-4 cursor-pointer rounded-xl bg-green-500 py-2 text-center text-white"
                    onClick={handleNext}
                >
                    Next
                </div>
            </form>
        </div>
    )
}
