import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './PersonCircle_Size32ThemeRegula.module.css';
import { ShapeIcon } from './ShapeIcon';

interface Props {
  className?: string;
  swap?: {
    shape?: ReactNode;
  };
}
/* @figmaId 6:478 */
export const PersonCircle_Size32ThemeRegula: FC<Props> = memo(function PersonCircle_Size32ThemeRegula(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.shape}>{props.swap?.shape || <ShapeIcon className={classes.icon} />}</div>
    </div>
  );
});
