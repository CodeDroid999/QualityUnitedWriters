import React, { useState } from 'react';

const Form2 = ({ onSave, onBack, subjects, rates }) => {
  const [selectedSubjects, setSelectedSubjects] = useState(subjects || []);
  const [selectedRate, setSelectedRate] = useState(rates || '$10');

  const handleSave = () => {
    // You can save the selected subjects and rate here
    onSave({
      subjects: selectedSubjects,
      rate: selectedRate,
    });
  };

  return (
    <div className="p-3 bg-white">
      <p className="mb-1 text-xs font-bold uppercase text-orange-400 text-right md:text-sm">
        Step 2/3
      </p>

      <form className="mt-6 flex flex-col gap-4 md:mt-8 md:pl-4">
        <p className="text-3xl font-bold text-blue-950">Subject Preference</p>

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">
            Which subjects do you intend to tutor in? (at least one is required.)
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            {['Business', 'Computer Science', 'Economics', 'Engineering', 'Foreign Languages', 'Health & Medical', 'Humanities', 'Law', 'Mathematics', 'Programming', 'Science', 'Writing', 'Other'].map(subject => (
              <div key={subject} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={subject}
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => {
                    if (selectedSubjects.includes(subject)) {
                      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
                    } else {
                      setSelectedSubjects([...selectedSubjects, subject]);
                    }
                  }}
                />
                <label htmlFor={subject}>{subject}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">
            Preferred Rates
          </label>
          <div className="flex items-center mt-2 space-x-2">
            <input
              type="radio"
              id="rate10"
              value="$10"
              checked={selectedRate === '$10'}
              onChange={() => setSelectedRate('$10')}
            />
            <label htmlFor="rate10">$10 per hour</label>
          </div>
          {/* Add more radio options for different rates if needed */}
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 cursor-pointer rounded-xl bg-gray-300 py-2 text-center text-gray-700"
            onClick={onBack}
          >
            Back
          </button>
          <button
            type="button"
            className="flex-1 cursor-pointer rounded-xl bg-green-500 py-2 text-center text-white"
            onClick={handleSave}
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
