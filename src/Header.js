import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Header.css";
import Searchbar from "./Searchbar";
const options = ["All", "one", "two", "three"];
function Header() {
  return (
    <div className="header">
      <h1 className="heading">FPO list</h1>
      <p className="sort">Sort by:</p>
      <Dropdown
        className="dropdown"
        options={options}
        value={options[0]}
        placeholder="Select an option"
      />
      <Searchbar />
      <button className="header__button">Add FPO</button>
    </div>
  );
}

export default Header;
