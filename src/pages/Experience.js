import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import Choices from '../components/Choices'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ControlledExpansionPanels from '../components/ControlledExpantionPedal';


export default class Program extends Component {
    render() {
        return (
            <div id="" style={{ margin: '7vw' }}>
                <hr></hr>
                <Box my={3} >
                    <Typography align="center" variant="h2" component="h1"> Experience </Typography>
                </Box>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <ControlledExpansionPanels style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}  ></ControlledExpansionPanels>
            </div>
        )
    }
}
