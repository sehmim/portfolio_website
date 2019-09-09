import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core'

import Gallery from 'react-grid-gallery';

import YouTube from 'react-youtube';

class MyYouTube extends React.Component {
    render() {
        const opts = {
            height: '810',
            width: '1140',

        };

        return (
            <div >
                <YouTube
                    videoId="gqNiIcwv1q0"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}


const IMAGES =
    [{
        src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/67689549_2214658578826165_2332131090988269568_o.jpg?_nc_cat=102&_nc_oc=AQnUUcVgWM2lMVNzevzTxzg8gkgNwBXMHpFTjEttD9Z2S-vo2JnHkOy4qROWDv1YDFU&_nc_ht=scontent-lax3-1.xx&oh=c0d74e298e6df978d196047221cb1bce&oe=5DF91CC5",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/67689549_2214658578826165_2332131090988269568_o.jpg?_nc_cat=102&_nc_oc=AQnUUcVgWM2lMVNzevzTxzg8gkgNwBXMHpFTjEttD9Z2S-vo2JnHkOy4qROWDv1YDFU&_nc_ht=scontent-lax3-1.xx&oh=c0d74e298e6df978d196047221cb1bce&oe=5DF91CC5",
        thumbnailWidth: 420,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/69305580_2228801614078528_5154683323318009856_n.jpg?_nc_cat=102&_nc_oc=AQlYnrBoJzXgs0LPImP7JrE8p8KxdScs-Sl6m2weydcBzgOSR7_ZfI0ldDUWa7oGnHg&_nc_ht=scontent-lax3-1.xx&oh=4eee031f29ca480023ee5b9a29bd7293&oe=5E01DA59",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/69305580_2228801614078528_5154683323318009856_n.jpg?_nc_cat=102&_nc_oc=AQlYnrBoJzXgs0LPImP7JrE8p8KxdScs-Sl6m2weydcBzgOSR7_ZfI0ldDUWa7oGnHg&_nc_ht=scontent-lax3-1.xx&oh=4eee031f29ca480023ee5b9a29bd7293&oe=5E01DA59",
        thumbnailWidth: 180,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/48935566_2078376509121040_681165990486081536_n.jpg?_nc_cat=100&_nc_oc=AQm2HnAmxbBfeZgv2Saeuq7I_nYpNbYulj3FW4A3ZqjCYHC8nXLDhZDWMZDeN8_xiAc&_nc_ht=scontent-lax3-1.xx&oh=d24854dff309b447236f8657b9362713&oe=5E0095D7",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/48935566_2078376509121040_681165990486081536_n.jpg?_nc_cat=100&_nc_oc=AQm2HnAmxbBfeZgv2Saeuq7I_nYpNbYulj3FW4A3ZqjCYHC8nXLDhZDWMZDeN8_xiAc&_nc_ht=scontent-lax3-1.xx&oh=d24854dff309b447236f8657b9362713&oe=5E0095D7",
        thumbnailWidth: 220,
        thumbnailHeight: 212
    },

    {
        src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/39409199_1998340123791346_6133328266372579328_n.jpg?_nc_cat=109&_nc_oc=AQlNDLOtnYOuezzRhWI3ajEOKz_4CIMtIkSpO0EvwlqouDYyoZBZcpZnpTdvn2R3hko&_nc_ht=scontent-lax3-1.xx&oh=d6c05e599f13dfa106884e92c56860ef&oe=5DF5A92F",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/39409199_1998340123791346_6133328266372579328_n.jpg?_nc_cat=109&_nc_oc=AQlNDLOtnYOuezzRhWI3ajEOKz_4CIMtIkSpO0EvwlqouDYyoZBZcpZnpTdvn2R3hko&_nc_ht=scontent-lax3-1.xx&oh=d6c05e599f13dfa106884e92c56860ef&oe=5DF5A92F",
        thumbnailWidth: 220,
        thumbnailHeight: 212
    },
    {
        src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/20663932_1798088977149796_7640268689387301706_n.jpg?_nc_cat=111&_nc_oc=AQkYqOdeEXYWACCv3PrtIzxut3_B9kyRDPXyVQsp6-OZInFHtqGI2LWNpU1h7AsX9n8&_nc_ht=scontent-lax3-1.xx&oh=6698f16058507664682d6369a3ebe923&oe=5E04306E",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/20663932_1798088977149796_7640268689387301706_n.jpg?_nc_cat=111&_nc_oc=AQkYqOdeEXYWACCv3PrtIzxut3_B9kyRDPXyVQsp6-OZInFHtqGI2LWNpU1h7AsX9n8&_nc_ht=scontent-lax3-1.xx&oh=6698f16058507664682d6369a3ebe923&oe=5E04306E",
        thumbnailWidth: 220,
        thumbnailHeight: 212
    },
    {
        src: "https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/15723782_1689288114696550_3922181713405829773_o.jpg?_nc_cat=100&_nc_oc=AQmiNhTM8GpyrEp6Ae18ylSlF5m7uaeBKQhd0o4W3yDxsyHItfv5aw3H2ltJMY0h9BI&_nc_ht=scontent-lax3-1.xx&oh=350b8af34b498d8cdca9723c31cdef1e&oe=5DC763E6",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/15723782_1689288114696550_3922181713405829773_o.jpg?_nc_cat=100&_nc_oc=AQmiNhTM8GpyrEp6Ae18ylSlF5m7uaeBKQhd0o4W3yDxsyHItfv5aw3H2ltJMY0h9BI&_nc_ht=scontent-lax3-1.xx&oh=350b8af34b498d8cdca9723c31cdef1e&oe=5DC763E6",
        thumbnailWidth: 420,
        thumbnailHeight: 412
    },
    {
        src: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/45487215_2044534045838620_1960330113069350912_o.jpg?_nc_cat=105&_nc_oc=AQl9i5diEsz-vng73OMUUQ8dATBw-xtlVbWtlKa-zaB_2ceD9GRIC4TYe573dCK0HIo&_nc_ht=scontent-lax3-1.xx&oh=02cb06a5108ab8f85b823212d1861dd3&oe=5DF87773",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/45487215_2044534045838620_1960330113069350912_o.jpg?_nc_cat=105&_nc_oc=AQl9i5diEsz-vng73OMUUQ8dATBw-xtlVbWtlKa-zaB_2ceD9GRIC4TYe573dCK0HIo&_nc_ht=scontent-lax3-1.xx&oh=02cb06a5108ab8f85b823212d1861dd3&oe=5DF87773",
        thumbnailWidth: 520,
        thumbnailHeight: 212
    },
    {
        src: "",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/31500033_1911484422476917_7331522003339313152_n.jpg?_nc_cat=100&_nc_oc=AQmstwrevGWRxykvvgX9XtxW1oF3TFwv4ZCJ9GuMJRZmc6BpS-lJ_eygIQAZyv5OzOg&_nc_ht=scontent-lax3-1.xx&oh=cddea28c0df88a3ccc3c77e8e20bd9bb&oe=5E032C3D",
        thumbnailWidth: 520,
        thumbnailHeight: 212
    },

    {
        src: "https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/20746274_1799684416990252_6203196008668402378_o.jpg?_nc_cat=104&_nc_oc=AQmTiFYdVk5O0hj_yl9PI_GtEfx9yPfATd4o7cm53Th3JP2H9gwv6Lmgb7MD33k_o5c&_nc_ht=scontent-lax3-1.xx&oh=39d18fa89b2d2d7465c1bc0d454db86d&oe=5DF8A01C",
        thumbnail: "https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/20746274_1799684416990252_6203196008668402378_o.jpg?_nc_cat=104&_nc_oc=AQmTiFYdVk5O0hj_yl9PI_GtEfx9yPfATd4o7cm53Th3JP2H9gwv6Lmgb7MD33k_o5c&_nc_ht=scontent-lax3-1.xx&oh=39d18fa89b2d2d7465c1bc0d454db86d&oe=5DF8A01C",
        thumbnailWidth: 520,
        thumbnailHeight: 212
    }
    ]





export default class Band extends Component {
    render() {
        return (
            <div style={{ margin: '7vw' }}>
                <hr></hr>
                <Box my={3} >
                    <Typography align="center" variant="h2" component="h1"> My Band </Typography>
                </Box>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                <Gallery images={IMAGES} />
                <MyYouTube />

            </div>
        )
    }
}
