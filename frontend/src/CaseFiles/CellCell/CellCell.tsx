import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CellCell.module.css';

interface Props {
  className?: string;
  classes?: {
    stringContainer?: string;
    root?: string;
  };
  text?: {
    stringCellSecondary?: ReactNode;
  };
}
/* @figmaId 1:41 */
export const CellCell: FC<Props> = memo(function CellCell(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.stringContainer || ''} ${classes.stringContainer}`}>
        {props.text?.stringCellSecondary != null ? (
          props.text?.stringCellSecondary
        ) : (
          <div className={classes.stringCellSecondary}>Cell string</div>
        )}
      </div>
    </div>
  );
});
