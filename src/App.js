import './Custom_bootstrap/custom.bootstrap.min.css';
import logo from '../src/img/shared/logo.svg';


function App() {
  return (
    <div>
      <header>
        <nav className='navbar'>
          <img src={logo} alt='logon' className='navbar-brand'/>
          
          <div>
          <hr/>
            <ul className='navbar-nav container-fluid flex-row h-100 justify-content-center'>
            
              <li className='navbar-item active'>
                <button className='navbar-link h-100 bg-transparent border-0 text-white'>
                  <span>00</span>Home
                </button>
              </li>

              <li className='navbar-item nactive'>
                <button className='navbar-link h-100 bg-transparent border-0 text-white'>
                  <span>01</span>Destination
                </button>
              </li>

              <li className='navbar-item nactive'>
                <button className='navbar-link h-100 bg-transparent border-0 text-white'>
                  <span>02</span>Crew
                </button>
              </li>

              <li className='navbar-item nactive'>
                <button className='navbar-link h-100 bg-transparent border-0 text-white'>
                  <span>03</span>Technology
                </button>
              </li>
              </ul>
            </div>
          </nav>
      </header>
      
    </div>
  );
}

export default App;
