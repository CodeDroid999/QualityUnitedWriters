import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Step1 = {
  firstName: string;
  lastName: string;
  Country: string;
  Address: string;
  City: string;
  State: string;
  HowHeard: string;
  isSchoolTeacher: 'Yes' | 'No'; // Updated to string literal union
  Major: string;
  hasAffiliation: 'Yes' | 'No'; // Updated to string literal union
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
  step3: Step3;
  setStep1Data: (step1Data: Partial<Step1>) => void;
  setStep2Data: (description: string) => void;
  setStep3Data: (budget: string) => void;
  clearStore: () => void;
}

const useFormStore = create<Store>()(
  persist(
    (set) => ({
      step1: {
        firstName: '',
        lastName: '',
        Country: '',
        Address: '',
        City: '',
        State: '',
        HowHeard: '',
        isSchoolTeacher: 'No', // Default to 'No'
        Major: '',
        hasAffiliation: 'No', // Default to 'No'
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
            isSchoolTeacher: step1Data.isSchoolTeacher === 'Yes' || step1Data.isSchoolTeacher === 'No' ? step1Data.isSchoolTeacher : state.step1.isSchoolTeacher,
            hasAffiliation: step1Data.hasAffiliation === 'Yes' || step1Data.hasAffiliation === 'No' ? step1Data.hasAffiliation : state.step1.hasAffiliation,
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
      setStep3Data: (budget) =>
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
            Country: '',
            Address: '',
            City: '',
            State: '',
            HowHeard: '',
            isSchoolTeacher: 'No',
            Major: '',
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
