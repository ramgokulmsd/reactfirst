import React,{Component} from 'react';
import Title from './Title';
import {Row,Col,Form,Button } from 'react-bootstrap';
import Man from './images/Man.png';
import Man2 from './images/Man2.png';
import Bounce from 'react-reveal/Bounce';
import './Custom.css'


export default class  Contact extends Component {
      render(){
            return(
                  <section id="contact-form">
                        <div className="container"> 
                              <div className="inside-container">
                                    <Title title="Contact " color=""/>
                              </div>    
                              <Row>
                                    <Col lg={6} md={6} sm={12}>
                                          <div className="man">
                                                <Bounce>
                                                      <img src={Man} alt="Logo" />
                                                </Bounce>
                                          </div>
                                          <div className="man2">
                                                <img src={Man2} alt="Logo"/>
                                          </div>
                                    </Col>
                                    <Col md={6} sm={8} >
                                          <Form>
                                                <Form.Group controlId="formGroupText">
                                                      <Form.Label>Name:</Form.Label>
                                                      <Form.Control type="text" placeholder="Enter Name" />
                                                </Form.Group>
                                                <Form.Group controlId="formGroupEmail">
                                                      <Form.Label>Email:</Form.Label>
                                                      <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>
                                                <Form.Group >
                                                      <Form.Label>Comments:</Form.Label>
                                                      <Form.Control as="textarea" rows="4" placeholder="Leave your Comments"/>
                                                </Form.Group>
                                                <Button className="btn" variant="primary" type="submit">
                                                      Message
                                                </Button> 
                                          </Form>
                                    </Col>
                              </Row>
                        </div>                 
                  </section>
            );
      }
}





