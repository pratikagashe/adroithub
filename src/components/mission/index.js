import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ColorChange from '../../utils/colorchange'
import {Context} from '../../utils/ColorContext';
import './styles.scss'

const OurMission = () => {
    const [color, setColor] = useContext(Context);

    return (
        <div className="container">
            <Grid container justify="space-between" className="our-mission">
                <Grid item lg={11} md={11} sm={11}>
                    <h2 className="section-title">
                        On a Mission to unlock creativity
                    </h2>
                    <p>We've been building creative <span style={{ color: color.code}}>PRODUCTS</span> together for years now and have a deep appreciation for the needs creatives have while "in flow." We're dedicated to building better products, so you can spend less time figuring out what happens behind the scenes and more time focused on bringing your ideas to life. </p>
                    <p>We believe every product is unique and should be built to tailor fit your tastes and preferences. </p>
                    <p>Oh yes! that reminds us that our theme here can also be tailored to your taste , Enjoy <span style={{ color: color.code}}>Playing</span> around....</p>
                    <div className="browser-container">
                        <div className="left-block hide-tablet">
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <FiberManualRecordIcon style={{ color: '#575859', fontSize: 12 }} />
                                    <FiberManualRecordIcon style={{ color: '#575859', fontSize: 12 }} />
                                    <FiberManualRecordIcon style={{ color: '#575859', fontSize: 12 }} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="mock-text hide-tablet">
                            <span></span>
                            <span></span>
                            <span></span>
                            <br />
                            <span></span>
                            <span style={{ backgroundColor: color.code }}></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ColorChange />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OurMission
