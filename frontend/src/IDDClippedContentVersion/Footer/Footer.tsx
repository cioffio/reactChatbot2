import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Footer.module.css';

interface Props {
  className?: string;
  classes?: {
    image2?: string;
    root?: string;
  };
}
/* @figmaId 143:3281 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle27}></div>
      <div className={`${props.classes?.image2 || ''} ${classes.image2}`}></div>
      <div className={classes.placeholder}>FAQs Terms of Use Privacy Statement Contact Support </div>
    </div>
  );
});
