import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackgroundBar } from './BackgroundBar/BackgroundBar.tsx';
import { Component1 } from './Component1/Component1.tsx';
import Data  from './Data/Data.js';
import { Footer } from './Footer/Footer';
import { Frame125 } from './Frame125/Frame125';
import { Group14Icon } from './Group14Icon';
import classes from './IDDClippedContentVersion.module.css';
import { Polygon1Icon } from './Polygon1Icon';
import { Polygon2Icon } from './Polygon2Icon';
import { Polygon3Icon } from './Polygon3Icon';
import { Polygon4Icon } from './Polygon4Icon';
import { Polygon5Icon } from './Polygon5Icon';
import { Polygon6Icon } from './Polygon6Icon';
import { Polygon7Icon } from './Polygon7Icon';
import { StSidebar } from './StSidebar/StSidebar';

interface Props {
  className?: string;
}
/* @figmaId 143:9679 */
export const IDDClippedContentVersion: FC<Props> = memo(function IDDClippedContentVersion(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.text}>ITSU Limited - KYC0026081</div>
      <Data />
      <div className={classes.frame15}>
        <div className={classes.polygon7}>
          <Polygon7Icon className={classes.icon} />
        </div>
        <div className={classes.approval}>Approval</div>
        <div className={classes.polygon6}>
          <Polygon6Icon className={classes.icon2} />
        </div>
        <div className={classes.review}>Review</div>
        <div className={classes.polygon5}>
          <Polygon5Icon className={classes.icon3} />
        </div>
        <div className={classes.qC}>QC</div>
        <div className={classes.polygon4}>
          <Polygon4Icon className={classes.icon4} />
        </div>
        <div className={classes.summary}>Summary</div>
        <div className={classes.polygon3}>
          <Polygon3Icon className={classes.icon5} />
        </div>
        <div className={classes.screening}>Screening</div>
        <div className={classes.polygon2}>
          <Polygon2Icon className={classes.icon6} />
        </div>
        <div className={classes.outreach}>Outreach</div>
        <div className={classes.polygon1}>
          <Polygon1Icon className={classes.icon7} />
        </div>
        <div className={classes.iDD}>IDD</div>
        <div className={classes.group14}>
          <Group14Icon className={classes.icon8} />
        </div>
      </div>
      <BackgroundBar />
      <Footer className={classes.footer} classes={{ image2: classes.image2 }} />
      <Frame125 />
      <div className={classes.frame135}>
        <Component1 className={classes.component3} />
      </div>
    </div>
  );
});
export default IDDClippedContentVersion