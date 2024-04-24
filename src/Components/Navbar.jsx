import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-info-subtle">
      <nav className="navbar navbar-light  justify-content-between container">
        <a href="/" className="navbar-brand">
          LEAVE MANAGEMENT SYSTEM
        </a>
        <form className="form-inline">
          <Link to={"/add"}>
            {" "}
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              ADD
            </button>
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
