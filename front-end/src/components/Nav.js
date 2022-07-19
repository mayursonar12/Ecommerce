import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  let logout = () => {
    console.log("Logout called");
    localStorage.clear();
    navigate("/sign-up");
  };
  return (
    <ul className="nav">
      <li>
        {" "}
        <Link to="/"> HomePage</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/products"> Products</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/updateProducts"> Update</Link>{" "}
      </li>
      <li>
        {auth ? (
          <Link onClick={logout} to="/sign-up">
            {" "}
            Logout
          </Link>
        ) : (
          <Link to="/sign-up"> SignUp</Link>
        )}
      </li>
    </ul>
  );
};

export default Nav;
