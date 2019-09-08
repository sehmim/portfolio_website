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
                    {/* <Typography align="center" variant="h2" component="p"> Sehmim Al </Typography>
                    <img className="image-my-face" src={MYFACE}></img>
                    <h1 className="title-sub" > Please Have a Look Around</h1>
                    <ul className="item-list">
                        <li className="item-each">
                            <a>
                                <img></img>
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>
        )
    }
}
