import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 240 69' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M240 34.8317L190.394 69H108.884L1.07288e-05 68.5107V0L108.884 0L190.394 0.475719L240 34.8317Z'
      fill='white'
      stroke='black'
    />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
