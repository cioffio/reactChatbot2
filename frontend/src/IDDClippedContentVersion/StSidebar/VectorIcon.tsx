import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.6451 0.367084C15.1718 -0.106181 14.4073 -0.106181 13.934 0.367084L8 6.28897L2.06598 0.354949C1.59272 -0.118316 0.828214 -0.118316 0.354949 0.354949C-0.118316 0.828214 -0.118316 1.59272 0.354949 2.06598L6.28897 8L0.354949 13.934C-0.118316 14.4073 -0.118316 15.1718 0.354949 15.6451C0.828214 16.1183 1.59272 16.1183 2.06598 15.6451L8 9.71104L13.934 15.6451C14.4073 16.1183 15.1718 16.1183 15.6451 15.6451C16.1183 15.1718 16.1183 14.4073 15.6451 13.934L9.71104 8L15.6451 2.06598C16.1062 1.60485 16.1062 0.828214 15.6451 0.367084V0.367084Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
