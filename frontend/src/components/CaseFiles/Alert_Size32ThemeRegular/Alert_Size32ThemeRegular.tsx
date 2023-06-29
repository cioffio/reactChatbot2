import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Alert_Size32ThemeRegular.module.css';
import { ShapeIcon } from './ShapeIcon';

interface Props {
  className?: string;
  classes?: {
    shape?: string;
    root?: string;
  };
  swap?: {
    shape?: ReactNode;
  };
}
/* @figmaId 40:339 */
export const Alert_Size32ThemeRegular: FC<Props> = memo(function Alert_Size32ThemeRegular(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.shape || ''} ${classes.shape}`}>
        {props.swap?.shape || <ShapeIcon className={classes.icon} />}
      </div>
    </div>
  );
});
