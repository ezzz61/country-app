import React from "react";
import Filter from "../Filter";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import Card from "../Card";

export default function HomePage() {
  const AllCountry = useSelector((state) => state.country.country);
  const sliceCountry = AllCountry.slice(0, 40);
  return (
    <>
      <Navbar />
      <Filter />
      <section className="w-10/12 mx-auto lg:grid grid-cols-5 gap-x-8 gap-y-8 mt-12 mb-12">
        {sliceCountry.map((country) => {
          return (
            <Card
              key={country.name}
              country={country.name}
              img={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </section>
    </>
  );
}
