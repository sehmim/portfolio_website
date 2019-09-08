import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core';

import { Websites, Mobile, OpenSource, Others } from "../utils/ProjectsData";
import ProgramEach from '../components/ProgramEach';

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

                <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                    {
                        Websites.map((item, index) => {
                            return (
                                <ProgramEach title={item.title} img={item.img} techStackImg={item.techStackImg} description1={item.description} description2={item.description2} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink} skipLiveDemo={item.skipLiveDemo} />
                            )
                        })
                    }
                    {
                        Mobile.map((item, index) => {
                            return (
                                <ProgramEach title={item.title} img={item.img} techStackImg={item.techStackImg} description1={item.description} description2={item.description2} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink} skipLiveDemo={item.skipLiveDemo} />
                            )
                        })
                    }
                    {
                        OpenSource.map((item, index) => {
                            return (
                                <ProgramEach title={item.title} img={item.img} techStackImg={item.techStackImg} description1={item.description} description2={item.description2} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink} skipLiveDemo={item.skipLiveDemo} />
                            )
                        })

                    }

                    {
                        Others.map((item, index) => {
                            return (
                                <ProgramEach title={item.title} img={item.img} techStackImg={item.techStackImg} description1={item.description} description2={item.description2} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink} skipLiveDemo={item.skipLiveDemo} />
                            )
                        })

                    }
                </Box>
            </div>
        )
    }
}
