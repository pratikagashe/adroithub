import React from 'react'
import { Grid } from '@material-ui/core'
import WebsiteImage from '../../assets/images/services/website-dark.png'
import MobileAppImage from '../../assets/images/services/mobile-app-dark.png'
import UiUxImage from '../../assets/images/services/ui-ux-dark.png'
import BrandingImage from '../../assets/images/services/branding-dark.png'
import './styles.scss'

const ServiceList = [
    {
        serviceName: 'Website Development',
        image: WebsiteImage,
        content: (
            <p>
                We create smooth websites  that allow you expose your brand to organic audience. <br /><br />
                Our Frontend heroes give you an interactive screen with all elements in place. <br /><br />
                Break-away from the ordinary with a unique custom website that has got all  solutions hand coded.
            </p>
        )
    },
    {
        serviceName: 'App Development',
        image: MobileAppImage,
        content: (
            <p>
                Applications should be simple and easy to understand, We craft Applications that  are technically well structured, and can handle all of your needs.<br /><br />
                Applications that are Habit forming and  fun to interact with. we don’t just talk about apps; we live and breathe apps.
            </p>
        )
    },
    {
        serviceName: 'UiUxImage',
        image: UiUxImage,
        content: (
            <p>
                We help you establish or improve the user experience of your products, so that the end users become engaged with and loyal to them.<br /><br />
                We create design that is intuitive and evokes the right emotions of the User. User engagement happens when UI &amp; UX work together. Let’s engage some folks around with our awww so good’ design interactions.
            </p>
        )
    },
    {
        serviceName: 'Branding',
        image: BrandingImage,
        content: (
            <p>
                We create a comprehensive branding strategy that will enable you to expand your reach and become the leader in your industry.<br /><br />
                We help you in building your brand and tell it’s story to your world.
            </p>
        ),
    },
]

const Services = () => {
    return (
        <div className="services">
            <h2 className="section-title container">
                Let's explore where we can help... 
            </h2>
            <Grid container justify="space-around" alignItems="flex-start" className="container">
                {ServiceList && 
                    ServiceList.length > 0 && 
                    ServiceList.map((data, index) => (
                    <Grid item lg={6} md={6} sm={6} xs={11} key={`service${index}`} className="service-block">
                        <img src={data.image} />
                        <h2 className="service-title">{data.serviceName}</h2>
                        {data.content}
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Services
