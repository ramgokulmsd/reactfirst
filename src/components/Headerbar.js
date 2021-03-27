import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Headerbar extends React.Component {
  render(){
  return (
    <>
      <div className="heading">
        <div className="container-fluid">
          <Navbar bg="light" expand="lg" fixed="top" >
            <h2>GOKULRAM.M</h2>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <a href="#home">Home</a>
                <a href="#about">Aboutus</a>
                <a href="#project">Projects</a>
                <a href="#contact-form">contact</a>
                <a href="#softskills">skills</a>
                <a href="#socialmedia">socialMedia</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
}
}

export default Headerbar;



