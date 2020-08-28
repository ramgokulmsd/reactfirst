import React from 'react'
import ProgressBar from 'react-customizable-progressbar'
import { Row,Col } from 'react-bootstrap';
import Title from './Title';

function Tech(){
    return(
        <section id="softskills">
            <div className="container">
                <div className="inside">
                    <Title title="skills" color=""/>
                </div>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className="round">
                            <ProgressBar radius={80} progress={85} initialAnimation initialAnimationDelay={1800} 
                            strokeColor="#0fabbc" transition=".60s ease">
                            <div className="indicator">
                            <div>85%</div>
                            </div>
                            <h2>html/css</h2>
                            </ProgressBar>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="round">
                            <ProgressBar radius={80} progress={70}    initialAnimation initialAnimationDelay={1800}  
                            strokeColor="#383e56"  transition=".60s ease">
                            <div className="indicator">
                            <div>70%</div>
                            </div>
                            <h2>JQuery</h2>
                            </ProgressBar>
                    </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="round">
                            <ProgressBar radius={80} progress={80}   initialAnimation initialAnimationDelay={1800}  
                            strokeColor="#f69e7b" transition=".60s ease">
                            <div className="indicator">
                            <div>80</div>
                            </div>
                            <h2>Bootstrap</h2>
                            </ProgressBar>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="round">
                            <ProgressBar radius={80} progress={60}  initialAnimation initialAnimationDelay={1800}
                            transition=".60s ease">
                            <div className="indicator">
                            <div>60</div>
                            </div>
                            <h2>Reactjs</h2>
                            </ProgressBar>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Tech;





