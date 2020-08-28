import React ,{Component}from 'react';
import Bounce from 'react-reveal/Bounce';
import './Custom.css';


export default class Heroslider extends Component {
	render(){
		return(
			<>
				<section className="herosilder">
					<div className="container">
						<div className="textContent">
							<Bounce left duration ={3000}>
								<h1>Welcome</h1>
							</Bounce>
							<Bounce right duration ={3000}>
								<h1>We can Help and Explore you</h1>
							</Bounce>
						</div>	
					</div>
				</section>
			</>			
		);
	}
}






