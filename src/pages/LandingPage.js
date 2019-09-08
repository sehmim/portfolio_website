import React, { Component } from 'react'

// Online Components
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// Styles
import "../styles/landings-page.sass";

// My Components


// asssets
const MYFACE = require('../assets/landingpage-img.jpeg')
export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page-body" >
                <div className="main-material-body" >
                    {/* <Typography style={{ margin: '20px' }} align="center" variant="h3" component="p"> Sehmim Al </Typography> */}
                    {/* <img className="image-my-face" src={MYFACE}></img> */}
                    <ul className="item-list">

                    </ul>
                </div>
            </div>
        )
    }
}
