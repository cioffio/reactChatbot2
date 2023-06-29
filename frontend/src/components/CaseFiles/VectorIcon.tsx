import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 20 18.752248764038086'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.51667 0L0 2.79896L10 12.9428L20 2.79896L17.7167 0L14.1333 3.58852L10 7.39455L6.11667 3.58852L2.51667 0Z'
      fill='#018EFF'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
