import { memo, SVGProps } from 'react';

const VectorIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.16667 14H9.83333V12.3333H8.16667V14ZM9 0.666667C4.4 0.666667 0.666667 4.4 0.666667 9C0.666667 13.6 4.4 17.3333 9 17.3333C13.6 17.3333 17.3333 13.6 17.3333 9C17.3333 4.4 13.6 0.666667 9 0.666667ZM9 15.6667C5.325 15.6667 2.33333 12.675 2.33333 9C2.33333 5.325 5.325 2.33333 9 2.33333C12.675 2.33333 15.6667 5.325 15.6667 9C15.6667 12.675 12.675 15.6667 9 15.6667ZM9 4C7.15833 4 5.66667 5.49167 5.66667 7.33333H7.33333C7.33333 6.41667 8.08333 5.66667 9 5.66667C9.91667 5.66667 10.6667 6.41667 10.6667 7.33333C10.6667 9 8.16667 8.79167 8.16667 11.5H9.83333C9.83333 9.625 12.3333 9.41667 12.3333 7.33333C12.3333 5.49167 10.8417 4 9 4Z'
      fill='#A3A8B8'
    />
  </svg>
);

const Memo = memo(VectorIcon7);
export { Memo as VectorIcon7 };
