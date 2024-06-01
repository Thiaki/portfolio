import React from 'react';

import 'styles/components/mainBanner.sass'
import imageGitHub from 'images/github.png'
import imageWhatsapp from 'images/whatsapp.png'
import imageLinkedin from 'images/linkedin.png'
import imageEmail from 'images/email.png'

const MainBanner = () => {

    return (
        <section className='container-banner'>
            <h2> <span className='dev'>DES</span>ENVOLVEDOR <br /> <span className='front'>FRONT-END</span> </h2>
            <div className='social-icons'>
                <Items src={imageGitHub} name='github' link={"https://github.com/Thiaki"} />
                <Items src={imageWhatsapp} name='whatsapp' link={"https://wa.me/5511950868938"} />
                <Items src={imageLinkedin} name='linkedin' link={"https://www.linkedin.com/in/eduardo-thiaki-yoshida-252509219/"} />
                <Items src={imageEmail} name='email' link={"mailto:thiakiyoshida@gmail.com"} />
            </div>
        </section>
    )
}

const Items = (props) => {
    return (
        <a href={props.link} rel="noreferrer" target="_blank"> <img src={props.src} alt={props.name} /> </a>
    )
}

export default MainBanner
