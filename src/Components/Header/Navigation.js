import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import Logo from "../../Assets/images/netflix-logo.png";
import { useEffect, useState } from "react";
import avatar from "../../Assets/images/avatar.png";
import "./Navigation.css";
import { useSelector } from "react-redux";
const Navigation = () => {
  const api_key = "?api_key=960a2cf27538aaa362a94e274d44861d";

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const topmovies = useSelector((state) => state.data.topmovies);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const logOut = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  const profile = () => {
    history.push("/Profile");
  };

  const movieList = async () => {
    await fetch(
      ` https://api.themoviedb.org/3/search/movie${api_key}&query=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("search result", data.results);

        dispatch({ type: "MOVIES_LIST", payload: data.results });

        return;
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const navBarVisibility = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", navBarVisibility);

  useEffect(() => {
    if (input && input.length > 0) {
      movieList();
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, topmovies]);

  if (location.pathname !== "/browse") {
    return (
      <Navbar color="light" light expand="md">
        <div className="container-div">
          <div className="left">
            <NavbarBrand href="/">
              <img className="netflix" src={Logo} alt="logo" />
            </NavbarBrand>
          </div>
        </div>
      </Navbar>
    );
  }
  return (
    <div className={`navb ${show && "nav-black"}`}>
      <Navbar fixed color="light" light expand="md">
        <div className="container-div">
          <div className="left">
            <NavbarBrand href="/">
              <img className="netflix" src={Logo} alt="logo" />
            </NavbarBrand>

            <NavItem className="nav">
              <NavLink className="option">Home</NavLink>
              <NavLink className="option">TV Shows</NavLink>
              <NavLink className="option">Movies</NavLink>
            </NavItem>
          </div>
          <div className="right">
            <div class="search-bar">
              <input
                value={input}
                type="search"
                name="search"
                pattern=".*\S.*"
                required
                onChange={(e) => {
                  setInput(e.target.value);
                  if (e.target.value.length === 0) {
                    dispatch({
                      type: "RESET_LIST",
                    });
                  }
                }}
              />
              <button class="search-btn" type="submit">
                <span>Search</span>
              </button>
            </div>
            <NavbarText>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret className="d-d-butn">
                  <img className="avat" src={avatar} alt="ava" />
                </DropdownToggle>
                <DropdownMenu class="menu">
                  <DropdownItem header className="opt">
                    Manage Profile
                  </DropdownItem>

                  <DropdownItem className="opt" onClick={profile}>
                    <img className="avat" src={avatar} alt="ava" /> Shahbaz
                  </DropdownItem>
                  <DropdownItem className="opt" divider />
                  <DropdownItem className="opt">Bar Action</DropdownItem>
                  <DropdownItem className="opt" onClick={logOut}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarText>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
