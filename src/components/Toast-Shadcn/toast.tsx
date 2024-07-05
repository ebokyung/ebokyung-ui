import { ComponentProps, forwardRef } from 'react';
import { Box } from '../Box';
import * as styles from './toast.css';

interface ToastProps extends Omit<ComponentProps<'div'>, 'color'> {}
export const Toast = forwardRef<HTMLLIElement, ToastProps>(({ ...props }, ref) => {
  return <Box as="li" ref={ref} className={styles.toastRoot} {...props}></Box>;
});

// const ToastCompound = Object.assign(Toast, {

// })
