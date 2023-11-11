import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <nav>
      <div className="navbar">
        <Link className="navbar-brand" to='/'>
          <img className="logo" src={logo} alt="" width="65" height="45" />
          <span className="title"><b>Vegan Shop</b></span>
        </Link>
        <span className="buttonsNavbar">
          <Link className="navButton" to='/'>
            <button type="button" className="btn btn-success">
              Home
            </button>
          </Link>
          
          <Link className="navButton" to='https://youtu.be/dQw4w9WgXcQ?feature=shared'>
            <button type="button" className="btn btn-success">
              Chi siamo
            </button>
          </Link>
            
          <Link className="navButton" to='#'>
            <button type="button" className="btn btn-success">
              Contattaci
            </button>
          </Link>
            
          <Link className="navButton" to='#'>
            <button type="button" className="btn btn-success">
              Registrati
            </button>
          </Link>
        </span>
      </div>
    </nav>
    );
}
export default Navbar;