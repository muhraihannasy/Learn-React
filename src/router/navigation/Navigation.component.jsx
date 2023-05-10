import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

// Images
import Logo from "../../assets/Logo.jpeg";

const Navigation = () => {
  return (
    <>
      <header className="navigation">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="" />
        </Link>
        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
