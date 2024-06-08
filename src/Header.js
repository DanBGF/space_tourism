import { memo } from 'react';
import logo from '../src/img/shared/logo.svg';

function Header(){
  return( <header>
  <nav className='navbar'>
    <img src={logo} alt='logon' className='navbar-brand'/>
    

    <div className=''>
    <hr className='d-none d-xl-block'/>
      <ul className='navbar-nav container-fluid flex-row h-100 justify-content-center'>
      
        <li className='navbar-item nactive'>
          <a href='/'>
          <button className='h-100 bg-transparent border-0 text-white'>
            <span>00</span>Home
          </button>
          </a>
          
        </li>

        <li className='navbar-item nactive'>
          <a href='/destination'>
            <button className='h-100 bg-transparent border-0 text-white'>
              <span>01</span>Destination
            </button>
          </a>
        </li>

        <li className='navbar-item nactive'>
          <a href='/crew'>
            <button href className='h-100 bg-transparent border-0 text-white'>
              <span>02</span>Crew
            </button>
          </a>
         
        </li>

        <li className='navbar-item nactive'>
          <a href='technology'>
            <button className='h-100 bg-transparent border-0 text-white'>
              <span>03</span>Technology
            </button>
          </a>
          
        </li>
        </ul>
      </div>
    </nav>
</header>
);}

export default memo(Header);