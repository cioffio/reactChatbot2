import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Help_outline } from '../Help_outline/Help_outline';
import classes from './StText_area_ThemeLightModeDisa.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    message?: boolean;
    icon?: boolean;
    helpMessage?: boolean;
  };
  text?: {
    label?: ReactNode;
    placeholder?: ReactNode;
  };
}
/* @figmaId 110:6468 */
export const StText_area_ThemeLightModeDisa: FC<Props> = memo(function StText_area_ThemeLightModeDisa(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.information}>
        {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label goes here</div>}
        {!props.hide?.helpMessage && (
          <div className={classes.helpMessage}>
            {!props.hide?.message && (
              <div className={classes.message}>
                <div className={classes.help}>Help message goes here</div>
              </div>
            )}
            {!props.hide?.icon && (
              <Help_outline
                className={classes.icon2}
                classes={{ vector: classes.vector }}
                swap={{
                  vector: <VectorIcon className={classes.icon} />,
                }}
              />
            )}
          </div>
        )}
      </div>
      <div className={classes.input}>
        {props.text?.placeholder != null ? (
          props.text?.placeholder
        ) : (
          <div className={classes.placeholder}>
            Placeholder goes here - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to{' '}
          </div>
        )}
      </div>
    </div>
  );
});
