import React from "react";
import { useDispatch } from "react-redux";
import { countryAction } from "../store/country-slice";

export default function Navbar() {
  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(countryAction.resetCountry());
  };

  return (
    <header className="border-b-2">
      <div className="w-10/12 mx-auto flex justify-between py-7">
        <span onClick={resetHandler} className="text-2xl font-bold cursor-pointer">
          Where in the world?
        </span>
        {/* <div className="font font-semibold">Dark Mode</div> */}
      </div>
    </header>
  );
}
