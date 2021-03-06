import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Resume = ({
    load,
    nav,
    data,
}) => {

    return (
        <ReactCSSTransitionGroup
            transitionName="drop"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
        >
            {nav === 'resume' && load && (
                <div
                    id={"resume"}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, .5)',
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, .0)',
                        borderWidth: 3,
                        borderStyle: 'solid',
                        position: 'absolute',
                        left: window.innerWidth < 900 ? '0%' : '15%',
                        top: '10%',
                        height: '90%',
                        width: window.innerWidth < 900 ? '100%' : '70%',
                        borderRadius: 30,
                        padding: 20,
                        overflowX: 'hidden'
                    }}
                >

                    <div className="row work">
                        <div className="three columns header-col">
                            <h1>
                                <span className="glow">Work</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            {data.work.map(work => (
                                <div key={work.company}>
                                    <p style={{ fontSize: 20, marginBottom: -10 }}>{work.company}</p>
                                    <p className="info">
                                        {work.title}{' '}
                                        <span>&bull;</span>{' '}
                                        <em className="date">{work.years}</em>
                                    </p>
                                    <p>{work.description}</p>
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row education">
                        <div className="three columns header-col">
                            <h1 className="resume">
                                <span className="glow">Education</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    {data.education.map(education => (
                                        <div key={education.school}>
                                            <p style={{ fontSize: 20, marginBottom: -10 }}>{education.school}</p>
                                            <p className="info">
                                                {education.degree}
                                            </p>
                                            <p>{education.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1 className="resume glow">
                                <span>Skills</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <span style={{ color: 'white' }}>{data.skillmessage}</span>
                        </div>
                    </div>
                </div>
            )
            }
        </ReactCSSTransitionGroup >
    );
};

export default Resume;
