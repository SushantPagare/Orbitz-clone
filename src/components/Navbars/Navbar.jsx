import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import "./Navbar.css";
import { useState } from "react";
import { Signindropdown } from "./Signindropdown";
export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [signdown, setSigndown] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img
              className="nav-img"
              src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
            ></img>
          </Link>
          <p
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            More Travels {dropdown && <Dropdown />}{" "}
          </p>
        </div>
        <div className="nav-right">
          <div>Espanol</div>
          <div>List your Property</div>
          <div>Support</div>
          <div>Trips</div>
          <div
            onClick={() => {
              setSigndown(!signdown);
            }}
          >
            Sign in {signdown && <Signindropdown />}
          </div>
        </div>
      </nav>
    </>
  );
};
