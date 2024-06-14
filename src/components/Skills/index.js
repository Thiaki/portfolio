import React from 'react';

import Skill from './Skill';
import 'styles/components/skills.sass'

const Skills = () => {

    const technologies =  [
        {
            id: 1,
            progress: 90,
            text: "HTML",
        },
        {
            id: 2,
            progress: 80,
            text: "CSS",
        },
        {
            id: 3,
            progress: 70,
            text: "JavaScript",
        },
        {
            id: 4,
            progress: 80,
            text: "Sass / Scss",
        },
        {
            id: 5,
            progress: 60,
            text: "ReactJs",
        },
        {
            id: 6,
            progress: 90,
            text: "Git / Github",
        },
        {
            id: 7,
            progress: 40,
            text: "Vtex IO",
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
