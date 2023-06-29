import { memo, SVGProps } from 'react';

const Polygon6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 240 69' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M240 34.8317L190.394 69H108.884L-3.12924e-06 68.5107V0L108.884 0L190.394 0.475719L240 34.8317Z'
      fill='#D9D9D9'
      stroke='black'
    />
  </svg>
);

const Memo = memo(Polygon6Icon);
export { Memo as Polygon6Icon };
