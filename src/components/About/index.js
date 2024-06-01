import React from 'react';

import 'styles/components/about.sass';
import imageMe from 'images/me.jpg';

const About = (props) => {
    return(
        <section id='about' className='container container-about'>
            <h3 className='title-container'> Sobre <hr /> </h3>
            <div className='about'>
                <div className='text-about'>
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className='image-about'>
                    <img src={imageMe} alt='Foto Perfil' className='profile-image' />
                </div>
            </div>
        </section>
    )
}

export default About;
