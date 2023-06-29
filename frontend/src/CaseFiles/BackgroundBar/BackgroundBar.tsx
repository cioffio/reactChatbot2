import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';
import resets from '../../_resets.module.css';
import { Alert_Size32ThemeRegular } from '../Alert_Size32ThemeRegular/Alert_Size32ThemeRegular.tsx';
import { PersonCircle_Size32ThemeRegula } from '../PersonCircle_Size32ThemeRegula/PersonCircle_Size32ThemeRegula.tsx';
import classes from './BackgroundBar.module.css';
import { ShapeIcon } from './ShapeIcon.tsx';
import { ShapeIcon2 } from './ShapeIcon2.tsx';

interface Props {
  className?: string;
}
/* @figmaId 143:3286 */
export const BackgroundBar: FC<Props> = memo(function BackgroundBar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.navigationBar}>
        <div className={classes.loginIcon}>
          <PersonCircle_Size32ThemeRegula
            swap={{
              shape: <ShapeIcon className={classes.icon} />,
            }}
          />
        </div>
        <div className={classes.accentureSmartKYC}>Accenture Smart KYC</div>
        <div className={classes.line1}></div>
        <div className={classes.rectangle3}></div>
        <div className={classes.eN}>EN </div>
        <div className={classes.stringIconChevronDown}></div>
        <Alert_Size32ThemeRegular
          className={classes.alert}
          classes={{ shape: classes.shape }}
          swap={{
            shape: (
              <div className={classes.shape}>
                <ShapeIcon2 className={classes.icon2} />
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
});
