import React, {Component} from 'react';
import Title from './Title';
import {Row,Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";



export default class Socialmedia extends Component {
	render(){
		return(
				<section id="socialmedia">
					<div className="container">
						<div className="inside">
							<Title title="Socialmedia " color=""/>
						</div>	
			 			<Row>
			    			<Col sm={12} lg={8}>
	      						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
	      						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
	      						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
	      						Lorem Ipsum has been the industry's standard dummy textLorem Ipsum is simply dummy 
	      						text of the printing and typesetting industy.Lorem Ipsum has been the industry's standard 
	      						dummy text
	      				 		</p>
   							</Col>
   							<Col sm={12} lg={4	}>
	      						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
	      						Lorem Ipsum has been the industry's standard dummy text </p>
	      						<div className="social-media">
               					 	<a href="https://linkedin.com/in/gokulram-m-3ab59018a">
                  						<FaLinkedin className="social" />
                				 	</a>
                				 	<a href="https://github.com/ramgokulmsd">
                  						<FaGithub className="social" />
                				 	</a>
                				 	<a href="mailto:gokulramcse@gmail.com ">
                                   		<FaEnvelope className="social" />
                                	</a>
                                	<a href="https://www.instagram.com/ramgokulmsd">
                                   		<FaInstagram className="social" />
                                	</a>
                                	<a href="https://twitter.com/GokulramHah">
                                  		<FaTwitter className="social" />
                                	</a>
              					</div>
   							</Col>
   						</Row>
   					</div>
				</section>
		)
	}
}
