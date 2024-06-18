/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

type ToastContextValue = {
  duration: number;
  position: 'right-top' | 'right-bottom';
};

export const ToastContext = createContext<ToastContextValue | null>(null);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('ToastContext must be used within a ToastContainer');
  }
  return context;
};
