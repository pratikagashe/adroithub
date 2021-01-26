import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import {Technologies} from '../../utils/Technologies'
import './styles.scss'

const TechStack = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tech-stack">
            <Grid container justify="space-between" alignItems="center" className="container">
                <Grid item lg={6} md={12} sm={11}>
                    <h2 className="section-title">Tech we master</h2>
                    <p className="tech-subtitle">We've got the goods. We offer a numanced understanding of today's tech and digital landscape</p>
                </Grid>
            </Grid>
            {Technologies && Technologies.map((technology, index)=>(
                <div className="tech-container container" key={`technology${index}`}>
                    <div className="tech-name">
                            <h3>{technology.name}</h3>
                    </div>
                    <div className="tech-list">
                        {technology.techs && technology.techs.map((tech, index)=>(
                            <div className="tech-block" key={`tech${index}`}>
                                <div className="image-block">
                                    <img src={tech.icon} alt="Swift" />
                                </div>
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TechStack
