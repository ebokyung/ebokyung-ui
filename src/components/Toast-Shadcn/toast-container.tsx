import { ToastContext, ToastPosition } from './toast.context';
import { useToast } from './toast.hooks';
import { Toast } from './toast';
import { Box } from '../Box';
import { ComponentProps } from 'react';
import * as styles from './toast.css';

interface ToastContainerProps extends ComponentProps<'ul'> {
  duration?: number;
  position?: ToastPosition;
}

export const ToastContainer = ({ duration = 5000, position = 'top-right' }: ToastContainerProps) => {
  const { toasts } = useToast();
  return (
    <ToastContext.Provider value={{ duration, position }}>
      <Box as="ul" className={styles.toastViewport({ position })}>
        {toasts.map(({ id, message }) => {
          return (
            <Toast key={id}>
              {id} {message}
            </Toast>
            //   <Toast key={id}>
            //     {/* <div style={{ display: 'grid', gap: 1 }}> */}
            //     {message && <ToastTitle>{message}</ToastTitle>}
            //     {/* {description && <ToastDescription>{description}</ToastDescription>}
            //     </div> */}
            //     {/* {action}
            //     <ToastClose /> */}
            //   </Toast>
          );
        })}
      </Box>
    </ToastContext.Provider>
  );
};
