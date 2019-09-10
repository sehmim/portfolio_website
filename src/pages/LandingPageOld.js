import React, { Component } from 'react';
// import '../App.sass';
import '../styles/landingpage.sass';
import '../styles/hamburger.sass';
import '../styles/media_Queries/tv.sass';

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Hamburger from "../components/Hamburger";

const socialData = [
  { title: 'linkedin', href: 'https://www.linkedin.com/in/sehmim-haque/', src: require('../assets/linkedin.png') },
  { title: 'github', href: 'https://github.com/sehmim2', src: require('../assets/github.png') },
  { title: 'stackoverflow', href: 'https://stackoverflow.com/users/9531113/sehmim-al-haque', src: require('../assets/stack.jpg') },
]
class LandingPage extends Component {
  constructor() {
    super();
    this.myElement = null;
    this.myTween = null;
  }
  render() {

    return (
      <div className="landingpage">
        {/* NAME */}
        <div className="header-div" >
          <h1 className="header-main" >
            Sehmim Al
            </h1>
          <h2 className="header2" >
            Software Developer
          </h2>
        </div>
        {/* IMAGE */}
        <div className="circle-div">
          <img src={require('../assets/landingpage-img.jpeg')} className="circle"></img>
        </div>

        {/* <div className="qualities">
        ♦<AnchorLink className="qualities-each" href="#projects" >     
            ♦ Web Developer ♦
          </AnchorLink> 
          <AnchorLink className="qualities-each" href="#projects" >     
          ♦ Artsy Guy ♦
          </AnchorLink> 
          <AnchorLink className="qualities-each" href="#projects" >     
          ♦ Musician ♦
          </AnchorLink> 
        ♦</div> */}

        <div className="qualities-sub">Please, do have a look around</div>
        <div className="who" >
          {/* THREE */}
          <div className="links" >
            {
              socialData.map((item, index) => {
                return (
                  <a key={index} href={item.href} >
                    <img className="links-items" src={item.src} ></img>
                  </a>
                )
              })
            }
          </div>
        </div>


        <Hamburger />
      </div>
    );
  }
}

export default LandingPage;
