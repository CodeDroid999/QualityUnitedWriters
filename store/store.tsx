import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Step1 = {
  firstName: string;
  lastName: string;
  selectedCountry: string;
  selectedAddress: string;
  selectedCity: string;
  selectedState: string;
  selectedHowHeard: string;
  isSchoolTeacher: boolean; // Updated to boolean
  selectedMajor: string;
  hasAffiliation: boolean; // Updated to boolean
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
};

interface Store {
  step1: Step1;
  // ... other code ...
  setStep1Data: (step1Data: Partial<Step1>) => void; // Updated to accept Partial<Step1>
  // ... other code ...
}

const useFormStore = create<Store>()(
  persist(
    (set) => ({
      step1: {
        firstName: '',
        lastName: '',
        selectedCountry: '',
        selectedAddress: '',
        selectedCity: '',
        selectedState: '',
        selectedHowHeard: '',
        isSchoolTeacher: false, // Default to false
        selectedMajor: '',
        hasAffiliation: false, // Default to false
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
      },
      // ... other code ...
      setStep1Data: (step1Data) =>
        set((state) => ({
          ...state,
          step1: {
            ...state.step1,
            ...step1Data,
          },
        })),
      // ... other code ...
    }),
    {
      name: 'formStore',
    }
  )
);

export default useFormStore;
