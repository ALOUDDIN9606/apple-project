import React from "react";
import "./Header.scss";
import { NAVBAR_LIST } from "../../static/index";

const Header = () => {
  const Navbar_list = NAVBAR_LIST.map((item) => (
    <li key={item.id} className="navbar_item">
      <a href={item.link} className="navbar_link">
        {item.icon && <item.icon className="navbar_icon" />}
        <span>{item.name}</span>
      </a>
    </li>
  ));

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar_collection">{Navbar_list}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
