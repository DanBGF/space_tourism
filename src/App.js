import './Custom_bootstrap/custom.bootstrap.min.css';

import {Home, Destination, Header, Crew, Technology} from './components';
import { Component} from 'react';


function Main (){

  switch(window.location.pathname){
    case("/destination"):
      return(<Destination/>)
    case("/crew"):
      return(<Crew/>)
    case("/technology"):
      return(<Technology/>)
    default:
      return(<Home/>)
    
  }

    
    
  }

  function getPage(){
    switch(window.location.pathname){
      case("/destination"):
      return(1)
    case("/crew"):
      return(2)
    case("/technology"):
      return(3)
    default:
      return(0)
    }
  }

class App extends Component{

 
  componentDidMount(){

    let li = Array.from(document.getElementsByClassName('navbar-item'));
    let page = getPage();
    li[page].classList.remove('nactive');
    li[page].classList.add('active');

  }
  


  render(){
    return ( 
      <div id='render' className='h-100'>
        
        <Header/>
        <Main/>
        
      </div>
    );
  }
    
  } 
  


export default App;
