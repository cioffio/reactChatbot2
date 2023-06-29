import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame125.module.css';
import { ShapeIcon } from './ShapeIcon.tsx';
import { VectorIcon } from './VectorIcon.tsx';

interface Props {
  className?: string;
}
/* @figmaId 146:1306 */
export const Frame125: FC<Props> = memo(function Frame125(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle24}></div>
      <div className={classes.text}>Case Overview</div>
      <div className={classes.shape}>
        <ShapeIcon className={classes.icon} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
    </div>
  );
});
