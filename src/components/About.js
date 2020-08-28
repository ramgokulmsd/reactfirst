import React,{Component} from 'react';
import {Row, Col } from 'react-bootstrap';
import Title from './Title';
import about from './images/about.jpg';
import './Custom.css';

export default class About extends Component {
	render(){
		return(
				<>
					<section id="about">
						<div className="container">
							<div className="inside">
								<Title title="About " color=""/>
							</div>	
							<div className="content">
								<Row>
									<Col lg={6}>
										<p>Front End Technologies in the Developer “Stack” The front end stack is made up of many 
										different languages and libraries. While these vary from application to application, 
										there are only a few generic languages understood by all web browsers.These three main
										front-end coding languages are HTML, CSS and JavaScript.
										</p>
										<p>In the world of software development, 
										hat’s built falls into two categories everything that’s seen by the user and the processes 
										happening in the background. What we see and interact with as the visitors of a website, or as 
										the end user of a mobile app, is considered front-end technology.
										</p>
									</Col>
									<Col lg={6}>
										<div className="about">
											<img src={about} alt="working" />
										</div>
									</Col>
								</Row>
							</div>
						</div>	
					</section>
				</>
		);
	}
}




