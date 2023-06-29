import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './StSidebar.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 146:1256 */
export const StSidebar: FC<Props> = memo(function StSidebar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame124}>
        <div className={classes.text}>Accenture Smart KYC</div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.section2}>
        <div className={classes.stWrite}>
          <div className={classes.text2}>Chatbot</div>
        </div>
        <div className={classes.rectangle20}></div>
      </div>
      <div className={classes.section3}>
        <div className={classes.stWrite2}>
          <div className={classes.text3}>KYC Analyst</div>
        </div>
        <div className={classes.rectangle202}></div>
      </div>
      <div className={classes.section5}>
        <div className={classes.stWrite3}>
          <div className={classes.text4}>Chatbot</div>
        </div>
        <div className={classes.rectangle203}></div>
      </div>
      <div className={classes.section4}>
        <div className={classes.rectangle204}></div>
        <div className={classes.text5}>Ask me anything...</div>
      </div>
    </div>
  );
});
