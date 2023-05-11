import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

// Images
import Logo from "../../assets/Logo.jpeg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { onSignOut } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
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
          {currentUser ? (
            <button onClick={onSignOut}>Logout</button>
          ) : (
            <Link className="nav-link" to="/signin">
              SIGN IN
            </Link>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
