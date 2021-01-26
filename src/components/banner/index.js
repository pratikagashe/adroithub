import React from 'react'
import { Grid } from '@material-ui/core'
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.scss'

const Banner = () => {
    return (
        <div className="banner">
            <Grid container justify="space-around" alignItems="center" className="container">
                <Grid item lg={11} md={11} sm={11}>
                    <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                        <h1>
                            AdroitHub is a tech collaborative aimed at designing and developing quality products for brands and individuals, looking for custom Tech solutions.
                        </h1>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner
