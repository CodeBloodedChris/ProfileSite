import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Home = ({
    setLoad,
    load,
    nav,
    data,
    globe
}) => {
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="spicy"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {nav === 'home' && load && globe && (
                    <div
                        id="about"
                        onClick={() => setLoad(false)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, .75)',
                            color: 'white',
                            position: 'absolute',
                            left: '15%',
                            top: '10%',
                            height: '80%',
                            width: '70%',
                            borderRadius: 30,
                            padding: 20,
                            textAlign: 'center',
                        }}
                    >
                        <br></br>
                        <h1>{data.name}</h1>
                        <br></br>
                        <h2 className="shimmer">{data.occupation}</h2>
                        <h3>{data.description}</h3>
                        <br></br><br></br>
                        <h4>Security Clearance Level: Secret</h4>
                        <ul className="social">
                            {data.social.map(network => (
                                <li key={network.name}>
                                    <a href={network.url}>
                                        <i className={network.className}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </ReactCSSTransitionGroup>
        </div >
    );
};

export default Home;
