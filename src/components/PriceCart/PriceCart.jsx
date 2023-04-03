import React from "react";

const PriceCart = ({ price }) => {
  const { name, amount, description } = price;
  return (
    <div className="bg-teal-500 rounded-lg p-6">
      <div>
        <h1>
          <span className="text-6xl font-extrabold">{amount}</span>
          <span>/month</span>{" "}
        </h1>
        <h1 className="font-bold text-4xl my-4">{name}</h1>
        <h1 className="text-2xl font-semibold">{description}</h1>
      </div>
      <div className="mt-5">
        <button className="bg-teal-800 p-2 text-cyan-50 text-lg font-bold rounded-md hover:bg-teal-900">BUY NOW</button>
      </div>
    </div>
  );
};

export default PriceCart;
