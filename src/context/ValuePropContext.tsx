import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface ValuePropData {
  audience: string;
  problem: string;
  uniqueApproach: string;
  technicalSkills: string[];
  softSkills: string[];
  successStories: string[];
  quantifiableResults: string[];
  testimonials: string[];
  monetaryImpact: string;
  timeSavings: string;
  costReductions: string;
  valueProposition: string;
}

interface ValuePropState {
  data: ValuePropData;
  currentStep: number;
  isComplete: boolean;
}

type ValuePropAction = 
  | { type: 'UPDATE_DATA'; payload: Partial<ValuePropData> }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'COMPLETE' }
  | { type: 'RESET' };

const initialState: ValuePropState = {
  data: {
    audience: "",
    problem: "",
    uniqueApproach: "",
    technicalSkills: [],
    softSkills: [],
    successStories: [],
    quantifiableResults: [],
    testimonials: [],
    monetaryImpact: "",
    timeSavings: "",
    costReductions: "",
    valueProposition: "",
  },
  currentStep: 1,
  isComplete: false,
};

function valuePropReducer(state: ValuePropState, action: ValuePropAction): ValuePropState {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: { ...state.data, ...action.payload }
      };
    case 'SET_STEP':
      return {
        ...state,
        currentStep: Math.max(1, Math.min(5, action.payload))
      };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: Math.min(5, state.currentStep + 1)
      };
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(1, state.currentStep - 1)
      };
    case 'COMPLETE':
      return {
        ...state,
        isComplete: true
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

interface ValuePropContextType {
  state: ValuePropState;
  updateData: (data: Partial<ValuePropData>) => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  complete: () => void;
  reset: () => void;
}

const ValuePropContext = createContext<ValuePropContextType | undefined>(undefined);

export function ValuePropProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(valuePropReducer, initialState);

  const updateData = (data: Partial<ValuePropData>) => {
    dispatch({ type: 'UPDATE_DATA', payload: data });
  };

  const setStep = (step: number) => {
    dispatch({ type: 'SET_STEP', payload: step });
  };

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const prevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const complete = () => {
    dispatch({ type: 'COMPLETE' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <ValuePropContext.Provider value={{
      state,
      updateData,
      setStep,
      nextStep,
      prevStep,
      complete,
      reset
    }}>
      {children}
    </ValuePropContext.Provider>
  );
}

export function useValueProp() {
  const context = useContext(ValuePropContext);
  if (context === undefined) {
    throw new Error('useValueProp must be used within a ValuePropProvider');
  }
  return context;
}