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
  isSchoolTeacher: 'Yes' | 'No';
  selectedMajor: string;
  hasAffiliation: 'Yes' | 'No';
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
};

type Step2 = {
  description: string;
};

type Step3 = {
  budget: string;
};

interface Store {
  step1: Step1;
  step2: Step2;
  step3: Step3; // Added Step3
  setStep1Data: (step1Data: Step1) => void;
  setStep2Data: (description: string) => void;
  setStep3Data: (budget: string) => void; // Added setStep3Data
  clearStore: () => void;
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
        isSchoolTeacher: 'No',
        selectedMajor: '',
        hasAffiliation: 'No',
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
      },
      step2: {
        description: '',
      },
      step3: {
        budget: '',
      },
      setStep1Data: (step1Data) =>
        set((state) => ({
          ...state,
          step1: {
            ...state.step1,
            ...step1Data,
          },
        })),
      setStep2Data: (description) =>
        set((state) => ({
          ...state,
          step2: {
            ...state.step2,
            description,
          },
        })),
      setStep3Data: (budget) => // Added setStep3Data
        set((state) => ({
          ...state,
          step3: {
            ...state.step3,
            budget,
          },
        })),

      clearStore: () =>
        set({
          step1: {
            firstName: '',
            lastName: '',
            selectedCountry: '',
            selectedAddress: '',
            selectedCity: '',
            selectedState: '',
            selectedHowHeard: '',
            isSchoolTeacher: 'No',
            selectedMajor: '',
            hasAffiliation: 'No',
            jobTitle: '',
            employer: '',
            startDate: '',
            endDate: '',
          },
          step2: {
            description: '',
          },
          step3: {
            budget: '',
          },
        }),
    }),
    {
      name: 'formStore',
    }
  )
);

export default useFormStore;
