import { ReactNode, useEffect, useState } from 'react';
import { Toast as ToastComponent } from './toast';

type ToastProps = React.ComponentPropsWithoutRef<typeof ToastComponent>;

type ToastContainerToast = ToastProps & {
  id: number;
  message?: ReactNode;
  duration?: number;
};

type Toast = Omit<ToastContainerToast, 'id'>;

interface State {
  toasts: ToastContainerToast[];
}
const TOAST_LIMIT = 10;

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToastContainerToast;
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToastContainerToast['id'];
    };

// 전역 변수를 이용해 중앙 집중화
//  여러 컴포넌트 간에 상태를 공유하고, 일관된 상태 업데이트를 보장
let memoryState: State = { toasts: [] };
const listeners: Array<(state: State) => void> = [];

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast!, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.toastId),
      };
    default:
      return state;
  }
};

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach(listener => {
    listener(memoryState);
  });
}

const toast = ({ duration = 3000, ...props }: Toast) => {
  const id = new Date().getTime();
  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
    },
  });

  if (duration) {
    setTimeout(() => {
      dispatch({ type: 'REMOVE_TOAST', toastId: id });
    }, duration);
  }

  return id;
};

const useToast = () => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state, // toasts
    toast,
  };
};

export { useToast, toast };
