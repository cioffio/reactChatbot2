import { memo, SVGProps } from 'react';

const Polygon7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 235 69' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M235 39.4286L235 69H134.394L-2.06311e-06 68.5107V0L134.394 0L235 0.475719L235 39.4286Z'
      fill='#D9D9D9'
      stroke='black'
    />
  </svg>
);

const Memo = memo(Polygon7Icon);
export { Memo as Polygon7Icon };
