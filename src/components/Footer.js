import React,{Component} from 'react';
import styled from 'styled-components';


export default class Footer extends Component {
  render(){
    return (
        <Contact>
          <section>
              <p>Designed and created Gokulram 2020</p>
          </section>
      </Contact>
    )
  }
}



const Contact = styled.section `

  background:#383e56;
  margin-top:20px;
  height:60px;


  p {
      text-align:center;
      color:#fff;
      font-size:18px;
      padding-top:15px;
  }
`