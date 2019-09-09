import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core'

export default class Blogs extends Component {
    render() {
        return (
            <div style={{ margin: '7vw' }}>
                <hr></hr>
                <Box my={3} >
                    <Typography align="center" variant="h2" component="h1"> Blogs </Typography>
                </Box>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                <img style={{ width: '280px' }} src="https://pics.me.me/wow-such-empty-18405293.png" ></img>
            </div>
        )
    }
}
