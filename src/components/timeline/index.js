import React, { useState, useContext, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { Context } from '../../utils/ColorContext';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import DoneIcon from '@material-ui/icons/Done';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import NoteImage from '../../assets/images/note.png';
import './styles.scss'

const Timeline = () => {
    const [color, setColor] = useContext(Context);
    const [tab, setTab] = useState(true);
    const [listBackground, setListBackground] = useState(color.code);
    const [loop, setLoop] = useState();

    useEffect(() => {
        hexToRgbA(color.code);
    }, [color.code])

    useEffect(() => {
        setLoop(
            setInterval(() => {
                setTab(!tab);
            }, 5000)
        );
    
        return function cleanup() {
            clearInterval(loop);
        };
    },[tab]);

    const activeTabStyle = {
        color: color.code,
        borderColor: color.code,
        pointerEvnet: 'none'
    }

    const tabStyle = {
        borderColor: 'transparent'
    }

    const activeListStyle = {
        backgroundColor: listBackground,
    }

    const listStyle = {
        backgroundColor: 'transparent'
    }

    const handleTabChange = () => {
        setTab(!tab);
    }

    const hexToRgbA = (hex) => {
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            setListBackground('rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.5)');
        }
    }

    return (
        <div className="timeline">
            <div className="container">
                <div className="timeline-tabs">
                    <button 
                        style={tab ? activeTabStyle : tabStyle}
                        onClick={handleTabChange}
                    >
                        Writing
                    </button>
                    <button 
                        style={!tab ? activeTabStyle : tabStyle}
                        onClick={handleTabChange}
                    >
                        Thinking
                    </button>
                </div>
                <Grid container justify="space-around" alignItems="center" className="browser-container">
                    <Grid item lg={11} md={11} sm={11}>
                        <div className="left-block">
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <FiberManualRecordIcon style={{ color: '#575859', fontSize: 12 }} />
                                    <FiberManualRecordIcon style={{ color: '#575859', fontSize: 12 }} />
                                    <FiberManualRecordIcon style={{ color: '#575859', fontSize: 12 }} />
                                </Grid>
                                <Grid item>
                                    <ArrowBackIosIcon style={{ color: '#FFFFFF', fontSize: 10 }} />
                                    <ArrowForwardIosIcon style={{ color: '#FFFFFF', fontSize: 10 }} />
                                </Grid>
                                <Grid item>
                                    <div className="flex-box">
                                        <span>Website Redesign</span>
                                        <ChevronRightIcon style={{ color: '#575859', fontSize: 15 }} className="chevron-right-icon" />
                                        <span className="active">Kickoff</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="right-block">
                            <StarOutlineOutlinedIcon style={{ color: '#878888', fontSize: 15 }} />
                            <MoreHorizOutlinedIcon style={{ color: '#878888', fontSize: 15 }} />
                        </div>
                        <div className={`timeline-block ${!tab && 'thinking-timeline'}`}>
                            <h2 className="section-title">Kickoff</h2>
                            <h3>Timeline</h3>
                            <ul className="planning">
                                <li style={!tab ? activeListStyle : listStyle}>
                                    <strong>Planning: </strong><i>week 1</i>
                                </li>
                                <li style={!tab ? activeListStyle : listStyle}>

                                    <strong>Research: </strong><i>week 2</i>
                                </li>
                                <li style={!tab ? activeListStyle : listStyle}>

                                    <strong>Design: </strong><i>weeks 3-4</i>
                                </li>
                                <li style={!tab ? activeListStyle : listStyle}>

                                    <strong>Dev: </strong><i>weeks 4-5</i>
                                </li>
                            </ul>
                        </div>
                        <div className={`timeline-block ${!tab && 'thinking-timeline'}`}>
                            <h3>Starting a Project</h3>
                            <ul className="things-to-research">
                                <li>
                                    <div className="flex-box">
                                        <DoneIcon style={{ color: '#878888', fontSize: 12 }} />
                                        Planning: We got something mate? lets plan it the Agile way
                                    </div>
                                </li>
                                <li>
                                    <div className="flex-box">
                                        <DoneIcon style={{ color: '#878888', fontSize: 12 }} />
                                        Research: Lets drill down to strategies and platforms
                                    </div>
                                </li>
                                <li>
                                    <div className="flex-box">
                                        <CheckBoxOutlineBlankIcon style={{ color: color.code, fontSize: 12 }} />
                                        Design: Creative juices are flowing... 
                                    </div>
                                </li>
                                <li>
                                    <div className="flex-box">
                                        <CheckBoxOutlineBlankIcon style={{ color: color.code, fontSize: 12 }} />
                                        Dev Tasks: Aye Aye captain! Lets build it
                                    </div>
                                </li>
                            </ul>
                            <img src={NoteImage} className="note-image" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Timeline
