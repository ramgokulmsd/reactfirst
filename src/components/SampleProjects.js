
import React, {Component} from 'react';
import { Card,Row,Col} from 'react-bootstrap';
import cardimage1 from './images/cardimage1.jpg';
import cardimage2 from './images/cardimage2.jpg';
import cardimage3 from './images/cardimage3.jpg';
import Title from './Title';
import './Custom.css';


export default class  SampleProjects extends Component {
      render(){
            return(
                  <section id="project">
                        <div className="container">
                              <div className="inside">
                                    <Title title="Projects" color=""/>
                              </div>    
                              <div ClassName="projectCard">
                                    <Row>
                                          <Col lg={4}  md={6} sm={12} xs={12}>
                                                <Card>
                                                <img src={cardimage1} alt="Project1" />
                                                <Card.Body>
                                                <Card.Title>HTML/CSS</Card.Title>
                                                <Card.Text>
                                                SampleProjects Project developed by Bootrap framework.
                                                </Card.Text>
                                                <Card.Link href="https://gokulbootstrapsample.netlify.app">click Here</Card.Link>
                                                </Card.Body>
                                                </Card>
                                          </Col>
                                          <Col lg={4} md={6} sm={12} xs={12}>
                                                <Card>
                                                <img src={cardimage2} alt="Project2  "/>
                                                <Card.Body>
                                                <Card.Title>Reactjs</Card.Title>
                                                <Card.Text>
                                                SampleProjects Project developed by Reactjs framework.
                                                </Card.Text>
                                                <Card.Link href="https://portfoliogokul.netlify.app">Click Here</Card.Link>
                                                </Card.Body>
                                                </Card>
                                          </Col>
                                          <Col lg={4} md={6} sm={12} xs={12}>
                                                <Card>
                                                <img src={cardimage3} alt="Project2  "/>
                                                <Card.Body>
                                                <Card.Title>Reactjs</Card.Title>
                                                <Card.Text>
                                                SampleProjects Project developed by Reactjs framework.
                                                </Card.Text>
                                                <Card.Link href="https://reactsamplegokul.netlify.app">Click Here</Card.Link>
                                                </Card.Body>
                                                </Card>
                                          </Col>
                                    </Row>
                              </div>
                        </div>
                  </section>
            )
      }
}




