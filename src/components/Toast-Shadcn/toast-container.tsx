import { ToastContext } from './toast.context';
import { useToast } from './toast.hooks';
import { Toast } from './toast';

export const ToastContainer = ({ duration = 5000, position = 'right-top' }) => {
  const { toasts } = useToast();
  return (
    <ToastContext.Provider value={{ duration, position }}>
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
    </ToastContext.Provider>
  );
};
