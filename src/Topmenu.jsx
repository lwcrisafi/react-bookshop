import React, { useState } from "react";
import "./TopMenu.scss";
import { Link, useLocation } from "react-router-dom";

function Topmenu({ currentPage, setCurrentPage, currentItem }) 
{
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleItemClick = (page) => {
    setCurrentPage(page);
  }
  const location = useLocation();
  console.log(location);

  const onClickLogin = () => {
    
  };

  return (
    <>
      {/* <nav className="topmenu">
        <Link>
          className={`link` + (currentPage === "" ? " link --highlighted" : "")}
          href="#" onClick={() => handleItemClick("")}
        </Link> */}
      {/* </nav> */}
      {open ? (
      <nav className="topmenu">
        <Link
          className={
            `link` + (location.pathname === "/" ? " link--highlighted" : "")
          }
          to="/"
        >
          Home
        </Link>

        <Link
          className={
            `link` + (location === "/about-us" ? " link--highlighted" : "")
          }
          to="/about-us"
        >
          About us
        </Link>

        <Link
          className={
            `link` + (location === "/contact-us" ? " link--highlighted" : "")
          }
          to="/contact-us"
        >
          Contact
        </Link>

        <Link to="/books">Books</Link>
      </nav>
      ) : '' }
      <div className="burger-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul>
        <li>
          <a href="#" onClick={onClickLogin}>
            Login
          </a>
        </li>
      </ul>
    </>
  );
}

export default Topmenu;
