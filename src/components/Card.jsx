import React from "react";

export default function Card(props) {
  const { img, country, population, region, capital } = props;
  return (
    <div className="shadow-md pb-10 rounded-md">
      <figure className="w-full h-44 overflow-hidden rounded-md">
        <img src={img} height={200} alt="" />
      </figure>
      <div className="w-11/12 mx-auto flex flex-col">
        <h4 className="my-3 text-2xl font-semibold">{country}</h4>
        <p>
          <span className="font-semibold text-lg">Population: </span>
          {population}
        </p>
        <p>
          <span className="font-semibold text-lg">Region: </span>
          {region}
        </p>
        <p>
          <span className="font-semibold text-lg">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}
