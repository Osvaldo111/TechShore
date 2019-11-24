import React from "react";
import "../style/search-box.css";

/**
 * @author Osvaldo Carrillo
 * Date: 11/21/19.
 * This class contains the component "Search Box".
 */
export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form action="">
          <input
            className="search-box"
            type="text"
            placeholder="Search something"
          />
        </form>
      </div>
    );
  }
}
