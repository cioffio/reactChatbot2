import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14ZM14 22.5C17.866 22.5 21 20.0714 21 16.4286C21 15.0873 19.9127 14 18.5714 14H9.42857C8.08731 14 7 15.0873 7 16.4286C7 20.0714 10.134 22.5 14 22.5ZM14 12.5C16.0711 12.5 17.75 10.8211 17.75 8.75C17.75 6.67893 16.0711 5 14 5C11.9289 5 10.25 6.67893 10.25 8.75C10.25 10.8211 11.9289 12.5 14 12.5Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
