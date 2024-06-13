import React from 'react';

import reactIcon from 'images/reactIcon.png';
import htmlIcon from 'images/htmlIcon.png';
import cssIcon from 'images/cssIcon.png';
import sassIcon from 'images/sassIcon.png';
import gitIcon from 'images/gitIcon.png';
import javascriptIcon from 'images/javascriptIcon.png';

import Skill from './Skill';
import 'styles/components/skills.sass'

const Skills = () => {

    const technologies =  [
        {
            id: 1,
            progress: 90,
            text: "HTML",
            image: htmlIcon
        },
        {
            id: 2,
            progress: 80,
            text: "CSS",
            image: cssIcon
        },
        {
            id: 3,
            progress: 70,
            text: "JavaScript",
            image: javascriptIcon
        },
        {
            id: 4,
            progress: 80,
            text: "Sass / Scss",
            image: sassIcon
        },
        {
            id: 5,
            progress: 60,
            text: "ReactJs",
            image: reactIcon
        },
        {
            id: 6,
            progress: 90,
            text: "Git / Github",
            image: gitIcon
        },
        {
            id: 7,
            progress: 40,
            text: "Vtex IO",
            image: cssIcon
        },
    ]

    return(
        <section id='skills' className='container container-skills hidden'>
            <h3 className='title-container'>Tecnologias<hr /></h3>
            <div className='cards'>
                {technologies.map(technology =>
                    <Skill
                        key={technology.id}
                        progress={technology.progress}
                    >
                            {technology.text}
                    </Skill>
                )}
            </div>
        </section>
    )
}

export default Skills;
