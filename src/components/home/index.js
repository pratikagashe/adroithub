import React, { useEffect, useContext } from 'react'
import Banner from '../banner'
import Services from '../services'
import Timeline from '../timeline'
import DeviceBlock from '../deviceblock'
import OurMission from '../mission'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import { Context } from '../../utils/ColorContext';


const Home = () => {
    const [color, setColor] = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Banner />
            <Services />
            <Timeline />
            <div className="container tech-stack">
                <h2 className="section-title" style={{ color: color.code }}>Tech we master</h2>
                <p className="tech-subtitle">We've got the goods. We offer a numanced understanding of today's tech and digital landscape</p>
                <Link to="/technologies/">Read more</Link>
            </div>
            <DeviceBlock />
            <OurMission />
            <Footer />
        </>
    )
}

export default Home
