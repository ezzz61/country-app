import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./components/pages/HomePage";
import { getAllCountry } from "./store/country-slice";

function App() {
  const AllCountry = useSelector((state) => state.country.status);
  console.log(AllCountry);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountry());
  }, [dispatch]);

  return <HomePage />;
}

export default App;
