import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import Choices from '../components/Choices'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default class Program extends Component {
    render() {
        return (
            <div id="projects" style={{ margin: '7vw' }}>
                <hr></hr>
                <Box my={3} >
                    <Typography align="center" variant="h2" component="h1"> Projects </Typography>
                </Box>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                <Box mt={6} display="flex" justifyContent="space-around" flexWrap="wrap" >
                    <Choices />
                </Box>
                <Box p={0.0} m={0.0} display="flex" justifyContent="flex-end">
                    <Button variant="outlined" href="/projects"> See All...</Button>
                </Box>
            </div>
        )
    }
}
