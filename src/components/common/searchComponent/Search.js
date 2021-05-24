import React, { Fragment } from "react";
import { GrSearch } from "react-icons/gr";

function Search() {
  return (
    <Fragment>
      <div className="search-container">
        <GrSearch />
        <input type="text" className="input-search" />
      </div>
    </Fragment>
  );
}

export default Search;
