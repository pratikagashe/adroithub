import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { Context } from '../../utils/ColorContext';
import DeviceMock from '../../assets/images/device-mock.png'
import './styles.scss'

const DeviceBlock = () => {
    const [color, setColor] = useContext(Context);
    return (
        <div className="device-block">
            <Grid container justify="space-between" alignItems="center" className="container">
                <Grid item lg={5} md={12} sm={12}>
                    <h3 className="section-subtitle" style={{ color: color.code }}>From idea to reality</h3>
                    <h2 className="section-title">
                        Have an idea in mind ??<br />
                        We code to bring the ideas alive.
                    </h2>
                    <p>Our team is armed with methods, tools and super powers. We are among the most of positive people with a Can-do attitude. We build the projects comprehensive work plan, execute and close it and they take care of everything in between. <br /><br />
                    We create Habit-Forming Engaging Products that leave Users charmed.<br /><br />
                    Ideas have the power to transform the World into a better place. Let’s make it happen together!</p>
                </Grid>
                <Grid item lg={6} md={12} sm={12}>
                    <img src={DeviceMock} />
                </Grid>
            </Grid>
        </div>
    )
}

export default DeviceBlock
