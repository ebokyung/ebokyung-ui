import { ComponentProps, forwardRef } from 'react';

interface ToastProps extends ComponentProps<'li'> {}
export const Toast = forwardRef<HTMLLIElement, ToastProps>(({ ...props }, ref) => {
  return <li ref={ref} {...props}></li>;
});

// const ToastCompound = Object.assign(Toast, {

// })
