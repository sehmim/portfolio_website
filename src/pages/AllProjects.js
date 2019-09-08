import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core';
export default class AllProjects extends Component {
    render() {
        return (
            <div>
                <br />
                <hr></hr>
                <Box my={3} >
                    <Typography align="center" variant="h2" component="h1"> Projects </Typography>
                </Box>
                <hr></hr>
            </div>
        )
    }
}
