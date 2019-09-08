import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';



const useStyles = makeStyles(theme => ({
    card: {
        margin: '25px 0px 25px 0px',
        minWidth: 340,
        maxWidth: 340,
        padding: 15
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },

    btn: {
        border: '1px solid grey',
        fontSize: '10px',
        margin: '5px',
        cursor: 'default'
    },

    title: {
        minHeight: '40px',
        maxHeight: '80px',
        margin: '0px 0px 10px 0px',
        fontSize: '25px'
    },
    btnGrp: {
        minHeight: '50px',
    },
    BottomButtons: {
        position: 'relative',
        padding: '10px'
    },
    btn2Img: {
        width: '100%'
    },
    btn2: {
        margin: '5px'
    },
    btn3: {
        margin: '5px'
    },
    techStackImg: {
        width: '50px'
    },
    description1: {
        minHeight: 60
    }
}));

export default function ProgramEach(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.img}
            />
            <CardContent className={classes.cardContent}>
                <Typography className={classes.title} variant="h3" component="p">{props.title}</Typography>
                <Box className={classes.btnGrp}>
                    {
                        props.techStackImg.map((item, index) => {
                            return (<Button className={classes.btn}>
                                <img className={classes.techStackImg} src={item}></img> </Button>)
                        })
                    }
                </Box>
                <hr></hr>
                <Typography className={classes.description1} variant="subtitle1" component="p">
                    {props.description1}
                </Typography>
                <hr></hr>
                <Grid className={classes.BottomButtons}>
                    <BottomNavigation>
                        <Button
                            variant="outlined" href={props.githubLink}
                            className={classes.btn2} fullWidth >
                            GitHub
                        </Button>
                    </BottomNavigation>
                    <BottomNavigation>
                        <Button
                            disabled={props.skipLiveDemo}
                            variant="outlined" href={props.liveDemoLink}
                            className={classes.btn3} fullWidth >
                            Demo
                        </Button>
                    </BottomNavigation>
                </Grid>
            </CardContent>
        </Card >
    );
}
