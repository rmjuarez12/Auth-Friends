// Import Modules
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header(props) {
  const isLoggedIn = props.isLoggedIn;

  const PrivateItems = (props) => {
    if (isLoggedIn) {
      return (
        <NavLink to={props.route} activeClassName='current-route'>
          {props.label}
        </NavLink>
      );
    }

    return "";
  };

  const manageLoginBtn = (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      localStorage.removeItem("token");
      props.userLoggedIn(true);
    }

    props.history.push("/login");
  };

  return (
    <header>
      <div id='logo'>
        <h1>RickBook</h1>
      </div>

      <div className='navigation'>
        <nav>
          <NavLink to='/' activeClassName='current-route' exact>
            Home
          </NavLink>
          <PrivateItems route='/friends' label='Friends' />
          <PrivateItems route='/add-friends' label='Add Friends' />
        </nav>

        <div className='login'>
          <button onClick={manageLoginBtn}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);
