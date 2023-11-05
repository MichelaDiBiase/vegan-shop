import logo from '../img/logo.jpg';

function Navbar(){
    return(<nav className="navbar navbar-light" style={{ backgroundColor: 'darkseagreen' }}>
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="" width="30" height="24" />
        Vegan shop
      </a>
    </div>
  </nav>
    );
}
export default Navbar;