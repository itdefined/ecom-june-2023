import {Link, Outlet} from "react-router-dom"
import logo from './logo.svg'
function Layout() {
    return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" style={{width:"60px"}}/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/clothes">Clothes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/electronics">Electorincs</Link>
                </li>
            </ul>
            </div>
        </div>
      </nav>









        <Outlet/>
      </>
    );
  }
  export default Layout;
  