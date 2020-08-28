import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import Title from './Title';

export default class Events extends Component {
        render(){
          return (
                  <section id="events">
                        <div className="container">
                              <div className="inside-container">
                                    <Title title="Events" color=""/>
                              </div> 
                              <div className="mainevent">
                                    <Table striped>
                                          <thead>
                                          <tr>
                                          <th>No</th>
                                          <th>EVENT</th>
                                          <th>DATE</th>
                                          <th>PLACE</th>
                                          </tr>
                                          </thead>
                                          <tbody>
                                          <tr>
                                          <th scope="row">1</th>
                                          <td>Made</td>
                                          <td>01-01-20</td>
                                          <td>India</td>
                                          </tr>
                                          <tr>
                                          <th scope="row">2</th>
                                          <td>Made</td>
                                          <td>01-01-20</td>
                                          <td>India</td>
                                          </tr>
                                          <tr>
                                          <th scope="row">3</th>
                                          <td>Made</td>
                                          <td>01-01-20</td>
                                          <td>India</td>
                                          </tr>
                                          <tr>
                                          <th scope="row">4</th>
                                          <td>Made</td>
                                          <td>01-01-20</td>
                                          <td>India</td>
                                          </tr>
                                          <tr>
                                          <th scope="row">5</th>
                                          <td>Made</td>
                                          <td>01-01-20</td>
                                          <td>India</td>
                                          </tr>
                                          </tbody>
                                    </Table>
                              </div>
                        </div>
                  </section> 
            );
      }
}
