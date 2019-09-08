import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { green } from '@material-ui/core/colors';
import ProgramEach from "../components/ProgramEach";
import { Box, Button } from '@material-ui/core';

import '../styles/choices.sass'

// Utils
import { Websites, Mobile, OpenSource, Others } from "../utils/ProjectsData";


function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'relative',
        height: '100%'

    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
    tab: {
        font: '10px'
    },
    tabContainer: {
        minHeight: '400px',
        maxHeight: '220px'
    }
}));

export default function FloatingActionButtonZoom() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    const labelMaker = (title, img) => {
        return (
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', }} >
                <img className="appbar-img" src={img}></img>
                <p className="appbar-title">{title}</p>
            </div >
        )
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">

                <Tabs

                    style={{ padding: '10px', fontSize: '10px', maxHeight: '250px' }}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab className={classes.tab} label={labelMaker('Web Dev', require('../assets/web-dev.png'))} />
                    <Tab className={classes.tab} label={labelMaker('Mobile', require('../assets/mobile-dev.jpg'))} />
                    <Tab className={classes.tab} label={labelMaker('Open Source', require('../assets/open-source.png'))} />
                    <Tab className={classes.tab} label={labelMaker('Others', require('../assets/others.png'))} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >

                {/* -------- Web Dev ------- */}
                <TabContainer className={classes.tabContainer} dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        {
                            Websites.map((item, index) => {
                                return (
                                    <ProgramEach title={item.title} img={item.img} techStackImg={item.techStackImg} description1={item.description} description2={item.description2} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink} skipLiveDemo={item.skipLiveDemo} />
                                )
                            })
                        }
                    </Box>
                </TabContainer>
                {/* -------- Mobile ------- */}
                <TabContainer className={classes.tabContainer} dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        {
                            Mobile.map((item, index) => {
                                return (
                                    <ProgramEach title={item.title} img={item.img} techStackImg={item.techStackImg} description1={item.description} description2={item.description2} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink} skipLiveDemo={item.skipLiveDemo} />
                                )
                            })
                        }
                    </Box>
                </TabContainer>
                {/* -------- Open Source ------- */}
                <TabContainer className={classes.tabContainer} dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        {
                            OpenSource.map((item, index) => {
                                return (
                                    <ProgramEach title={item.title} img={item.img} techStackImg={item.techStackImg} description1={item.description} description2={item.description2} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink} skipLiveDemo={item.skipLiveDemo} />
                                )
                            })
                        }
                    </Box>
                </TabContainer>
                {/* -------- Others ------- */}
                <TabContainer className={classes.tabContainer} dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        {
                            Others.map((item, index) => {
                                return (
                                    <ProgramEach title={item.title} img={item.img} techStackImg={item.techStackImg} description1={item.description} description2={item.description2} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink} skipLiveDemo={item.skipLiveDemo} />
                                )
                            })
                        }
                    </Box>
                </TabContainer>
            </SwipeableViews>
        </div >
    );
}