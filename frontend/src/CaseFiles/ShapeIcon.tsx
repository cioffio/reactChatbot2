import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.82609 0C3.50386 0 0 3.50386 0 7.82609C0 12.1483 3.50386 15.6522 7.82609 15.6522C9.67393 15.6522 11.3722 15.0118 12.711 13.9408L18.5156 19.7453C18.8551 20.0849 19.4057 20.0849 19.7453 19.7453C20.0849 19.4057 20.0849 18.8551 19.7453 18.5156L13.9408 12.711C15.0118 11.3722 15.6522 9.67393 15.6522 7.82609C15.6522 3.50386 12.1483 0 7.82609 0ZM1.73913 7.82609C1.73913 4.46435 4.46435 1.73913 7.82609 1.73913C11.1878 1.73913 13.913 4.46435 13.913 7.82609C13.913 11.1878 11.1878 13.913 7.82609 13.913C4.46435 13.913 1.73913 11.1878 1.73913 7.82609Z'
      fill='#212121'
    />
  </svg>
);

const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };