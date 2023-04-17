import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png';
import CartWidget from '../CartWidget/CartWidget.jsx';


const Navbar = () => {
    return(
        <div className="subliNav">
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
         <div className="container-fluid ">
    <a className="navbar-brand" href="#"> <img src={logo} height="40px" width="40px"></img>Sublizone</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse   navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto  my-2 my-lg-0 navbar-nav-scroll" style-loader="--bs-scroll-height: 100px;">
        <li className="nav-item dropdown  ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown" >
            <li><a className="dropdown-item  " href="#" >Tazas</a>
            </li>
            <li><a className="dropdown-item" href="#">Remeras</a></li>
            <li><a className="dropdown-item" href="#">Bolsitas de tela</a></li>
            <li><a className="dropdown-item" href="#">Souvenir</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Otros</a></li>
          </ul>
        </li>
      </ul>
      <CartWidget></CartWidget>
    </div>
  </div>
</nav>
</div>

    )
}


export default Navbar;