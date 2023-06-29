import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';
import resets from '../_resets.module.css';
import { BackgroundBar } from './BackgroundBar/BackgroundBar.tsx';
import classes from './CaseFiles.module.css';
import { CellCell } from './CellCell/CellCell.tsx';
import { Footer } from './Footer/Footer.tsx';
import { ShapeIcon } from './ShapeIcon.tsx';
import { VectorIcon } from './VectorIcon.tsx';
import { VectorIcon2 } from './VectorIcon2.tsx';
import { Link } from 'react-router-dom';

/* @figmaId 162:64144 */
function CaseFiles () {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <BackgroundBar />
      <div className={classes.kYCCaseList}>
        <div className={classes.frame7}>
          <div className={classes.kYCCaseFiles}>KYC Case Files</div>
        </div>
        <div className={classes.detailsHeaderDetailsHeader}>
          <div className={classes.frame6}>
            <div className={classes.frame8}>
              <div className={classes.rectangle2}></div>
              <div className={classes.shape}>
                <ShapeIcon className={classes.icon} />
              </div>
              <div className={classes.search}>Search</div>
              <div className={classes.rectangle4}></div>
              <div className={classes.filter}>Filter</div>
              <div className={classes.rectangle42}></div>
              <div className={classes.sort}>Sort</div>
              <div className={classes.vector}>
                <VectorIcon className={classes.icon2} />
              </div>
              <div className={classes.vector2}>
                <VectorIcon2 className={classes.icon3} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.group2}>
          <div className={classes.frame5}>
            <div className={classes.group1}>
              <div className={classes.rowDetailsRow}>
                <CellCell
                  className={classes.cellCell}
                  classes={{ stringContainer: classes.stringContainer }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary}>KYC0026081</div>,
                  }}
                />
                   <CellCell
                    className={classes.cellCell2}
                    classes={{ stringContainer: classes.stringContainer2 }}
                    text={{
                      stringCellSecondary: (
                        <Link to="/idd-component" className={classes.link}>
                          <div className={classes.stringCellSecondary2}>Itsu Limited</div>
                        </Link>
                      ),
                    }}
/>
                <CellCell
                  className={classes.cellCell3}
                  classes={{ stringContainer: classes.stringContainer3 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary3}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell4}
                  classes={{ stringContainer: classes.stringContainer4 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary4}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell5}
                  classes={{ stringContainer: classes.stringContainer5 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary5}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow2}>
                <CellCell
                  className={classes.cellCell6}
                  classes={{ stringContainer: classes.stringContainer6 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary6}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell7}
                  classes={{ stringContainer: classes.stringContainer7 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary7}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell8}
                  classes={{ stringContainer: classes.stringContainer8 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary8}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell9}
                  classes={{ stringContainer: classes.stringContainer9 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary9}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell10}
                  classes={{ stringContainer: classes.stringContainer10 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary10}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow3}>
                <CellCell
                  className={classes.cellCell11}
                  classes={{ stringContainer: classes.stringContainer11 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary11}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell12}
                  classes={{ stringContainer: classes.stringContainer12 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary12}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell13}
                  classes={{ stringContainer: classes.stringContainer13 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary13}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell14}
                  classes={{ stringContainer: classes.stringContainer14 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary14}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell15}
                  classes={{ stringContainer: classes.stringContainer15 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary15}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow4}>
                <CellCell
                  className={classes.cellCell16}
                  classes={{ stringContainer: classes.stringContainer16 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary16}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell17}
                  classes={{ stringContainer: classes.stringContainer17 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary17}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell18}
                  classes={{ stringContainer: classes.stringContainer18 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary18}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell19}
                  classes={{ stringContainer: classes.stringContainer19 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary19}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell20}
                  classes={{ stringContainer: classes.stringContainer20 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary20}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow5}>
                <CellCell
                  className={classes.cellCell21}
                  classes={{ stringContainer: classes.stringContainer21 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary21}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell22}
                  classes={{ stringContainer: classes.stringContainer22 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary22}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell23}
                  classes={{ stringContainer: classes.stringContainer23 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary23}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell24}
                  classes={{ stringContainer: classes.stringContainer24 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary24}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell25}
                  classes={{ stringContainer: classes.stringContainer25 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary25}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow6}>
                <CellCell
                  className={classes.cellCell26}
                  classes={{ stringContainer: classes.stringContainer26 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary26}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell27}
                  classes={{ stringContainer: classes.stringContainer27 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary27}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell28}
                  classes={{ stringContainer: classes.stringContainer28 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary28}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell29}
                  classes={{ stringContainer: classes.stringContainer29 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary29}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell30}
                  classes={{ stringContainer: classes.stringContainer30 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary30}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow7}>
                <CellCell
                  className={classes.cellCell31}
                  classes={{ stringContainer: classes.stringContainer31 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary31}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell32}
                  classes={{ stringContainer: classes.stringContainer32 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary32}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell33}
                  classes={{ stringContainer: classes.stringContainer33 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary33}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell34}
                  classes={{ stringContainer: classes.stringContainer34 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary34}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell35}
                  classes={{ stringContainer: classes.stringContainer35 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary35}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow8}>
                <CellCell
                  className={classes.cellCell36}
                  classes={{ stringContainer: classes.stringContainer36 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary36}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell37}
                  classes={{ stringContainer: classes.stringContainer37 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary37}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell38}
                  classes={{ stringContainer: classes.stringContainer38 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary38}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell39}
                  classes={{ stringContainer: classes.stringContainer39 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary39}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell40}
                  classes={{ stringContainer: classes.stringContainer40 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary40}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow9}>
                <CellCell
                  className={classes.cellCell41}
                  classes={{ stringContainer: classes.stringContainer41 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary41}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell42}
                  classes={{ stringContainer: classes.stringContainer42 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary42}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell43}
                  classes={{ stringContainer: classes.stringContainer43 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary43}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell44}
                  classes={{ stringContainer: classes.stringContainer44 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary44}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell45}
                  classes={{ stringContainer: classes.stringContainer45 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary45}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
              <div className={classes.detailsHeaderDetailsHeader2}>
                <CellCell
                  className={classes.cellCell46}
                  classes={{ stringContainer: classes.stringContainer46 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary46}>Customer KYC Number</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell47}
                  classes={{ stringContainer: classes.stringContainer47 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary47}>Full Legal Name</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell48}
                  classes={{ stringContainer: classes.stringContainer48 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary48}>KYC Status</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell49}
                  classes={{ stringContainer: classes.stringContainer49 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary49}>Workflow Stage</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell50}
                  classes={{ stringContainer: classes.stringContainer50 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary50}>Date Created</div>,
                  }}
                />
              </div>
              <div className={classes.rowDetailsRow10}>
                <CellCell
                  className={classes.cellCell51}
                  classes={{ stringContainer: classes.stringContainer51 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary51}>KYC0026081</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell52}
                  classes={{ stringContainer: classes.stringContainer52 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary52}>Itsu Limited</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell53}
                  classes={{ stringContainer: classes.stringContainer53 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary53}>KYC in Progress</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell54}
                  classes={{ stringContainer: classes.stringContainer54 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary54}>Outreach</div>,
                  }}
                />
                <CellCell
                  className={classes.cellCell55}
                  classes={{ stringContainer: classes.stringContainer55 }}
                  text={{
                    stringCellSecondary: <div className={classes.stringCellSecondary55}>20/06/2023 11:50</div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer classes={{ image2: classes.image2 }} />
    </div>
  );
};

export default CaseFiles;