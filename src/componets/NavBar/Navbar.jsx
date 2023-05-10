import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png';
import CartWidget from '../CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="subliNav">
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid ">
            <a className="navbar-brand subliTitle" href="#"> <img src={logo} height="50px" width="50px"></img><Link to="/">SubliZone</Link></a>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse   navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto  my-2 my-lg-0 navbar-nav-scroll" style-loader="--bs-scroll-height: 100px;">
            <li className="nav-item dropdown  ">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
          <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown" >
            <li><Link className="dropdown-item" to="/category/tazas">Tazas</Link></li>
            <li><Link className="dropdown-item" to="/category/remeras">Remeras</Link></li>
            <li><Link className="dropdown-item" to="/category/bolsitasDeTela">Bolsitas de tela</Link></li>
            <li><Link className="dropdown-item" to="/category/llaveros">Llaveros</Link></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><Link className="dropdown-item" to="/category/otros">Otros</Link></li>
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