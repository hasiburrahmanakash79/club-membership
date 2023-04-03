import React, { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const Pricing = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("pricing.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="my-12">
        <h1 className="bg-teal-600 text-5xl font-bold py-5 text-center">Our Package</h1>
      <div className="mt-10 grid md:grid-cols-4 gap-5 md:gap-12 px-6">
        {prices.map((price) => (
          <PriceCart key={price.id} price={price}></PriceCart>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
