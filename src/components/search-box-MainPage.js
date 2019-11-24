import React from "react";
import "../style/search-box-MainPage.css";
import SearchBox from "./search-box";

/**
 * @author Osvaldo Carrillo.
 * Date: 11/21/2019
 * This class contains the "Search Box" and "Filter by County" sections
 * that are display on the main page of the site.
 */
export default class SearchBoxContainer extends React.Component {
  render() {
    return (
      <div className="search-container">
        <SearchBox />
        <div className="filter-country">
          <h1>Filter By Country</h1>
          <div className="filter-country-container">
            <input type="checkbox" id="checkBoxUS" name="US" value="US" />
            <label htmlFor="US">United States</label>
            <input type="checkbox" id="checkBoxCND" name="CND" value="CND" />
            <label htmlFor="CND">Canada</label>
            <input type="checkbox" id="checkBoxUK" name="UK" value="UK" />
            <label htmlFor="UK">United Kingdom</label>
            <input type="checkbox" id="checkBoxWW" name="WW" value="WW" />
            <label htmlFor="WW">Worldwide</label>
          </div>
        </div>
      </div>
    );
  }
}
