import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 18.752248764038086 18.752248764038086'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.265 0L0 2.5592L9 11.8341L18 2.5592L15.945 0L12.72 3.28111L9 6.76111L5.505 3.28111L2.265 0Z'
      fill='#018EFF'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
