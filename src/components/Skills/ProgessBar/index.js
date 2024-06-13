import React, {useEffect, useState, useRef} from 'react';

const ProgressBar = ( {progress} ) => {
    
    const [currentProgress, setCurrentProgress] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        let start = 0;
                        const interval = setInterval(() => {
                            if (start >= progress) {
                                clearInterval(interval);
                                setHasAnimated(true);
                            } else {
                                start++;
                                setCurrentProgress(start);
                            }
                        }, 20);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, [progress, hasAnimated]);


    return (
        <>
            <div className='progressBar' ref={progressBarRef} >
                <div className='completedProgressBar' style={{width: `${currentProgress}%`}}>
                    <p className='text-percentage'>{currentProgress}%</p>
                </div>
            </div>
        </>
    )

};

export default ProgressBar;
