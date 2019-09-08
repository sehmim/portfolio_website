import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Jobs } from "../utils/Jobs";

import "../styles/xp.sass";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        alignItems: 'center'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        textAlign: 'center'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    img: {
        width: '190px',
        height: '30px',
        padding: '15px',
    },
    btn: {
        border: '1px solid grey',
    },
    imgStack: {
        width: '70px',
        height: '70px',
        margin: '20px'
    }
}));



export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <div className={classes.root}>
            {
                Jobs.map((item, index) => {
                    return (
                        <ExpansionPanel expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
                            <ExpansionPanelSummary
                                style={{ justifyContent: 'center' }}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Box alignContent="center" >
                                    <Typography variant="h3" component="h3" >
                                        {item.title}
                                    </Typography>
                                    <Typography style={{ padding: 10 }} variant="body1" component="h3">{item.date}</Typography>
                                    <img className={classes.img} src={item.img}></img>

                                </Box>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Box left display="flex" flexDirection="column">
                                    <Box my={4} >
                                        <ul>
                                            <li>
                                                <Typography align="left" variant="subtitle1" component="p"> {item.details1} </Typography>
                                            </li>
                                            <li>
                                                <Typography align="left" variant="subtitle1" component="p"> {item.details2} </Typography>
                                            </li>
                                            <li>
                                                <Typography align="left" variant="subtitle1" component="p"> {item.details3} </Typography>
                                            </li>
                                        </ul>
                                    </Box>
                                    <Typography variant="h5" component="h3" >Tech Stack</Typography>
                                    <Box my={4} flexDirection="row" >
                                        {
                                            item.techStack.map((element) => {
                                                return (
                                                    <img className={classes.imgStack} src={element}></img>
                                                )
                                            })
                                        }
                                    </Box>
                                </Box>
                                {
                                }

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )

                })
            }
        </div >
    );
}