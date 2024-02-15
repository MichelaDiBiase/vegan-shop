function Header() {
    return (
      <div className="container my-5 text-center" style={{ maxWidth: '750px' }}>
        <div>
          <h1>Shop Online Prodotti Vegani</h1>
        </div>
        <p className="lead">
          Alimenti Vegan, Vegetariani e Biologici nel rispetto della terra e di tutti i suoi abitanti.
        </p>
        <button type="button" className="btn btn-outline-success">
          Contattaci
        </button>
      </div>
    );
  }
  
  export default Header;