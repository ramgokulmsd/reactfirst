import React ,{Component} from 'react';
import { Media} from 'react-bootstrap';
import Title from './Title';
import avatar from './images/avatar.png';
import './Custom.css';

export default class Mediapartners extends Component {
    render() {
            return (
                  <section id="mediapartners">
                        <div className="container">     
                              <div className="inside-container">
                                    <Title title="Mediapartner" color=""/>
                              </div>  
                              <div className="partner">   
                                    <Media >
                                          <Media>
                                          <img src={avatar} alt="ads"/>
                                          </Media>
                                          <Media body className="products">
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                                          standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                          </Media>
                                    </Media>
                                     <Media >
                                          <Media>
                                          <img src={avatar} alt="ads"/>
                                          </Media>
                                          <Media body className="products">
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                                          standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                          </Media>
                                    </Media>
                                     <Media >
                                          <Media>
                                          <img src={avatar} alt="ads"/>
                                          </Media>
                                          <Media body className="products">
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                                          standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                          </Media>
                                    </Media>
                              </div>
                        </div>
                  </section> 
            );
      }
}


