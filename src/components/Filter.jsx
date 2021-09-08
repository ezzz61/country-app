import React, { useState } from "react";
import serchIcon from "../assets/icons/search-icon.svg";
import { useDispatch } from "react-redux";
import { countryAction } from "../store/country-slice";

export default function Filter() {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const optionHandler = (e) => {
    dispatch(countryAction.filterByRegion(e.target.value));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(countryAction.filterByCountyName(inputValue));
  };

  return (
    <form onSubmit={handelSubmit} className="w-10/12 mx-auto mt-8 lg:flex justify-between items-center">
      <div className="shadow-md lg:w-4/12 flex h-16 px-6 items-center">
        <img src={serchIcon} alt="" />
        <input
          onChange={handleChange}
          value={inputValue}
          placeholder="Search for a country..."
          className="ml-4 w-full py-1 px-2 text-lg"
          type="text"
        />
      </div>
      <div className="lg:w-2/12 w-6/12 py-4">
        <select
          onChange={optionHandler}
          placeholder="Filter by Region"
          className="w-full h-16 px-4 shadow-md outline-none"
        >
          <option className="hidden" value="" disabled selected>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
}
