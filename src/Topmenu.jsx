import React, { useState } from "react";
import "./TopMenu.scss";

function Topmenu({ currentPage, setCurrentPage, currentItem }) 
{
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleItemClick = (page) => {
    setCurrentPage(page);
  }

  const onClickLogin = () => {
    
  };

  return (
    <>
      {open ? (
        <nav className="topmenu">
          <a
            className={
              `link` + (currentPage === "" ? " link --highlighted" : "")
            }
            href="#"
            onClick={() => handleItemClick("")}
          >
            Home
          </a>
          <a
            className={
              `link` + (currentPage === "about" ? " link --highlighted" : "")
            }
            href="#about"
            onClick={() => handleItemClick("about")}
          >
            About us
          </a>
          <a
            className={
              `link` + (currentPage === "contact" ? " link --highlighted" : "")
            }
            href="#contact"
            onClick={() => handleItemClick("contact")}
          >
            Contact
          </a>
        </nav>
      ) : (
        ""
      )}
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
