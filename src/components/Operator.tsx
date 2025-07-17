import React, { useEffect } from 'react';
import { ValuePropProvider, useValueProp } from '@/context/ValuePropContext';
import { Builder } from './Builder';

// Storage utilities
const STORAGE_KEY = 'valueProp_data';

function OperatorContent({ children }: { children: React.ReactNode }) {
  const { state, updateData } = useValueProp();

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        updateData(parsedData);
      } catch (error) {
        console.error('Failed to load saved data:', error);
      }
    }
  }, [updateData]);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  }, [state.data]);

  return <>{children}</>;
}

interface OperatorProps {
  children?: React.ReactNode;
}

export function Operator({ children }: OperatorProps) {
  return (
    <ValuePropProvider>
      <OperatorContent>
        {children || <Builder />}
      </OperatorContent>
    </ValuePropProvider>
  );
}