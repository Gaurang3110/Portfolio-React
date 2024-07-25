import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about'className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aut illum, placeat, dignissimos provident in cupiditate eligendi deleniti quos quis, quas rem iste?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis eveniet assumenda commodi, fugit sed officia quod id rerum ratione, veritatis, sequi inventore aliquam eaque nam?</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>Web-Dev</p><hr style={{width:'50%'}}/>
                </div>
                <div className="about-skill">
                    <p>AI-ML</p><hr style={{width:'70%'}}/>
                </div>
                <div className="about-skill">
                    <p>App-Dev</p><hr style={{width:'40%'}}/>
                </div>
                <div className="about-skill">
                    <p>CP</p><hr style={{width:'80%'}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
