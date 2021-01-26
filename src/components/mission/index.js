import React, { useContext } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ColorChange from '../../utils/colorchange'
import {Context} from '../../utils/ColorContext';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import './styles.scss'

const OurMission = () => {
    const [color, setColor] = useContext(Context);
    const changeTheme = (theme) => {
        setColor({
            ...color,
            theme: theme
        });
    }

    const BootstrapButton = withStyles({
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          border: '0',
          backgroundColor: 'transparent',
          color: color.theme === 'light' ? '#000000' : '#ffffff',
          borderRadius: '100%',
          boxShadow: '0 7px 9px rgba(0,0,0,.09)',
          padding: '8px',
          margin: '0px 4px',
          '&.active': {
            backgroundColor: color.code,
            pointerEvents: 'none',
            color: color.theme === 'light' ? '#ffffff' : '#000000',
            boxShadow: '0 7px 9px rgba(255,255,255,.09)',
        },
          '&:hover': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            outline: 'none',
            boxShadow: '0 7px 9px rgba(0,0,0,.09)',
        }
        },
    })(Button);

    return (
        <div className="container">
            <Grid container justify="space-between" className="our-mission">
                <Grid item lg={11} md={11} sm={11}>
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 className="section-title">
                            On a Mission to unlock creativity
                        </h2>
                        <p>We've been building creative <span style={{ color: color.code}}>PRODUCTS</span> together for years now and have a deep appreciation for the needs creatives have while "in flow." We're dedicated to building better products, so you can spend less time figuring out what happens behind the scenes and more time focused on bringing your ideas to life. </p>
                        <p>We believe every product is unique and should be built to tailor fit your tastes and preferences. </p>
                        <p>Oh yes! that reminds us that our theme here can also be tailored to your taste , Enjoy <span style={{ color: color.code}}>Playing</span> around....</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp">
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
                        <div className="theme-changer">
                            <div className="flex-box">
                                <BootstrapButton variant="contained" color="primary" className={color.theme === 'light' ? 'active' : ''} onClick={() => changeTheme('light')}>
                                    <WbSunnyOutlinedIcon style={{ fontSize: 48 }} />
                                </BootstrapButton>
                                <BootstrapButton variant="contained" color="primary" className={color.theme === 'dark' ? 'active' : ''} onClick={() => changeTheme('dark')}>
                                    <Brightness2OutlinedIcon style={{ fontSize: 48 }} />
                                </BootstrapButton>
                            </div>
                            <ColorChange />
                        </div>
                    </div>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </div>
    )
}

export default OurMission
