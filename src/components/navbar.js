import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <nav>
      <div className="header">
        <Link className="navbar-brand" to='/'>
          <img className="logo" src={logo} alt="" width="65" height="45" />
          <span className="title"><b>Vegan Shop</b></span>
        </Link>
        <span className="navbar-buttons">
          <Link className="nav-button" to='/'>
            <button type="button" className="btn btn-success">
              Home
            </button>
          </Link>
          
          <Link className="nav-button" to='https://youtu.be/dQw4w9WgXcQ?feature=shared'>
            <button type="button" className="btn btn-success">
              Chi siamo
            </button>
          </Link>
            <Link className="nav-button" to='/Login'>
            <button type="button" className="btn btn-success">
              Accedi
            </button>
          </Link>        
          <span className="icon-cart">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 4c0-.6.4-1 1-1h1.5c.5 0 .9.3 1 .8L7.9 6H19a1 1 0 0 1 1 1.2l-1.3 6a1 1 0 0 1-1 .8h-8l.2 1H17a3 3 0 1 1-2.8 2h-2.4a3 3 0 1 1-4-1.8L5.7 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
              </svg>
              <span>0</span>
          </span>
          </span>
      </div>
    </nav>
    );
}
export default Navbar;