import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import Choices from '../components/Choices'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const HEADER = {
    fontFamily: "Scotia_W_Headline",
    fontSize: '50px'
}
export default class Program extends Component {
    render() {
        return (
            <div id="catalogue" style={{ margin: '7vw' }}>
                <hr></hr>
                <Box my={3} >
                    <Typography style={HEADER} align="center" variant="h2" component="h1"> Projects </Typography>
                </Box>
                <hr></hr>
                <Box mt={6} display="flex" justifyContent="space-around" flexWrap="wrap" >
                    <Choices />
                </Box>
            </div>
        )
    }
}
