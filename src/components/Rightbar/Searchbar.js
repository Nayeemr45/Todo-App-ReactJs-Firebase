import React from 'react';
import '../../asset/css/searchbar.css';
import SearchIcon from "@material-ui/icons/Search";

function Searchbar() {
    return (
        <div className="search">
      <div className="search__input">
        <SearchIcon className="search__searchIcon" />
        <input placeholder="Search Task" type="text" size="60" />
      </div>
    </div>
    )
}

export default Searchbar
