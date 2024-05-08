// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cx = (...classNames: any[]) => classNames.filter(Boolean).join(' ');
