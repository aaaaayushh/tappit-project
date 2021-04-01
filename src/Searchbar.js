import React, { useState } from "react";
import "./Search.css";
function Searchbar() {
  const [searchTerm, setSearchterm] = useState("");
  const handleChange = (e) => {
    setSearchterm(e.target.value);
  };
  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  );
}

export default Searchbar;
