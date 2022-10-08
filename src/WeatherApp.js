import React from "react";
export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      {" "}
      <form className="Form input-group">
        <input
          type="text"
          className="form-control city-search"
          autocomplete="off"
          placeholder="Enter a city"
        />
        <button
          className="btn btn-outline-secondary search-button"
          type="submit"
        >
          SEARCH
        </button>
        <button
          className="btn btn-outline-secondary current-button"
          type="button"
        >
          CURRENT
        </button>
      </form>
    </div>
  );
}
