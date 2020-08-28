import React from 'react'; 
import Headerbar from './components/Headerbar';
import Heroslider from './components/Heroslider';
import About from './components/About';
import Contactit from './components/Contactit';
import Socialmedia from './components/Socialmedia';
import Mediapartners from './components/Mediapartners';
import Events from './components/Events';
import Tech from './components/Tech';
import SampleProjects from './components/SampleProjects';
import Footer from  './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	
	return (
		<>
			<Headerbar/>
			<Heroslider/>
			<About/>
			<SampleProjects/>	
			<Socialmedia/>
			<Contactit/>
			<Tech/>
			<Mediapartners/>
			<Events/>
			<Footer/>
		</>
	);
}
export default App;