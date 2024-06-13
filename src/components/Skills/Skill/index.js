import React from 'react';

import ProgressBar from '../ProgessBar';

const Skill = (props) => {
    
    return (
        <div className='card'>
            <p>{props.children}</p>
            <ProgressBar progress={props.progress} />
        </div>
    )

};

export default Skill;
