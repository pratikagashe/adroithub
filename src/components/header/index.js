import React, { useContext } from 'react'
import Nav from './Nav'
import { Grid } from '@material-ui/core'
import {Context} from '../../utils/ColorContext';
import './styles.scss'
import { Link } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu'

const Header = () => {
    const [color, setColor] = useContext(Context);

    return (
        <header id="header-container">
            <div className="container">
                <Grid container alignContent='space-between' alignItems='center'>
                    <Grid item lg={4} md={4} sm={4}>
                        <div className="logo">
                            <Link to="/">
                                <h2 style={{ color: color.code }}>a</h2>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} className="nav-container hide-tablet">
                        <Nav />
                    </Grid>
                </Grid>
            </div>
            <div className="hide-tablet-landscape hide-desktop">
                <Menu
                    outerContainerId = {'header-container'}
                    right
                >
                    <a className="menu-item" href="https://www.linkedin.com/company/adroithub" rel="noreferrer"  target="_blank">LinkedIn</a>
                    <a className="menu-item" href="https://www.facebook.com/AdroitHub-103644818346747/" rel="noreferrer"  target="_blank">Facebook</a>
                    <a className="menu-item" href="https://dribbble.com/adroitHub" rel="noreferrer"  target="_blank">Dribble</a>
                    <a className="menu-item" href="https://www.behance.net/AdroitHub" rel="noreferrer"  target="_blank">Behance</a>
                    <a className="menu-item" href="https://angel.co/company/adroithub" rel="noreferrer"  target="_blank">Angelist</a>
                    <a className="menu-item" href="mailto:info@adroithub.com">Contact</a>
                </Menu>
            </div>
        </header>
    )
}

export default Header
