import { memo, SVGProps } from 'react';

const Group14Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 201 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H201L189.14 8.5L0 7.96875V0Z' fill='#018EFF' />
  </svg>
);

const Memo = memo(Group14Icon);
export { Memo as Group14Icon };
