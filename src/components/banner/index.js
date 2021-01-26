import React from 'react'
import { Grid } from '@material-ui/core'
import './styles.scss'

const Banner = () => {
    return (
        <div className="banner">
            <Grid container justify="space-around" alignItems="center" className="container">
                <Grid item lg={11} md={11} sm={11}>
                    <h1>
                        AdroitHub is a tech collaborative aimed at designing and developing quality products for brands and individuals, looking for custom Tech solutions.
                    </h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner
